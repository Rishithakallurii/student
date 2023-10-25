
const mongoose = require("mongoose");
const express =require("express");
const studentRoute = require("./controller/studentRouter");
const cors = require("cors");
const bodyParser = require("body-parser");


//Mongodb Atlas connection
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://user2:1234@cluster0.ywwbgwt.mongodb.net/");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred"));

//creating a app
const app = express();

//middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/students",studentRoute)

//listening to a port number
app.listen(4000,()=>{
    console.log("server started at 4000")
})

