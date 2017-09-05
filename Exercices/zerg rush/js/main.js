var game = new Game();

game.spawnInterval = setInterval(function(){
    
    var zerg = new Zerg();
    zerg.display();

    game.addZerg( zerg );

}, 1000);

game.moveInterval = setInterval(function(){

    for(var index in game.zergs){

        var zerg = game.zergs[index];
        zerg.move();

        var limit = $(window).height();
        if( zerg.position.top > limit ){

            game.life --;
            game.removeZerg(index);

            if( game.life == 0 ){
                game.stop();
            }

        }
    }

}, 100);

$(document).on("click",".zerg", function(){

    var index = $(".zerg").index($(this));
    game.removeZerg(index);
    game.score ++;
    game.$score.html( "Score :" + game.score );

    if( game.score % 5 == 0 ){
        Zerg.levelup();
    }

})
