site.views.DriverAndCar = Backbone.View.extend({

    driverTemplate: '',                                                 //Deze variabele wordt later gebruikt om alle HTML uit de template te halen en moet daarom alvast aangemaakt worden
    errorTemplate: '',                                                  //Deze variabele wordt later gebruikt om alle HTML uit de template te halen en moet daarom alvast aangemaakt worden


    events: {
        "click a": 'chooseDriver'                                       //Als er op een linkje binnen het element geklikt wordt, ga dan naar de chooseDriver functie
    },

    /**
     *
     * @param properties
     */

    initialize: function (properties) {
        this.driverTemplate = properties.driverTemplate;                //Hier worden de extra parameters geladen en toegewezen die in de main.js worden meegegeven
        this.errorTemplate = properties.errorTemplate;                  //Hier worden de extra parameters geladen en toegewezen die in de main.js worden meegegeven

        this.loadListOfDriversAndCars();                                //Als de view wordt geladen, worden de coureurs en auto's ingeladen
    },

    /**
     *
     * @param e
     */

    chooseDriver: function (e) {

        var driverTarget = $(e.currentTarget).data('driver');           //Check waarop er geklikt wordt en neem daarvan de waarde uit het data-driver attribuut
        var number = $(e.currentTarget).data('number');                 //Neem van dezelfde link waar op geklikt is de waarde van het data-number attribuut

        site.events.trigger("driverChosen", {driver: driverTarget, number: number});        //Trigger het event, waarbij de waarde van het data-driver en data-number attribuut worden meegestuurd
    },

    loadListOfDriversAndCars: function () {
        this.collection.fetch({                                         //De data wordt uit de collection gehaald
            success: _.bind(this.successHandler, this),                 //Gaat dit goed, ga dan naar successHandler
            error: _.bind(this.errorHandler, this)                      //Zo niet, dan naar errorHandler
        });
    },

    /**
     *
     * @param collection
     * @param response
     * @param options
     */

    successHandler: function (collection, response, options) {

        for (var i = 0; i < response.length; i++) {                     //Voor elke coureur die terugegeven wordt..

            templateData = {
                driverName: response[i]['name'],                        //Vul de variabele voor de naam met die uit de JSOn file
                driverNumber: i,                                        //Vul de variabele voor het nummer met die uit de loop
                driverTeam: response[i]["team"]                         //Vul de variabele voor het team met die uit de JSON file
            };

            var template = _.template(this.driverTemplate.html(), templateData, this);  //Selecteer de template en stop de data erin
            this.$el.append(template);                                                  //Voeg vervolgens de template toe aan het element dat is opgegeven in de main.js
        }
    },

    /**
     *
     * @param collection
     * @param response
     * @param options
     */

    errorHandler : function(collection, response, options){
        templateData = {
            errorMessage : "Er is iets misgegaan met het ophalen van de gegevens"       //Vul de variabele voor de foutmelding
        };

        var template = _.template(this.errorTemplate.html(), templateData, this);       //Selecteer de template en stop de data erin
        this.$el.append(template);                                                      //Voeg vervolgens de template toe aan het element dat is opgegeven in de main.js
    }

});