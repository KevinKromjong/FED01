(function () {
    //Hier worden alle objecten aangemaakt
    window.site = {};
    site.views = {};
    site.$document = $(document);
    site.models = {};
    site.collections = {};

    site.events = _.clone(Backbone.Events);
})()