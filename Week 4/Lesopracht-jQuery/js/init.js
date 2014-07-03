//init.js
(function (){
    window.site = {};
    site.$document = $(document);

    site.views = {};
    site.event = _.clone(Backbone.Events); //For global events
}) ();


//Now you're able to create views within the site.views scope:
//Every view should be in it's own file, just like any other object.

//site.views.BoxBlock = function(){
//
//};
//
//site.views.ClickA = function(){
//
//};

