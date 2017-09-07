class App {

    constructor(){

        //DOM Elements
        this.$date_debut = $("#date_debut");
        this.$date_fin = $("#date_fin");

        //Standard attribute
        this.holidays = [
            new Date(2018, 0, 1),
            new Date(2018, 4, 1),
            new Date(2018, 11, 25)
        ];

        initPickers();

    }

    initPickers(){

        var options = {
            dayNames : ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            dayNamesMin : ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
            monthNames : ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"],
            monthNamesShort : ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"],
            firstDay : 1,
            minDate : new Date( 2017, 0, 1 ),
            maxDate : new Date( 2018, 11, 31 ),
            beforeShowDay : this.closedDay,
            dateFormat : "dd/mm/yy",
            numberOfMonths : 2
        };

        this.$date_debut.datepicker( options );
        this.$date_fin.datepicker( options );

    }

    closedDay( date ){

        //Si le jour de la date est mercredi, samedi ou dimanche
        if( date.getDay() == 3 || date.getDay() == 6 || date.getDay() == 0 ){
            return [false, ""];
        }

        for(var holiday of this.holidays){
            if( holiday.toDateString() == date.toDateString() ){
                return [false, ""];
            }
        }

        return [true, ""]; //Sinon , c'est ok !
    }



}