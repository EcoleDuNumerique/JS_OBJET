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

    addNote( note ) {
        this.notes.push( note );
    }

    getNotesHtml(){

        var html = "";
        for(var note of this.notes){
            html += "<li>";
                html += "<span>" + note.subject + "</span>";
                html += "<span>" + note.value + "</span>";
            html += "</li>";
        }

        return html;

    }

}