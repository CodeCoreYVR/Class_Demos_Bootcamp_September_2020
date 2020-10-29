const express=require("express");
const knex=require("../db/client");

const router= express.Router();


router.get("/",(req,res)=>{
    console.log('I am in posts router')
});


module.exports=router;