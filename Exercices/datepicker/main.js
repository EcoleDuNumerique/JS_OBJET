var app = new App();

app.$date_fin.change(function(){

    var dateSelectedStart = app.$date_debut.datepicker( "getDate" );
    var dateSelectedEnd = app.$date_fin.datepicker( "getDate" );

    console.log( dateSelectedStart, dateSelectedEnd );

    dateSelectedStart.getTime() < dateSelectedEnd.getTime()
    

});