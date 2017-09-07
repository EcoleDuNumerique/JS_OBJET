class App {
    
    constructor(){

        //DOM atributes
        //Formulaire de création
        this.$add_reservation = $("#add_reservation");
        this.$add_name = $("#add_name");
        this.$add_date_debut = $("#add_date_debut");
        this.$add_date_fin = $("#add_date_fin");

        //Formulaire d'affichage
        this.$reserver = $("#reserver");
        this.$reserver_date_debut = $("#reserver_date_debut");
        this.$reserver_date_fin = $("#reserver_date_fin");

        //Attributs standard
        this.logements = [];

        this.initPickers();
    }

    addLogement( logement ){
        this.logements.push( logement );
    }

    initPickers(){

        var options = {
            dayNames : ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            dayNamesMin : ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
            monthNames : ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"],
            monthNamesShort : ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"],
            firstDay : 1,
            dateFormat : "dd/mm/yy",
        };

        this.$add_date_debut.datepicker( options );
        this.$add_date_fin.datepicker( options );

    }

}