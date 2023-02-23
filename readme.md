Base URL: localhost:3000 #(for localhost only)

GET /p/:p This endpoint returns a list of items with a specified limit and page number. Parameters:

p: The page number to return. Response:

200 OK: The request was successful. The response body contains an object with a single key, "test", which has an array of item objects. 400 Bad Request: The request was unsuccessful due to a client error. The response body contains an error message. POST / This endpoint returns a list of items with a specified array of item IDs. Request Body:

id: An array of item IDs to search for. Response:

200 OK: The request was successful. The response body contains an array of item objects. 400 Bad Request: The request was unsuccessful due to a client error. The response body contains an error message. POST /cal This endpoint calculates the total price of a specified array of items. Request Body:

id: An array of item IDs to search for. Response:

200 OK: The request was successful. The response body contains an object with a single key, "totalPrice", which has the total price of the specified items. 400 Bad Request: The request was unsuccessful due to a client error. The response body contains an error message. POST /create This endpoint creates a new item with the specified details. Request Body:

id: The ID of the item. This should be unique. name: The name of the item. image: The URL of an image of the item. price: The price of the item. Response:

200 OK: The request was successful. The response body contains a success message. 406 Not Acceptable: The request was unsuccessful due to a conflict with an existing item ID. The response body contains an error message. 500 Internal Server Error: The request was unsuccessful due to a server error. The response body contains an error message. POST /bulkCreate This endpoint creates multiple new items with the specified details. Request Body:

An array of item objects with the following properties: id: The ID of the item. This should be unique. name: The name of the item. image: The URL of an image of the item. price: The price of the item. Response:

200 OK: The request was successful. The response body contains a success message. 400 Bad Request: The request was unsuccessful due to a client error. The response body contains an error message.