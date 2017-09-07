class Logement {

    constructor( name, date_debut, date_fin ) {

        this.name = name;
        this.date_debut = date_debut;
        this.date_fin = date_fin;

        //DOM
        this.$dom;
        
    }

    display(){
        var div = "<div class='logement'>";
        div += "<h4>" + this.name + "</h4>";
        div += "</div>";

        this.$dom = $(div);
        $("body").append(this.$dom);
    }

}