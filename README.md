
# MERN Stack Application

## Description
This is a MERN (MongoDB, Express.js, React.js, Node.js) stack application designed for managing a warehouse. The application allows users to manage inventory, orders, and other warehouse operations efficiently.

## Prerequisites
Make sure you have the following installed on your system:
- Node.js
- npm (Node Package Manager)
- MongoDB

### Environment Variables Backend
MONGO_URI=mongodb+srv://btasevski123:VIVsqBgKlhARv56x@warehouse-mern.jbjbcsx.mongodb.net/?retryWrites=true&w=majority&appName=warehouse-mern
NODE_ENV=production
JWT_SECRET=WAREHOUSE123
CLOUDINARY_URL=cloudinary://642433984639641:8qdtro2MJQyV7vkPtt5CiG1DP_g@dbhhs7fdb

### note:
{create an .env file in the backend folder and copy these variables}

### Environment Variables Frontend
REACT_APP_BACKEND_URL=http://localhost:5000

### note:
{create an .env file in the frontend folder and copy these variables}

### note:
{create an .env file in the backend/frontend folder and copy these variables}

## Installation

```bash
git clone <repository-url>
cd <repository-directory>


### Running the Application Locally

#Backend :
cd backend
npm install
npm run backend

#Frontend : 
cd frontend
npm install
npm start