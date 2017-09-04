var app = new App();

app.$form_eleve.submit(function( event ){

    event.preventDefault(); //Empeche le rechargement de la page

    var name = app.$eleve.val(); //recupere la valeur du champs
    var eleve = new Eleve( name );
    app.addEleve( eleve );
    eleve.display();
    

});