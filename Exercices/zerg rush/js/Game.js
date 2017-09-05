class Game {

    constructor(){

        this.life = 10;
        this.score = 0;
        
        this.$score = $("#score");

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

    removeZerg(index){
        this.zergs[index].destroy()
        this.zergs.splice(index, 1);
    }

}