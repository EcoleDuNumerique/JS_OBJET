function closedDay( date ){

    var holidays = [
        new Date(2018, 0, 1),
        new Date(2018, 4, 1),
        new Date(2018, 11, 25)
    ];
    
     //Si le jour de la date est mercredi, samedi ou dimanche
    if( date.getDay() == 3 || date.getDay() == 6 || date.getDay() == 0 ){
        return [false, ""];
    }

    for(var holiday of holidays){
        if( holiday.toDateString() == date.toDateString() ){
            return [false, ""];
        }
    }

    return [true, ""]; //Sinon , c'est ok !
}

var options = {
    dayNames : ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    dayNamesMin : ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
    monthNames : ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"],
    monthNamesShort : ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"],
    firstDay : 1,
    minDate : new Date( 2017, 0, 1 ),
    maxDate : new Date( 2018, 11, 31 ),
    beforeShowDay : closedDay,
    dateFormat : "dd/mm/yy",
    numberOfMonths : 2
};

$("#date_debut").datepicker( options );
$("#date_debut").datepicker( "setDate", new Date() );

$("#date_fin").datepicker( options );

$("#date_fin").change(function(){

    var dateSelectedStart = $("#date_debut").datepicker( "getDate" );
    var dateSelectedEnd = $("#date_fin").datepicker( "getDate" );

    console.log( dateSelectedStart, dateSelectedEnd );

});