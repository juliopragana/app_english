const express = require("express");
const router = express.Router();
const Phrase = require("../models/Phrase");
const Category = require("../models/Category");
const Level = require("../models/Level");
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb("null", "public/audios/");
    },
    filename: function(req,file,cb){
        cb(null, file.originalname);
    }
})

const upload = multer({storage});


router.get("/admin/phrases", async (req,res)=>{
    
    let categories = await Category.findAll();

    res.render("admin/phrases/index", {categories: categories})
})

//Rota que busca todas as frases no banco para carregar no JqueryDatables
router.get("/admin/load-phrases", (req,res)=>{
    Phrase.findAll({
        include: [
            {
                model: Category
            }
        ]
    }).then(phrases =>{
        res.send(JSON.stringify(phrases));   
    })
});


router.post("/admin/phrase", upload.single('audio'), (req, res) =>{
    var id = req.body.id;
    var portuguese = req.body.portuguese;
    var english = req.body.english;
    var pronunciation = req.body.pronunciation;
    var categoryId = req.body.categoryId;
    //var audio = req.body.audio;


    if(id != undefined){
        if( portuguese != undefined && english != undefined && pronunciation != undefined && categoryId != undefined){
            Phrase.update({
                portuguese: portuguese,
                english: english,
                pronunciation: pronunciation,
                categoryId: categoryId
            },
            {
                where:{
                    id: id
                }
            }).then( ()=> {
                res.send(JSON.stringify({"success" : "Dados alterados com sucesso"}));
            })
        }else {
            res.send(JSON.stringify({"error" : "Todos os campos precisam ser preenchidos"}));
        }
    } else {
        if( portuguese != undefined && english != undefined && pronunciation != undefined && categoryId != undefined){
            Phrase.create({
                portuguese: portuguese,
                english: english,
                pronunciation: pronunciation,
                categoryId: categoryId,
            }).then( ()=> {
                console.log("Cadastrou no banco")
                res.send(JSON.stringify({"success" : "Cadastro realizado com sucesso"}));
            }).catch((error)=>{
                res.send(JSON.stringify({"error" : "Ops, houve um erro na hora do cadastro. Tente novamente mais tarde"}));
            })
        } else {
            res.send(JSON.stringify({"error" : "Todos os campos precisam ser preenchidos"}));
        }
    }
     
});

router.get("/admin/phrase/:id", async (req,res)=>{
    id = req.params.id;

    var phrase = await Phrase.findByPk(id, {
        include: [
            {
                model: Category
            }
        ]
    }).then(phrase)

    res.send(JSON.stringify(phrase));
})



module.exports = router;