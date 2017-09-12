class Model {

    constructor( datas ){
        this.hydrate( datas );
    }

    hydrate( datas ) { 
        for( var key in datas ){
            this[key] = datas[key];
        }
    }
}

module.exports = Model;