
const express = require("express");
const { json } = require("express/lib/response");

const {clothesCollection} = require("../models/index.js");
const cloRouter = express.Router();
cloRouter.get("/clothes",getAll);
cloRouter.post("/clothes",creatRecord);
cloRouter.put("/clothes/:id",updating);
cloRouter.delete("/clothes/:id",deleting);
cloRouter.get("/clothes/:id",getOneRecored);


////////////////creat=insert////////////////////
async function creatRecord(req,res){
    // console.log("body  "+json(req.body))
let newclo =req.body;
// console.log("new  "+newclo)
// console.log("model is  "+foodCollection);
let newRecored=await clothesCollection.create(newclo);
res.status(201).json(newRecored);
// res.json(req.body)

}
///////////select *//////////////////
async function getAll(req,res){
    let clo = await clothesCollection.read();
    res.status(200).json(clo);

}

///////////////update/////////
async function updating(req,res){

    let id = parseInt(req.params.id);
    let newRecored = req.body;
    let found = await clothesCollection.read(id);
    if (found) {
        let updated = await found.update(newRecored);
        res.status(201).json(updated);
    }
}
/////////////delete///////////////
async function deleting(req,res){

    let id = parseInt(req.params.id);
    let deleted = await clothesCollection.delete(id);
    res.status(204).json(deleted);
}

/////////////get one/////////////

async function getOneRecored(req,res)
{
    const id = parseInt(req.params.id);
    let recored = await clothesCollection.read(id);
    res.status(200).json(recored);
}
module.exports=cloRouter;