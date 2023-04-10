const express = require("express");
const router = express.Router();
const Categorie = require("../models/Category");

router.get("/admin/categories", (req,res)=>{
    res.render("admin/categories/index")
})

router.get("/admin/load-categories", (req, res) =>{
    Categorie.findAll().then(categories =>{
        res.send(JSON.stringify(categories));   
    })
});


router.post("/admin/categorie", (req, res) =>{
    var name = req.body.name;

    if( name != undefined){
        Categorie.create({
            name: name,
            status: 1
        }).then( ()=> {
            console.log("Cadastrou no banco")
            res.send(JSON.stringify({"success" : "Cadastro realizado com sucesso"}));
        })
    }
    
});

module.exports = router;
