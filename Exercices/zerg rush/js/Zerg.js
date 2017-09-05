class Zerg {

    constructor(){

        this.color = new Color();
        this.color.random();
        this.life = 3;

        this.position = {
            top : 0,
            left : Math.round( Math.random() * ( $(window).width() - 20 ))
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
        this.position.top += Zerg.speed;
        this.$dom.css({
            "top" : this.position.top
        });
    }
    
    destroy(){
        this.$dom.remove();
    }

    static levelup(){
        Zerg.speed += 5;
    }
}

Zerg.speed = 10;