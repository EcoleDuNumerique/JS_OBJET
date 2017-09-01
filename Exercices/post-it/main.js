var app = new App();

app.$add.click(function(){

    app.$form.slideToggle(200);

});

app.$form.submit(function( event ){

    event.preventDefault(); //Empeche le rechargement

    var title = app.$title.val();
    var content = app.$content.val();

    var note = new Note( title, content );
    note.display();
    app.addNote( note );

    app.reinit();    

});

window.onbeforeunload = function(){ //Lorsque l'utilisateur quitte la page
    app.saveNotes();
}