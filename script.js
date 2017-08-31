//Objet js
var chat = {
    name : "Felix",
    couleur : "Bleu",
    age : 2,
    miauler : function(){
        console.log("Miaou");
    },
    manger : function(something){
        console.log( this.name + " mange " + something );
    }
};

chat.miauler();

chat.name = "Gribouille";
chat.manger("croquette");

chat.poids = 5; //Rajout dynamique de propriété
chat.dormir = function(){ //Rajout dynamique de methode
    console.log( this.name + " dort");
}

chat.dormir();

// $this -> php
// $(this) -> jquery
// this -> js 


