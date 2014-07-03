site.views.TeamLinks = Backbone.View.extend({

     events : {
        "click a" : 'clickHandler'
    },

    initialize: function (properties) {
        this.router = properties.router;
        //console.log(this.loadMatches());
    },

    clickHandler: function (e) {

        console.log("appelsap");
        e.preventDefault();
        var $target = $(e.currentTarget);
        var url = 'matches/' + $target.data('league') + '/' + $target.data('club');

        //Use trigger & replace to update URL and make the router listen
        this.router.navigate(url, {trigger : true, replace:true});
    }
});