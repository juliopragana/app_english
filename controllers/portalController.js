const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
const Phrase = require("../models/Phrase");
const Level = require("../models/Level");
const ConversationModel = require("../models/Conversation");
const mongoose = require("mongoose");

const Conversation = mongoose.model("Conversation", ConversationModel);


router.get("/", (req, res)=>{
    res.render("portal/dashboard/index");
})

router.get("/dashboard", async (req, res) =>{
    const categories = await Category.findAll({
        include: [
            {
                model: Level
            }
        ]
    });
    const levels = await Level.findAll();
    res.render("portal/dashboard/dashboard", {categories: categories, levels: levels});
})

router.get("/dashboard/practice/:category", async (req,res) =>{
    category = req.params.category;

    const phrases = await Phrase.findAll({
        include: [
            {
                model : Category,
                where:{
                    name: category
                } 
            }
        ]

    });

    res.render("portal/dashboard/practice", {phrases: phrases, title: category});
});

router.get("/dashboard/pratice/conversation/:id", (req,res) =>{
    res.render("portal/dashboard/conversation");
})


module.exports = router;