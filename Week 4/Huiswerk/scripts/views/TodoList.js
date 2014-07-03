site.views.todoList = function(){
    var getListClassName = document.getElementById("todoList").firstElementChild.id;


//    Object.defineProperty(this, "getList", {
//        get : function() {
//            return getListClassName;
//        }
//    })

    site.views.todoList.prototype.getList = function(){
        return getListClassName;
    }
};




