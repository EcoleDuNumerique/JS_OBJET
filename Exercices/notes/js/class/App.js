class App {

    constructor(){

        this.currentEleve = null; //Permet de stocker l'éléve en cours d'édition

        //Formulaire d'ajout d'élève
        this.$form_eleve = $("#add-eleve"); //Formulaire
        this.$eleve = $("#eleve"); //Champs texte

        //Fenêtre d'information
        this.$infos = $("#infos");
        this.$h2 = $("#infos h2");
        this.$ul = $("#infos ul");
        this.$close = $(".close");

        //Formulaire d'ajout de note
        this.$form_note = $("#add-note");
        this.$subject = $("#subject");
        this.$note = $("#note");

        this.eleves = []; //Tableau d'objet Eleve
    }

    addEleve( eleve ) {
        this.eleves.push( eleve );
    }

}