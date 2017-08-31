//Je vais rajouter une fonctionnalité a jquery
$.prototype.green = function(){
    this.css("color", "green");
}
$.prototype.clickGreen = function(){
    this.click(function(){
        $(this).green();
    })  
}

$(".test").clickGreen();
$("h1").clickGreen();

//Carrousel procedural
var $carrousel = $("#carrousel");
var $items = $carrousel.children(".item");

$items.hide();
var $currentItem = $items.first();
$currentItem.show();

var mouse_flag = true; //On empeche de cliquer tant que l'animation n'est pas terminée

$carrousel.click(function(){

    if(mouse_flag == false){ //Si une animation est en cours, on arrete tout
        return;
    }

    mouse_flag = false; //On signale qu'il n'est plus possible de cliquer !
    $currentItem.fadeOut(300, function(){

        $currentItem = $currentItem.next(); 
        if( $currentItem.length == 0 ){
            $currentItem = $items.first();
        }

        $currentItem.fadeIn(300, function(){
            mouse_flag = true; //On signale qu'on peut cliquer à nouveau !
        });

    });

});

//

var images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpeg",
    "images/4.jpg"
];
$("#carrousel_2").carrousel( images );
$("#carrousel_3").carrousel( images );
