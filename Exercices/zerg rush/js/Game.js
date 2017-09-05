class Game {

    constructor(){

        this.spawnInterval = 0;
        this.moveInterval = 0;

        this.zergs = [];

    }

    addZerg( zerg ){
        this.zergs.push( zerg );
    }

    stop(){
        clearInterval( this.spawnInterval );
        clearInterval( this.moveInterval );
        alert("PERDU !");
    }

}