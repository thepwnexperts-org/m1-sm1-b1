const router = require('express').Router();
//const pool = require("../../database");
const Item = require('../schema/price');
const dotenv = require('dotenv');
dotenv.config();

function removeQuotes(obj) { let json = JSON.stringify(obj); 
    json = json.replace(/"([^"]+)":/g, '$1:');
 return JSON.parse(json);
}

router.get('/', async (req, res) => { 
    Item.find().limit(5).exec((error, items) => {
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

router.get('/cart', async (req, res) => {
    const ids=req.body.ids;
    Item.find({ id: { $in: ids } }, (err, items) => {
        if (err) {
            // handle error
        } else {
            console.log(items);
        }
    });
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
    try{
        const new_query=new Item(
            {
                id      :req.body.id,
                name    :req.body.name,
                image   :req.body.image,
                price   :req.body.price
            });
        
            
            //console.log('before save');
            let savequery = await new_query.save();
            res.send("product saved successfully");
            
        }catch(err)
        {
            res.status(400).send( err );
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



module.exports = router;
