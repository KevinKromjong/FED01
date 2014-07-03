(function (){
  site.init = function(){
      new site.views.TodoList({el: "#todoList"});
      new site.views.TodoListItem({el : "#list"});
  };

    site.$document.on('ready', site.init);

})();


