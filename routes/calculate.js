const router = require('express').Router();
//const pool = require("../../database");
const Item = require('../schema/price');
const dotenv = require('dotenv');
dotenv.config();
const waf = JSON.parse(process.env.waf);



const LoadData =   [
    {
      "id": "2",
      "name": "Masala Noodels",
      "image": "https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
      "price": 150,
    },
    {
      "id": "4",
      "name": "Mexican Tacos",
      "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-202104-birriatacos-058-1619806492.jpg",
      "price": 369,
    },
    {
      "id": "5",
      "name": "Pani Puri",
      "image": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201708/dish-story_647_081417052301.jpg?Versionid=VSzUwnMrbhD64jwKU7p.e6KBcJaW9CvU&size=690:388",
      "price": 80,
    },
    {
      "id": "8",
      "name": "Sabudhdanna",
      "image": "https://c.ndtvimg.com/2022-08/ft4hhqjo_sabudana-khichdi_625x300_16_August_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
      "price": 209,
    },
    {
      "id": "9",
      "name": "Burger",
      "image": "https://www.ingredion.com/content/dam/ingredion/usca-images/food/meat/cheeseburger-bread_720x560.jpg",
      "price": 239,
    },
    {
      "id": "6",
      "name": "Banana",
      "image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
      "price": 100,
    }
  ]






router.get('/p/:p', (req, res) => { 
	var limit =5;
	const page = req.params.p;
        //var page = parseInt(req.query.p);
	var skip = (page - 1) * limit;
    Item.find().skip(skip).limit(limit).exec((error, items) => {
        if (error) {
            res.status(400).send(error);
        } else {
            //let items_obj =  { test : items };
            let response = {
                "test": items
            }
           console.log(response);
            res.send(response).status(200);
        }
    });
});

router.post('/', async (req, res) => {
    try {
        // Get the array of item IDs from the request body
        const itemIds = req.body.id;

        // Find all items that match the given IDs
        const items = await Item.find({ id: { $in: itemIds } });

        // Send the total price in the response
        res.send(items);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/cal', async (req, res) => {
    try {
        // Get the array of item IDs from the request body
        const itemIds = req.body.id;

        // Find all items that match the given IDs
        const items = await Item.find({ id: { $in: itemIds } });

        // Calculate the total price
        let totalPrice = 0;
        items.forEach(item => {
            totalPrice += item.price;
        });

        // Send the total price in the response
        res.send({ totalPrice });
    } catch (err) {
        res.status(400).send(err);
    }
});


router.post('/create', async (req, res) => {

    //validate using joi(schema)
    //const {error} = validation.val_user.validate(req.body);
    //res.send(error.details);
    //res.send(error.details[0].message);
    //if(error) return res.status(400).send(error.details[0].message);
    const ids = req.body.id;
    try {
    const id = await Item.find({id: ids});

    if ((id.length > 0) && waf) {
        res.status(406).send('id already exits so try with another id');
        return;
    }
} catch (err) {
    res.status(500).send(err);
    return;
}
    try{
        const new_query=new Item(
            {
                id      :req.body.id,
                name    :req.body.name,
                image   :req.body.image,
                price   :req.body.price
            });
        

            let savequery = await new_query.save();
            res.send("product saved successfully");
            
        }catch(err)
        {
            res.status(406).send( err );
        }
});

router.post('/bulkCreate', async (req, res) => {
    try {

        const items = req.body;
        await Item.insertMany(items);
        res.send("Records inserted successfully.");
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/load', async (req, res) => {
    try {

        const items = LoadData;
        await Item.insertMany(items);
        res.send("Records inserted successfully.");
    } catch (err) {
        res.status(400).send(err);
    }
});




module.exports = router;
