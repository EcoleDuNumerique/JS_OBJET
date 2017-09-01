//Nouvelle ecriture Ecmascript (javascript) 2015
class Chien extends Animal { //Attention a ne déclarer aucune variable avec le meme nom

    static gambader(){
        console.log("Les chiens gambadent");
    }

    constructor( type, name, taille = 180, couleur = "brun" ){  //correspond au __construct de php
        
        super(type); //Appelle le constructeur parent 
        this.name = name;
        this.taille = taille;
        this.couleur = couleur;

    }

    aboyer(){ //Methode
        console.log( this.name + " aboie" );
    }

    manger( something ) {
        super.manger( something ); //J'appelle la methode manger de la classe parente
        console.log( this.name + " mange " + something );
    }

}

Chien.mastatic = "Test statique"; //Statique attribut

Chien.prototype.jouer = function(){
    console.log( this.name + " joue" );
}

var chien = new Chien( "Canidé", "Medor", 170 );
console.log( chien.type );
chien.aboyer();
chien.manger("un os");
chien.jouer();
chien.reproduire();
Chien.gambader();
console.log( Chien.mastatic );

new Animal("Rat");