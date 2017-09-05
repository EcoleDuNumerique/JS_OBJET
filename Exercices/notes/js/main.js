var app = new App();

app.$form_eleve.submit(function( event ){

    event.preventDefault(); //Empeche le rechargement de la page

    var name = app.$eleve.val(); //recupere la valeur du champs
    var eleve = new Eleve( name );
    app.addEleve( eleve );
    eleve.display();
    

});

$( document ).on("click", ".eleve", function(){ //Ouverture de la fenetre des notes

    app.$infos.fadeIn(300);
    var index = $(".eleve").index( $(this) );
    var eleve = app.eleves[ index ]; //Cherche l'eleve correspondant
    app.currentEleve = eleve; //On va pouvoir s'en resservir par la suite

    app.$h2.html( eleve.name );
    app.$ul.html( eleve.getNotesHtml() );

});

app.$form_note.submit(function( event ){

    event.preventDefault();

    var subject = app.$subject.val();
    var value = app.$note.val();

    var note = new Note( subject, value );  
    app.currentEleve.addNote( note );

    app.$ul.html( app.currentEleve.getNotesHtml() ); //Afficher les notes directement

});

app.$close.click(function(){
    app.$infos.fadeOut(300);
});

$(document).on("click", ".destroy", function( event ){

    event.stopPropagation(); //Empeche la propagation de l'évenement au parent
    var index = $(".destroy").index( $(this) );
    app.removeEleve( index );

});

window.onbeforeunload = function(){
    app.saveEleves();
}