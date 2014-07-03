site.views.TodoList = Backbone.View.extend({

    tagName : "ul",
    id : "list",

    initialize: function () {
        this.appendToBody();
        this.sendToModel();
        console.log(this.model.get('name'));
    },

    appendToBody : function(){
        document.getElementById("listholder").appendChild(this.el);
        console.log(this.el);
    },

    sendToModel : function(){
        this.model.set({name : this.el});
    }
});
