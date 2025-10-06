import express from "express";
import home from "./home.js";
const app=express();

const PORT=5001;

app.use("/",home);

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})