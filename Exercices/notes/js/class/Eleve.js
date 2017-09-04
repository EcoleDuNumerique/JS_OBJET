class Eleve {

    constructor( name ){

        this.name = name;

        this.notes = []; //tableau d'objet Note

        this.$dom = ""; //L'élément representatif du DOM

    }

    display(){

        var div = "<div class='eleve'>";
        div += "<h2>" + this.name + "</h2>";
        div += "</div>";

        this.$dom = $( div ); //Créer un objet jquery a partir de la chaine
        $("body").append( this.$dom ); //Ajoute l'élément dans le body

    }

}