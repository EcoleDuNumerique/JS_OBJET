var app = new App();

app.$add.click(function(){

    app.$form.slideToggle(200);

});

app.$form.submit(function( event ){

    event.preventDefault(); //Empeche le rechargement

    var title = app.$title.val();
    var content = app.$content.val();

    var date = new Date();
    date = date.getDate() + "/" + ( date.getMonth() + 1 )  + "/" + date.getFullYear();

    var note = new Note( title, content, date );
    note.display();
    app.addNote( note );

    app.reinit();    

});

/* A utiliser en cas de création dynamique -> en effet le click est bindé sur tout le document
et vérifie si l'élément cible est de type ".close" */
$(document).on("click", ".close", function(){ 

    var index = $(".close").index( $(this) );
    app.removeNote( index );

});

window.onbeforeunload = function(){ //Lorsque l'utilisateur quitte la page
    app.saveNotes();
}