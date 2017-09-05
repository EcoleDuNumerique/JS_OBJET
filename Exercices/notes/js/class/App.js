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

        //Recuperer les eleves dans le localStorage
        this.readEleves();
        this.displayEleves();
    }

    saveEleves(){
        var elevesJson = JSON.stringify( this.eleves );
        localStorage.setItem("eleves", elevesJson);
    }

    readEleves(){
        var elevesJson = localStorage.getItem("eleves");
        var eleves = JSON.parse( elevesJson );

        for(var eleveObject of eleves){

            var eleve = new Eleve( eleveObject.name );

            for( var noteObject of eleveObject.notes ){

                var subject = noteObject.subject;
                var value = noteObject.value;

                var note = new Note(subject, value);
                eleve.addNote( note );

            }

            this.addEleve( eleve );

        }
    }

    displayEleves(){
        for(var eleve of this.eleves){
            eleve.display();
        }
    }

    addEleve( eleve ) {
        this.eleves.push( eleve );
    }

    removeEleve( index ){
        var eleve = this.eleves[index]; //On récupere l'éleve pour appeler destroy
        eleve.$dom.fadeOut(300, function(){
            eleve.destroy(); //On retire eleve du DOM
        });
        this.eleves.splice( index, 1); //On retire eleve du tableau
    }

}