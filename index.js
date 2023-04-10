//Imports
var express = require("express")
const { Socket } = require("socket.io")
var app = express()
var http = require("http").createServer(app);
var cors = require('cors');
const bodyParser = require("body-parser");

//Controllers
const portalController = require("./controllers/portalController");
const phrasesController = require("./controllers/phrasesController");
const categoriesController = require("./controllers/categoriesController")
const levelsController = require("./controllers/levelsController");
const conversationController = require("./controllers/conversationController");

//Conexao com o banco de dados
const connection = require("./database/connection");
const connectionMongo = require("./database/database-mongo");

//Cors
app.use(cors());

//Socket.io
var io = require("socket.io")(http, {
    cors: {
        origin: "*",
    }
});

// Definindo o EJS como template engine
app.set("view engine", "ejs");
// Definindo local onde fica os arquivos estáticos
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Socket.io
io.on("connection", (socket)=>{
    socket.on("chamarSenha", (data) => {
        io.emit("redirecionaTela", (data));
    });
});

// Rotas 
app.use("/", portalController);
app.use("/", phrasesController);
app.use("/", categoriesController);
app.use("/", levelsController);
app.use("/", conversationController);

http.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000")
});