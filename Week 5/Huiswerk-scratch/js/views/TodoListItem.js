site.views.TodoListItem = Backbone.View.extend({

    initialize: function () {
        this.addListItem();
    },

    addListItem: function () {
        console.log(this.model.get("name"));

        var getNameFromModel = this.model.get("name");

        $("#submit-button").on("click", function () {
            var getInput = document.getElementById("inputField").value;

            var createListItem = document.createElement("li");
            createListItem.innerHTML = getInput;
           getNameFromModel.appendChild(createListItem);

        });

    }
});