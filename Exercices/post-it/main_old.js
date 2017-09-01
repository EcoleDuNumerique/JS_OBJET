var App = {
    $form : $("form"),
    $title : $("#title"),
    $content : $("#content"),
    $add : $("#add"),
    reinit : function(){
        this.$form.slideUp(300);
        this.$title.val("");
        this.$content.val("");
    }
};

App.reinit();

App.$add.click(function(){

    App.$form.slideDown(200);

});

App.$form.submit(function( event ){

    event.preventDefault(); //Empeche le rechargement

    var title = App.$title.val();
    var content = App.$content.val();

    var note = new Note( title, content );
    note.display();

    App.reinit();    

});