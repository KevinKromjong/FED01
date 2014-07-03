(function (){
  site.init = function(){
      new site.views.todoList();
      new site.views.todoListItem("list");
  };

    window.addEventListener("load", site.init);
}) ();


