site.views.BoxBlock = Backbone.View.extend({

    initialize: function () {
        site.events.on("boxChange", this.changeColor, this);
    },

    changeColor: function () {
        //Properties are passed automatically, use property for magic
        this.$el.addClass("blue");
        this.loadMatches();
    },

    //Wrapper function to load the matches through the collection
    loadMatches: function () {
        this.collection.fetch({
            success: _.bind(this.loadMatchesSuccessHandler, this),
            error: _.bind(this.loadMatchesErrorHandler, this),
            data: {
                league: "PrimeraDivision",
                club: "Getafe"

            }

        });
    },

    loadMatchesSuccessHandler: function (model, response, options) {
        console.log("Success");
        console.dir(model);
        console.dir(response);
        console.dir(options);

        //Example of using models to filter data in new variable
        var homeMatches = collection.filter(function(match){
            return match.get('homeClub') == "Getafe";
        });

        console.dir(homeMatches);
    },

    loadMatchesErrorHandler: function (model, response, options) {
        console.log("Error");
        console.dir(model);
        console.dir(response);
        console.dir(options);
    }

});
