class App {

    constructor(){

        this.$form_eleve = $("#add-eleve"); //Formulaire
        this.$eleve = $("#eleve"); //Champs texte

        this.eleves = []; //Tableau d'objet Eleve
    }

    addEleve( eleve ) {
        this.eleves.push( eleve );
    }

}