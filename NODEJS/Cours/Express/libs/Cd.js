var Model = require("./Model");

class Cd extends Model {

    constructor( datas ){
        super( datas ); //Appelle le constructeur du parent
        //n.b : Toujours avant d'appeler this
    }
}

module.exports = Cd;