site.views.ClickA = Backbone.View.extend({

    clickToggle : false, //State variable

    events : {
        "click" : 'clickHandler'
    },

    init : function () {
        //Automaticly called after initialisation of object
    },

    clickHandler : function (e) {
        e.preventDefault();

        site.events.trigger("boxChange");
    }
});


