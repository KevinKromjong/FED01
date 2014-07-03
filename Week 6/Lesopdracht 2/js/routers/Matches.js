site.routers.Matches = Backbone.Router.extend({

    routes : {
        "matches/:league/:club" : 'clubAction'
    },

    clubAction : function(league, club){
        site.events.trigger('newClub', {
            club : club,
            league: league
        });
    }
});