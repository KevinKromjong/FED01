site.views.todoListItem = function (liClassName) {
    site.views.todoList.call(this);

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

site.views.todoListItem.prototype = Object.create(site.views.todoList.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: this.todoListItem,
        writable: true
    }
});


document.getElementById("submit-button").onclick = function () {
    event.preventDefault();

    var getInput = document.getElementById("addItem").value;

    var item = new site.views.todoListItem("item");
    item.addListItem = getInput;

}