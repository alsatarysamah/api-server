'use strict';

require('dotenv').config();
const port=process.env.port || 3030;
const notFoundHandler = require("./errorHandlers/404");
const errorHandler = require("./errorHandlers/500"); 
const foodRoutes = require("./routs/food");
const {foodCollection} = require("./models/lib/collection");
const clothesRoutes=require("./routs/clothes")

const express= require ('express');
const app = express();

app.use(express.json());

app.use(foodRoutes);
app.use(clothesRoutes);
// app.use(clothesRoutes);
// app.use("/food",async (req,res) => {
//     let newFood =req.body;
//     console.log("new  "+newFood)
//     console.log("model is  "+foodCollection);
//     let newRecored=await foodCollection.create(newFood);
//     res.status(201).json(newRecored);

// })
app.get("/",(req,res) => {
    res.send("Home");
})
app.use("*",notFoundHandler);
app.use(errorHandler);
function start(PORT) {
    app.listen(PORT, () => {
        console.log(`Listening and Running on port ${PORT}`);
    });
}

module.exports ={

    start:start,
    app: app,
}