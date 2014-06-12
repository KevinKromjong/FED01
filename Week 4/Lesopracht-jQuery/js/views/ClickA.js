site.views.ClickA = function($el){
    this.$el = $el;

    //custom event initialization
    //this.event = new CustomEvent("boxChange");
    this.event = $.event.trigger("boxChange");

    $(document).ready(function(){
        //Normal click event on this.el
        this.el.on("click",function(){
            this.clickHandler.bind(this);
        });

        //From now on we have this.el to use our element for anything
        console.log(this.el);
    });

    this.clickHandler = function(e){
        //Prevent default behaviour & dispatch event for other to listen
        e.preventDefault();
        site.$document.trigger("boxChange");
    };

};
