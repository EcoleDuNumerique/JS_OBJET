class Color {

    constructor(){

        this.red    = 0;
        this.green  = 0;
        this.blue   = 0;
        this.alpha  = 1;
        
    }

    random(){

        this.red    = Math.round( Math.random() * 256 );
        this.green  = Math.round( Math.random() * 256 );
        this.blue   = Math.round( Math.random() * 256 );

    }

    toString(){
        return "rgba(" + this.red + ", " + this.green + ", " + this.blue + ", " + this.alpha + ")";
    }

}