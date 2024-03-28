import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js"

dotenv.config();
connectDB();

const app = express();
const port = 8000;

app.use(express.json());
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));




app.use("/api/users", userRoutes);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
