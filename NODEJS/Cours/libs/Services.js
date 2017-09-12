class Service {

    constructor( posts = [] ){

        this.posts = posts;
        this.errors = [];

    }

}
class ServiceCd extends Service {

    checkErrors(){

        if( !this.posts.name ) {
            this.errors["Name"] = "Le nom n'a pas été renseigné !";
        }

        if( !this.posts.autor ){
            this.errors["Autor"] = "L'auteur n'a pas été renseigné !";
        }

        if( !this.posts.time ){
            this.errors["Time"] = "Le temps n'a pas été renseigné !";
        }
        else if( parseInt( this.posts.time ) == NaN ){
            this.errors["Time"] = "Le temps n'est pas un nombre !";
        }

        // if( this.errors.length > 0 ){
        //     return true;
        // }
        // else { 
        //     return false;
        // }

        return (this.errors.length > 0);

    }

    createCd( connection, res ){
        
        connection.query(
            "INSERT INTO cds SET name=?, autor=?, time=?",
            [this.posts.name, this.posts.autor, this.posts.time],
            function(errors, results, fields){
                res.redirect("/cds");
            }
        )

    }
    
}

module.exports = {
    Cd : ServiceCd
};