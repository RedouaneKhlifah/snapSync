import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// import utiles

// imported routes

// import middlwares

// env
dotenv.config();

// database
connectDB();

// define express
const app = express();

// use cors
app.use(cors());

// use json to handel data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use routes

// use error Middlewares

export default app;
