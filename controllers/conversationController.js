const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ConversationModel = require("../models/Conversation");


const Conversation = mongoose.model("Conversation", ConversationModel);

router.get("/admin/conversation", (req, res)=>{
    //res.render("portal/dashboard/index");

    // const conversation = new Conversation({
    //     title: "Greanting", 
    //     questions:{
    //         titles:["Hello", "GoodMorning"], 
    //         audios:["hello.mp3", "goodmorning.mp3"]
    //     }, 
    //     responses: {
    //         titles:["hello", "goodMorning"]
    //     }
    // });

    // conversation.save().then(()=>{
    //     res.send(JSON.stringify({"success" : "Cadastro realizado com sucesso"}))
    // }).catch((error)=>{
    //     res.send(JSON.stringify({"error": error}))
    // });

    Conversation.find({'title' : 'Greanting'}).then(conv => {
        res.send(JSON.stringify({conv}))
    }).catch((err => {
        res.send(JSON.stringify({"error": error}))
    }))
})


module.exports = router;