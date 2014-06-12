var todoList = function(){
    var getListClassName = document.getElementById("todoList").firstElementChild.id;


//    Object.defineProperty(this, "getList", {
//        get : function() {
//            return getListClassName;
//        }
//    })

    todoList.prototype.getList = function(){
        return getListClassName;
    }
};