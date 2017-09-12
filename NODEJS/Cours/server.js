//Express est un module de node pour gérer un serveur http !
var express = require("express"); 
var app = express();

//Permet de recuperer les datas dans la requête ('POST', 'GET' ...ect)
var bodyParser = require('body-parser');

var mysql = require("mysql");

//Mon module Book
var Book = require("./libs/Book");
var Cd = require("./libs/Cd");

//Mes services
var Services = require("./libs/Services");

//On doit utiliser cette commande pour rendre le dossier "statique", non rerouté par le serveur
app.use(express.static('public'));

//On demande a express d'utiliser body parser
app.use(bodyParser.urlencoded({ extended: false }));

var SERVOR = {
    errors : []
};
var user = "Pierre";
var counter = 0;

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'nodejs'
});

app.get('/', function(req, res){

    var html = "<div>";
    html += "User is " + user;
    html += "</div>";

    res.send( html );

});

app.get('/home', function(req, res){
    counter ++;
    console.log( "Page vue :" + counter + " fois" );
    res.render( "home.ejs", { //Ne pas oublier d'installer EJS (moteur de template)
        title : "Home",
        user : user,
        content : "Bienvenue sur la home page"
    } );
});

app.get('/livres', function( req, res ){

    // !!! On va devoir faire le render dans le callback car js est non-bloquant
    connection.query("SELECT * FROM livres", function( error, results, fields ){

        var livres = [];
        for( var result of results ){

            var book = new Book( result );
            livres.push( book );

        }
        
        res.render( "livres.ejs", {
            title : "Livres",
            livres : livres
        } );

    });

});

app.post("/service/add/livre", function(req, res){

    //Les données envoyé sont dans req.body d'après la doc
    console.log( req.body );
    
    connection.query(
        "INSERT INTO livres SET name=?, autor=?, pages=?",
        [req.body.name, req.body.autor, req.body.pages],
        function( error, results, fields ){
            res.redirect( "/livres" );
        }
    )

});

app.get("/cds", function( req, res ){

    connection.query("SELECT * FROM cds", function(error, results, fields){

        var cds = [];
        for( var result of results ){

            var cd = new Cd( result );
            cds.push( cd );

        }

        res.render("cds.ejs", {
            title : "CDs",
            cds : cds
        });

    })

});

app.post("/service/add/cd", function( req, res ){

    var serviceCd = new Services.Cd( req.body );
    if( serviceCd.checkErrors() ){
        SERVOR.errors = serviceCd.errors;
        res.redirect("/cds");
    }
    else {
        serviceCd.createCd( connection, res );
    }

});

app.listen(3000);