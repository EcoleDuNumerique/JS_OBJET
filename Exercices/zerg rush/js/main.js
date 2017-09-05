var game = new Game();

game.spawnInterval = setInterval(function(){

    var zerg = new Zerg();
    zerg.display();

    game.addZerg( zerg );

}, 1000);

game.moveInterval = setInterval(function(){

    for(var zerg of game.zergs){
        zerg.move();

        var limit = $(window).height();
        if( zerg.position.top > limit ){
            game.stop();
        }
    }

}, 100);
