import express from "express"
const app = express()
import products from"./data/products.js"
import dotenv from "dotenv"
import connectDB from "./config/db.js"

dotenv.config()

connectDB()

const PORT=process.env.PORT || 5000
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`))

app.get("/" , (req,res)=>{
    res.send("api is running")
})
app.get("/api/products" , (req,res)=>{
    res.json(products)
})
app.get("/api/products/:id" , (req,res)=>{
    const product=products.find(product=>product._id===req.params.id)
    res.json(product)
})