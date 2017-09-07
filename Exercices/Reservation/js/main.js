var app = new App();

app.$add_reservation.submit(function(event){

    event.preventDefault();

    var name = app.$add_name.val() ;
    var date_debut = app.$add_date_debut.datepicker( "getDate" );
    var date_fin = app.$add_date_fin.datepicker( "getDate" );

    var logement = new Logement( name, date_debut, date_fin );
    logement.display();
    app.addLogement( logement );

})