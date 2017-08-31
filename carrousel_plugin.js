$.prototype.carrousel = function( images = [] ){

    var $container = this;
    for(var image of images){   //Pour chaque image passée en paramètre
        var $div = $("<div></div>");  //On créé une nouvelle div avec jquery
        $div.css({ //On set les styles avec javascript
            "width" : "100%",
            "height" : "100%",
            "background-size" : "cover",
            "background-position" : "center",
            "background-image" : "url(" + image + ")"
        });
        $container.append( $div ); //On ajoute la div dans le container
    }

    var $items = $container.children("div");
    $items.hide();

    var $currentItem = $items.first();
    $currentItem.show();

    var mouse_flag = true;

    $container.click(function(){

        if( mouse_flag == false ){
            return;
        }
        mouse_flag = false;

        $currentItem.fadeOut(300, function(){

            $currentItem = $currentItem.next();
            if( $currentItem.length == 0 ) {
                $currentItem = $items.first();
            }

            $currentItem.fadeIn(300, function(){
                mouse_flag = true;
            })

        })

    })

    



}