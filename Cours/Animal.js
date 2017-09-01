class Animal {

    constructor( type ){
        this.type = type;
    }

    reproduire(){
        console.log( this.type + " se reproduit" );
    }

    manger( something ) {
        console.log( this.type + " prends " + something );
    }

}