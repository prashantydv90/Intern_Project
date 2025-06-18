const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const router=require("./app/routes/authRoutes")

dotenv.config();
const app = express();

app.use(cors({
  origin: 'https://intern-project-ofwq.vercel.app',
  credentials: true, 
}));
app.use(express.json());
app.use("/api",router);


connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
