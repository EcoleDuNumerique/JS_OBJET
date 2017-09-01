class Note {

    constructor( title, content) {
        this.title = title;
        this.content = content;
        this.$dom = null;
    }

    display(){

        var div = "<div class='post-it'>";
        div += "<h2>" + this.title +  "</h2>";
        div += "<p>" + this.content + "</p>";
        div += "</div>";

        this.$dom = $(div); //$("<div></div>")
        $("body").append( this.$dom );
    }

}