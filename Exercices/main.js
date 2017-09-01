$.prototype.custominput = function( options = [] ){
    //Etape 1
    var $selector = this;
    var Top = $selector.position().top;
    var left = $selector.position().left;
    var height = $selector.height();

    //Etape 2 - 3
    var $customselect = $("<div class='customselect'></div>"); //On créé l'élément parent
    $customselect.css({
        "position" : "absolute",
        "top" : Top + height + 5,
        "left" : left
    });

    $selector.after($customselect); //On ajoute l'élément parent apres notre input

    for( var option of options ){

        var $option = $("<div>" + option + "</div>");
        $customselect.append( $option ); //On créer des options dans l'élément parent

    }

    //Etape 4
    $customselect.hide();

    $selector.click(function(){
        $customselect.show();
    });

    var $options = $customselect.children("div");
    $options.click(function(){

        $selector.val( $(this).html() ); //On met dans la val de l'input le html de l'élément cliqué
        $customselect.hide(); //On referme

    });

    $customselect.mouseleave(function(){
        $customselect.hide();
    });

}

var options = ["item1", "item2", "item3", "item4"];
$("#selector").custominput( options );