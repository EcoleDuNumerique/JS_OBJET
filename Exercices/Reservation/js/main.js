var app = new App();

app.$add_reservation.submit(function(event){

    event.preventDefault();

    var name = app.$add_name.val() ;
    var date_debut = app.$add_date_debut.datepicker( "getDate" );
    var date_fin = app.$add_date_fin.datepicker( "getDate" );

    var logement = new Logement( name, date_debut, date_fin );
    logement.display();
    app.addLogement( logement );

});

$(document).on("click", ".logement", function(){

    var index = $(".logement").index( $(this) );
    var logement = app.logements[index];

    var minDate = logement.date_debut;
    var maxDate = logement.date_fin;

    app.initReserverPickers( minDate, maxDate );
    app.$reserver.fadeIn(300);

});