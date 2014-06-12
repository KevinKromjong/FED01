site.views.BoxBlock = function(el){
    this.el = el;

    this.init = function(){
        //Listen to event & bind custom function, just like normal events

        document.addEventListener("boxChange", this.changeColor.bind(this));

        //From now on we have this.el to use our element for anything
        console.log(this.el);
    };


    this.changeColor = function(){
        this.el.classList.add("blue");
    };


    this.init();

};
