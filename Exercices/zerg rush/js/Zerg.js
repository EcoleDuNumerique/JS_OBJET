class Zerg {

    constructor(){

        this.color = new Color();
        this.color.random();

        this.position = {
            top : 0,
            left : Math.round( Math.random() * $(window).width() )
        };

        this.$dom = null;

    }

    display(){
        
        var div = "<div class='zerg'></div>";
        this.$dom = $( div );
        this.$dom.css({
            "background-color" : this.color.toString(),
            "left" : this.position.left
        });

        $("body").append( this.$dom );

    }

    move(){
        this.position.top += 10;
        this.$dom.css({
            "top" : this.position.top
        });
    }

}