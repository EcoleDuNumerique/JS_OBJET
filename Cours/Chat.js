//Ancienne méthode ( toujours d'actualité ! )
var Chat = function(name, couleur = "Roux", age = 8){ //constructeur

    this.name = name;        //attribut
    this.couleur = couleur;  //attribut
    this.age = age;          //attribut

};

Chat.prototype.miauler = function(){ //Methode
    console.log( this.name + " miaou" );
}

Chat.prototype.manger = function(something){ //Methode
    console.log( this.name + " mange " + something );
}

Chat.jardin = "Grand jardin"; //Attribut statique (static)
Chat.jouer = function(){ //Méthode statique (static)
     console.log("Tous les chats jouent"); 
}; 

//Tests
var felix = new Chat("Felix");
felix.miauler();
felix.manger("croquette");
var gribouille = new Chat("Gribouille", "Brun");
gribouille.miauler();

console.log(felix);
console.log(gribouille);
console.log(Chat.jardin);

Chat.jouer();