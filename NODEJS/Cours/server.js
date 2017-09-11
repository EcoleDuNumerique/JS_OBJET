//Express est un module de node pour gérer un serveur http !
var express = require("express"); 
var app = express();

var mysql = require("mysql");

//Mon module Book
var Book = require("./libs/Book");

//On doit utiliser cette commande pour rendre le dossier "statique", non rerouté par le serveur
app.use(express.static('public'));

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

app.listen(3000);