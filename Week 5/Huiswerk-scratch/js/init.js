(function () {
    window.site = {};
    site.$document = $(document);

    site.views = {};
    site.models = {}; //Place to store our models
    site.events = _.clone(Backbone.Events); //For global events

})();