import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.js";
import InquiryRoute from "./routes/Inquiry-route.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());

connectDB();

app.use("/api/inquiries", InquiryRoute);

app.use(errorHandler);

export default app;
