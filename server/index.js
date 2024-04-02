import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { contentRouter } from './routes/contentRoute.js';
import dbConnection from './db.js';

//dotenv configuration
dotenv.config();

// server set up
const app = express();
const PORT = process.env.PORT || 5000;


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({origin: "*"}))

//database connection
dbConnection();

//routing
app.use('/api', contentRouter)

app.listen(PORT, ()=>{
    console.log("Server Running on the port", PORT)
});



