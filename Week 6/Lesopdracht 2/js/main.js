(function () {
    site.init = function () {

        var router = new site.routers.Matches();
        var collection = new site.collections.Matches();

        new site.views.TeamLinks({el : "#team-links", router : router});
        new site.views.TeamMatches({el: "#team-matches", collection: collection});

        Backbone.history.start();
    };

    site.$document.on('ready', site.init);
})();