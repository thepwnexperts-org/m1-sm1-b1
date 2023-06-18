# API Endpoints

This repository contains the implementation of API endpoints using Node.js and Express.js. These endpoints provide functionality related to managing and retrieving item prices.

## Prerequisites

Before running the API, make sure you have the following prerequisites installed:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thepwnexperts/m1-sm2-b2.git
   ```

2. Change into the project directory:

   ```bash
   cd m1-sm2-b2
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up the required environment variables:

   - `waf`: Enable/disable Web Application Firewall (true/false)

5. Start the server:

   ```bash
   npm start
   ```

## Endpoints

### Get Paginated Items

**URL:** `/p/:p`

**Method:** `GET`

**Description:** Retrieves paginated items.

**URL Parameters:**

| Parameter | Type   | Description                    |
|-----------|--------|--------------------------------|
| `p`       | Number | Page number (starting from 1)  |

**Example Request:**

```bash
GET /p/1
```

**Example Response:**

```json
{
  "test": [
    {
      "_id": "610d2a28e0705638c891b3c4",
      "id": "1",
      "name": "Item 1",
      "image": "image_url_1",
      "price": 10
    },
    {
      "_id": "610d2a28e0705638c891b3c5",
      "id": "2",
      "name": "Item 2",
      "image": "image_url_2",
      "price": 20
    },
    ...
  ]
}
```

### Get Items by IDs

**URL:** `/`

**Method:** `POST`

**Description:** Retrieves items based on the provided IDs.

**Request Body:**

| Parameter | Type     | Description                              |
|-----------|----------|------------------------------------------|
| `id`      | String[] | Array of item IDs to retrieve information |

**Example Request:**

```json
{
  "id": ["1", "2", "3"]
}
```

**Example Response:**

```json
[
  {
    "_id": "610d2a28e0705638c891b3c4",
    "id": "1",
    "name": "Item 1",
    "image": "image_url_1",
    "price": 10
  },
  {
    "_id": "610d2a28e0705638c891b3c5",
    "id": "2",
    "name": "Item 2",
    "image": "image_url_2",
    "price": 20
  },
  ...
]
```

### Calculate Total Price

**URL:** `/cal`

**Method:** `POST`

**Description:** Calculates the total price of items based on the provided IDs.

**Request Body:**

| Parameter | Type     | Description                              |
|-----------|----------|------------------------------------------|
| `id`      | String[] | Array of item IDs to calculate total price |

**Example Request:**

```json
{
  "id": ["1", "2", "3"]
}
```

**Example Response:**

```json
{
  "totalPrice": 30
}
```

### Create Item

**URL:** `/create`

**Method:** `POST`

**Description:** Creates a new item.

**Request Body:**



| Parameter | Type   | Description        |
|-----------|--------|--------------------|
| `id`      | String | Item ID            |
| `name`    | String | Item name          |
| `image`   | String | Item image URL     |
| `price`   | Number | Item price (in USD)|

**Example Request:**

```json
{
  "id": "4",
  "name": "Item 4",
  "image": "image_url_4",
  "price": 40
}
```

**Example Response:**

```text
product saved successfully
```

### Bulk Create Items

**URL:** `/bulkCreate`

**Method:** `POST`

**Description:** Creates multiple items in bulk.

**Request Body:**

```json
[
  {
    "id": "5",
    "name": "Item 5",
    "image": "image_url_5",
    "price": 50
  },
  {
    "id": "6",
    "name": "Item 6",
    "image": "image_url_6",
    "price": 60
  },
  ...
]
```

**Example Response:**

```text
Records inserted successfully.
```

## Error Handling

In case of errors, the API will return an appropriate HTTP status code along with an error message.

- `400 Bad Request`: Invalid request parameters or item already exists (if WAF is enabled).
- `500 Internal Server Error`: Internal server error occurred.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the functionality of the API, feel free to open a pull request.

## License

This project is licensed under the [GPL-3.0 License](LICENSE).
```

