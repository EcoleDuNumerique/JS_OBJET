class Book {

    constructor( datas = [] ){

        this.hydrate( datas );

    }

    hydrate( datas ) {

        for( var key in datas ){
            //si name: 'Harry Potter'
            //this["name"] = 'Harry Potter' -> this.name = "Harry Potter"
            this[key] = datas[key];
        }

    }

}

module.exports = Book; //Syntaxe d'export relative à Nodejs