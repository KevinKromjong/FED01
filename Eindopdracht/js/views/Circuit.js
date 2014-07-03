site.views.Circuit = Backbone.View.extend({

    circuitTemplate: '',                                   //Deze variabele wordt later gebruikt om alle HTML uit de template te halen en moet daarom alvast aangemaakt worden
    errorTemplate: '',                                     //Deze variabele wordt later gebruikt om alle HTML uit de template te halen en moet daarom alvast aangemaakt worden

    /**
     *
     * @param properties
     */

    initialize: function (properties) {
        this.circuitTemplate = properties.circuitTemplate;  //Hier worden de extra parameters geladen en toegewezen die in de main.js worden meegegeven
        this.errorTemplate = properties.errorTemplate;       //Hier worden de extra parameters geladen en toegewezen die in de main.js worden meegegeven

        this.loadListOfCircuits();                          //Als de view wordt geladen, wordt het circuit ingeladen
    },

    loadListOfCircuits: function () {
        this.collection.fetch({                             //De data wordt uit de collection gehaald
            success: _.bind(this.successHandler, this),    //Gaat dit goed, ga dan naar successHandler
            error: _.bind(this.errorHandler, this)         //Zo niet, dan naar errorHandler
        });
    },

    /**
     *
     * @param collection
     * @param response
     * @param options
     */

    successHandler: function (collection, response, options) {
        for (var i = 0; i < response.length; i++) {           //Voor elk circuit dat terugegeven wordt..

            templateData = {
                circuitName: response[i]['name'],               //Vul de variabele voor de naam met die uit de JSOn file
                circuitImage: response[i]["image"]              //Vul de variabele voor de afbeelding met die uit de JSON file
            };

            var template = _.template(this.circuitTemplate.html(), templateData, this);     //Selecteer de template en stop de data erin
            this.$el.append(template);                                                      //Voeg vervolgens de template toe aan het element dat is opgegeven in de main.js
        }
    },

    /**
     *
     * @param collection
     * @param response
     * @param options
     */

    errorHandler: function (collection, response, options) {
        templateData = {
            errorMessage: "Er is iets misgegaan met het ophalen van de gegevens"       //Vul de variabele voor de foutmelding
        };

        var template = _.template(this.errorTemplate.html(), templateData, this);       //Selecteer de template en stop de data erin
        this.$el.append(template);                                                      //Voeg vervolgens de template toe aan het element dat is opgegeven in de main.js
    }

});