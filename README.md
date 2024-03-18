# Node.js Project -

This project is a Node.js application for managing user data.

## Installation

1. Clone the repository:
   git clone <repository-url>

2. npm install
3. Set up environment variables:

Create a .env file in the root directory and add the following variables:
PORT=7000
MONGOURL=your mongodb connection string

4. Start the server:
npm start

5. API Endpoints-
Create a User
Endpoint: POST /api/create

Get All Users
Endpoint: GET /api/getall

Update User Information
Endpoint: PUT /api/update/:id

Delete User
Endpoint: DELETE /api/delete/:id
