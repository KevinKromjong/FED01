(function () {
    site.init = function () {
        //Create a Model and pass it to our views
        //var settings = new site.models.Settings();
        //var matches = new site.models.Matches();

        var listName = new site.models.ListName();

        new site.views.TodoList({model : listName});
        new site.views.TodoListItem({model : listName});
    };

    site.$document.on('ready', site.init);
})();