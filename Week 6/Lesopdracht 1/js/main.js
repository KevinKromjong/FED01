(function () {
    site.init = function () {
        //Create a Model and pass it to our views

        var matches = new site.collections.Matches();

        new site.views.ClickA({el: "#clicker"});
        new site.views.BoxBlock({el: "#box", collection : matches});
    };

    site.$document.on('ready', site.init);
})();