/**
 * Created by Kevin on 12-05-14.
 */
$(document).ready(function(){

    $("#todo-submit").on("click", function(){
        getTodoItem();
        addToList();
    });

});

var todoArray = {
    array: []
}

function getTodoItem(){
    event.preventDefault();

    var todoItem = $("#todo-item").val();
    todoArray.array.push(todoItem);

    for(i = 0; i<todoArray.array.length; i++){
        //console.log(todoArray.array[i]);

    }


}

function addToList(){

    var listArray = todoArray.array;

    for(i = 0; i<listArray.length; i++){
        //console.log(testarray[i]);
        $(".todo-item").append("<li>" + listArray[i] + "</li>");
    }
}
