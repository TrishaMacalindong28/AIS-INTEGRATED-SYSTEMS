import express from "express";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());

// request logger first
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes before listen
app.use("/user", authRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Listening to port ${process.env.PORT || 3001}...`);
});