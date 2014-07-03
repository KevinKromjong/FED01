site.views.TeamMatches = Backbone.View.extend({

//    templateMatches : _.template(site.settings.templates.matches),
//    templateError : _.template(site.settings.templates.error),

    events : {
        'click div#naampje' : 'appelsap'
    },

    appelsap : function(){
        console.log("yay");
    },

    initialize: function () {
        // site.onevent on newclub loadmatches
        site.events.on('newClub', this.loadMatches, this);
        $.get()


        console.log(this.clickHandler);

    },


    loadMatches: function (data) {
        this.collection.fetch({
            success: _.bind(this.loadMatchesSuccessHandler, this),
            error: _.bind(this.loadMatchesErrorHandler, this),
            data: {
                league: data.league,
                club: data.club
            }
        });
    },

//    function articlesHtmlLoaded(html){
//    var articlesHtml = _.template(html, {articles : publishedData});
//    $("#articles").append(articlesHtml);
//}

    loadMatchesSuccessHandler : function(collection, response, options) {

        //this.$el.html(this.templateMatches({matches : response}));
        console.log("Het werkt");

        console.dir(collection);
        console.dir(response);
        console.dir(options);

        for(i = 0; i < response.length; i++){
            console.log(response[i]["awayClub"]);
            $("#naampje").append("<a href='#'>" + response[i]["awayClub"] + "</a>").append("<br/>");
        }


//        var template = $("#usageList").html();
//        console.dir(template);
//        this.$el.html(_.template(template, {naam : "Kevin"}));
//        console.log(test);
//        $.get("templates/matches.html", this);
    },

    loadMatchesErrorHandler : function(collection, response, options){
//
//        var data = JSON.parse(response.responseText);
//        this.$el.html(this.templateError({message : data.error}));

        console.log("Het werkt niet");
    }
});
//
//function articlesHtmlLoaded(html){
//    var articlesHtml = _.template(html, {naam : "Kevin"});
//    $("#naampje").append(articlesHtml);
//}
//
//$.get("templates/matches.html", articlesHtmlLoaded);