import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();
mongoose
  .connect(process.env.MANGO)
  .then(() => {
    console.log("DataBase connected successfully!");
  })
  .catch((err) => console.log(err));

const app = express();
app.use(express.json()); //it will allow json to show in terminal
app.use(cookieParser());
app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing', listingRouter);

app.use((err, req, res, next)=>{ //error message middleware
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  return res.status(statusCode).json({
    success : false,
    statusCode,
    message,
  })

})
