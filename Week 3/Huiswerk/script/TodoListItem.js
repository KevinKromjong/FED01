var todoListItem = function (liClassName) {
    todoList.call(this);

    this.liClassName = liClassName;

    Object.defineProperties(this, {
        "addListItem": {
            set: function (input) {
                this.input = input;
                createListItem = document.createElement("li");
                createListItem.className = this.liClassName;
                createListItem.innerHTML = this.input;

                createDeleteButton = document.createElement("input");
                createDeleteButton.type = "submit"
                createDeleteButton.className = "removeButton";
                createDeleteButton.value = "Verwijderen";


                var getParent = document.getElementById(this.getList());

                getParent.appendChild(createListItem).appendChild(createDeleteButton);

            }
        },
        deleteListItem : {
            set : function(){

            }
        }

    });
};

todoListItem.prototype = Object.create(todoList.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: todoListItem,
        writable: true
    }
});
