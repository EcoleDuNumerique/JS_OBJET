class App {

    constructor(){

        //DOM Variables
        this.$map = $("#map");
        this.$infos = $("#infos");

        //Standard Variables
        this.map = null;

        //Function
        this.main = null; //On utilisera cet attribut en tant que fonction principale

    }

    initMap(){
        this.map = new google.maps.Map(this.$map[0], {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
        this.main(); //On appelle notre fonction principale une fois que Maps est chargé
    }

    centerOnGeolocation(){
        var that = this; //On sauvegarde le contexte "this" dans une variable
        navigator
            .geolocation
            .getCurrentPosition(function( position ){ //Ici le "this" appartient a la fonction (plus celui de App !!!)
                var pos = {
                    lat : position.coords.latitude,
                    lng : position.coords.longitude
                };

                that.map.setCenter( pos );
            });
    }

    addMarker( position, title ){
        var marker = new google.maps.Marker({
            position: position,
            map: this.map,
            title: title
        });
        return marker;
    }

    addInfos( content, marker ) {
        var infowindow = new google.maps.InfoWindow({
            content: content
        });

        var that = this;
        marker.addListener("click", function(){
            infowindow.open(that.map, marker);
        });
    }

}