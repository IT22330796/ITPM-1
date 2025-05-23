import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import itineraryRoute from "./routes/itinerary.route.js";
import expenseRoute from "./routes/expense.route.js";
import orderRoutes from "./routes/order.route.js";
import recomandationRoutes from "./routes/recomandation.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(cookieParser());
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is Running on Port 3000");
});

const corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/itinary", itineraryRoute);
app.use("/api/expense", expenseRoute);
app.use("/api/orders", orderRoutes);
app.use("/api/recomandation", recomandationRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
