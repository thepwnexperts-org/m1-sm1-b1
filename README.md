# price tampering example

[![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](LICENSE)

Short project description goes here.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before running the project, make sure you have the following prerequisites installed:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thepwnexperts-org/m1-sm1-b1.git
   ```

2. Change into the project directory:

   ```bash
   cd m1-sm1-b1
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up the required environment variables:

   - Create a `.env` file in the root directory.
   - Add the following content to the `.env` file:

     ```dotenv
     # Example .env file

     # Database
     # Set the MongoDB URI for connecting to the database
     dburi=mongodb+srv://username:password@cluster.example.com/database_name

     # Rate limit
     # Enable or disable the Web Application Firewall (WAF)
     waf=true

     # Set the optimal rate for rate limiting
     optrate=1
     ```

     Replace `username`, `password`, `cluster.example.com`, and `database_name` with the actual values corresponding to your MongoDB configuration.

5. Start the server:

   ```bash
   npm start
   ```


## API Endpoints

This section provides details about the API endpoints and their usage.

### Get Paginated Items

- **URL:** `/p/:p`
- **Method:** `GET`
- **Description:** Retrieves paginated items.

   **URL Parameters:**

   | Parameter | Type   | Description                   |
   |-----------|--------|-------------------------------|
   | `p`       | Number | Page number (starting from 1) |

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

- **URL:** `/`
- **Method:** `POST`
- **Description:** Retrieves items based on the provided IDs.

   **Request Body:**

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

- **URL:** `/cal`
- **Method:** `POST`
- **Description:** Calculates the total price of items based on the provided IDs.

   **Request Body:**

   ```json
   {
     "id": ["1", "2", "3"]
   }
   ```

   **Example Response:**

   ```json
   {
     "totalPrice": 50
   }
   ```

### Create Item

- **URL:** `/create`
- **Method:** `POST`
- **Description:** Creates a new item.

   **Request Body:**

   ```json
   {
     "id": "4",
     "name": "Item 4",
     "image": "image_url_4",
     "price": 40
   }
   ```

   **Example Response:**

   ```
   "Product saved successfully"
   ```

### Bulk Create Items

- **URL:** `/bulkCreate`
- **Method:** `POST`
- **Description:** Creates multiple items in bulk.

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

   ```
   "Records inserted successfully."
   ```

Include details of all your API endpoints in a similar manner.

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow the steps below:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit and push your changes.
5. Create a pull request.

Please provide a detailed description of your changes and why you think they should be merged.

## License

This project is licensed under the [GPL-3.0 License](LICENSE).
```

I've included the modified code for the `routes/calculate.js` file and updated the API endpoints section in the README accordingly. Feel free to adjust the code or provide more information if needed.
