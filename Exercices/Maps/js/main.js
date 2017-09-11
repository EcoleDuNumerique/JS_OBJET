var app = new App();
app.main = function(){

    app.centerOnGeolocation();

    var marker1_name = "Narbonne";
    var marker1_position = {
        lat : 43.1841699,
        lng : 3.0016323
    };

    var marker = app.addMarker( marker1_position, marker1_name);

    var narbonne_info = "<div>";
    narbonne_info += "<h2> Informations : </h2>";
    narbonne_info += "<h3> Meteo : 23*C </h3>";
    narbonne_info += "<h3> Population : 51 306 (2007) </h3>";
    narbonne_info += "</div>";

    app.addInfos( narbonne_info, marker );

    app.$form.submit(function( event ){

        event.preventDefault();

        var latlng = {
            lat: parseInt( app.$lat.val() ),
            lng: parseInt( app.$long.val() )
        };
        var title = app.$titre.val();
        var infos = app.$description.val();
        var type = app.$type.val();

        var marker = app.addMarker( latlng, title, type );
        app.addInfos( infos, marker );

        var args = [];
        app.$checkboxes.filter(":checked").each(function(){

            args.push( $(this).val() );

        });
        app.filter( args );

    });

    app.$checkboxes.click(function(){
        var args = [];
        app.$checkboxes.filter(":checked").each(function(){

            args.push( $(this).val() );

        });
        app.filter( args );
    });

    var positions = [];
    app.map.addListener("click", function( event ){

        var pos = event.latLng;
        positions.push( pos );
        
        if( positions.length == 3 ) {

            app.createPolygon( positions );
            positions = [];

        }

    });

}