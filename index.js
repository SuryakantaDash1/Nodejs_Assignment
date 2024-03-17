import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './routes/userRoute.js';



const app = express();


app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=> {
    console.log("Database connected successfully");
}).catch(error => console.log(error));


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});


app.use("/api", route);