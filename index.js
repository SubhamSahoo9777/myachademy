import express from 'express'
import colors from "colors"
import cors  from "cors"
import morgan from 'morgan'
import dotenv from "dotenv"
import connectDB from './connectDB.js'
import userRoutes from "./routers/userRoutes.js";
import tutorialRoutes from "./routers/tutorialRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

(async()=>{
const {sequelize,DataTypes}=await connectDB()
app.get("/",(req,res)=>res.status(200).json({success:true,message:"welcome"}))

// Routes
app.use('/api/v1', userRoutes);
app.use('/api/v1', tutorialRoutes);


app.listen(8081,()=>console.log(`server run successfully on port 8081`.bgGreen.white))
})();
