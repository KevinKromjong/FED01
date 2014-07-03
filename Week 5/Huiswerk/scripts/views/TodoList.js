site.views.TodoList = Backbone.View.extend({



//    Object.defineProperty(this, "getList", {
//        get : function() {
//            return getListClassName;
//        }
//    })

    initialize : function(){
        getListClassName = document.getElementById("todoList").firstElementChild.id;
    },

    getList : function(){
        site.views.todoList.prototype.getList = function(){
            return getListClassName;
        }
    }
});