class App {

    constructor(){

        this.$form = $("form");
        this.$title = $("#title");
        this.$content = $("#content");
        this.$add = $("#add");

        this.notes = [];

        //On declenche des l'instanciation
        this.readNotes();
        this.displayNotes();
        this.reinit();
    }

    reinit() {
        this.$form.slideUp(300);
        this.$title.val("");
        this.$content.val("");
    }

    addNote( note ){
        this.notes.push( note );
    }

    saveNotes(){
        /*Le localstorage ne peut enregistrer que des chaines de charactères !
        On utilise JSON.stringify pour transformer un tableau d'objet
        en chaine de charactères JSON*/
        var notesString = JSON.stringify( this.notes );
        localStorage.setItem("notes", notesString);
    }

    readNotes(){
        var notesString = localStorage.getItem("notes");

        //Verifie si le localStorage est vide
        if(notesString == null){
            return;
        }
        
        var arrayNotes = JSON.parse( notesString );
        for(var noteObject of arrayNotes){
            var title = noteObject.title;
            var content = noteObject.content;
            var date = noteObject.date;
            var note = new Note( title , content, date );
            this.addNote( note );
        }
    }

    displayNotes(){
        for( var note of this.notes ) {
            note.display();
        }
    }

    removeNote(index){
        var note = this.notes[index];
        note.destroy();
        this.notes.splice(index, 1); //supprime 1 élément à l'index indiqué
    }

}