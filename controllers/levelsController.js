const express = require("express");
const router = express.Router();
const Level = require("../models/Level");


router.get("/admin/levels", (req,res)=>{
    res.render("admin/levels/index")
})

router.get("/admin/load-levels", (req, res) =>{
    Level.findAll().then(levels =>{
        res.send(JSON.stringify(levels));   
    })
});

router.post("/admin/level", (req, res) =>{
    var name = req.body.name;

    if( name != undefined){
        Level.create({
            name: name,
            status: 1
        }).then( ()=> {
            console.log("Cadastrou no banco")
            res.send(JSON.stringify({"success" : "Cadastro realizado com sucesso"}));
        })
    }
    
});

module.exports = router;