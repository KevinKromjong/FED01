(function () {
    window.site = {};
    site.$document = $(document);
    site.views = {};
    site.collections = {};
    site.models = {};
//    site.settings = {};
//    site.settings.templates = {};
    site.routers = {};
    site.events = _.clone(Backbone.Events);
})();