import express from "express";
import Router from "./routes/index.js";
import db from "./config/database.js";
import cors from "cors";

const app = express();

try {
  await db.authenticate();
  console.log("Koneksi Database OK");
} catch (error) {
  console.log("KOneksi Database Error");
}

app.use(cors());
app.use(express.json());
app.use("/", Router);

app.listen(5000, () => console.log("Server 5000 Running"));
