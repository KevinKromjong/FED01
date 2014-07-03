site.views.Time = Backbone.View.extend({

    timeTemplate: '',                                          //Deze variabele wordt later gebruikt om alle HTML uit de template te halen en moet daarom alvast aangemaakt worden
    errorTemplate: '',                                          //Deze variabele wordt later gebruikt om alle HTML uit de template te halen en moet daarom alvast aangemaakt worden
    basetime: 60,                                               //De eindtijd van een rondje begint standaard altijd met 1 minuut. Zie het als een vaste waarde die niet verandert.
    number: '',                                                 //Het nummer van de coureur wordt later gebruikt en moet hier dus alvast worden aangemaakt
    driver: '',                                                 //De gekozen coureur wordt later gebruikt en moet hier dus alvast worden aangemaakt
    weather: '',                                                //Het gekozen weer wordt later gebruikt en moet hier dus alvast worden aangemaakt
    weatherText: '',                                            //De text van het gekozen weer (Nat of Droog) wordt later gebruikt en moet hier dus alvast worden aangemaakt
    tyres: '',                                                  //De gekozen banden worden later gebruikt en moeten hier dus alvast worden aangemaakt
    tyresAdvantage: '',                                         //Het voor/nadeel dat bij de gekozen banden hoort wordt later gebruikt en moet hier dus alvast worden aangemaakt

    /**
     *
     * @param properties
     */

    initialize: function (properties) {
        this.timeTemplate = properties.timeTemplate;            //Hier worden de extra parameters geladen en toegewezen die in de main.js worden meegegeven
        this.errorTemplate = properties.errorTemplate;          //Hier worden de extra parameters geladen en toegewezen die in de main.js worden meegegeven

        site.events.on("weatherChosen", this.weatherChosen, this);  //Het event dat getriggerd is voor het gekozen weer wordt hier opgevangen en gaat vervolgens naar de functie weatherChosen
        site.events.on("tyresChosen", this.tyresChosen, this);      //Het event dat getriggerd is voor de gekozen banden wordt hier opgevangen en gaat vervolgens naar de functie tyresChosen
        site.events.on("driverChosen", this.driverChosen, this);    //Het event dat getriggerd is voor de gekozen coureur wordt hier opgevangen en gaat vervolgens naar de functie driverChosen

    },

    /**
     *
     * @param data
     */

    driverChosen: function (data) {
        this.driver = data.driver;                              //Vul de driver variabele met de waarde die is gekozen door de gebruiker
        this.number = data.number;                              //Vul de nummer variabele in met het nummer dat bij de gekozen coureur hoort

        this.checkIfEmpty();                                    //Ga vervolgens naar de functie checkIfEmpty om te kijken of de coureur, het weer en de banden zijn gekozen

    },

    /**
     *
     * @param data
     */

    weatherChosen: function (data) {
        this.weather = data.weather;                            //Vul de weer variabele met de waarde die is gekozen door de gebruiker
        this.weatherText = data.weatherText;                    //Vul de naam van het weer variabele met de waarde die is gekozen door de gebruiker

        this.checkIfEmpty();                                    //Ga vervolgens naar de functie checkIfEmpty om te kijken of de coureur, het weer en de banden zijn gekozen
    },

    /**
     *
     * @param data
     */

    tyresChosen: function (data) {
        this.tyres = data.tyres;                                //Vul de banden variabele met de waarde die is gekozen door de gebruiker

        this.checkIfEmpty();                                    //Ga vervolgens naar de functie checkIfEmpty om te kijken of de coureur, het weer en de banden zijn gekozen
    },

    checkIfEmpty: function () {
        if (this.weather != '' && this.driver != '' && this.tyres != '') {      //Als de weer, driver en banden variabele niet leeg is (dus alles is gekozen)..
            this.collection.fetch({                                             //De data wordt uit de collection gehaald
                success: _.bind(this.successHandler, this),                     //Gaat dit goed, ga dan naar successHandler
                error: _.bind(this.errorHandler, this)                          //Zo niet, dan naar errorHandler
            });
        }
    },

    /**
     *
     * @param collection
     * @param response
     * @param options
     */

    successHandler: function (collection, response, options) {

        var addSeconds = this.basetime + response[this.number]['time'];         //de variabele addSeconds neemt de basistijd van 60 seconde en voegt de extra tijd van de gekozen coureur, die te vinden is in de JSON file, hieraan toe

        if (this.weather == 0.9 && (this.tyres == "Option" || this.tyres == "Prime")) {             //Als het weer 0.9(Droog) is en de gekozen banden Option of Prime is..
            this.tyresAdvantage = 0.8;                                                              //Dan wordt het voordeel voor de speler 0.8
        } else if (this.weather == 1.2 && (this.tyres == "Intermediate" || this.tyres == "Wet")) {  //Als het weer 1.2(Regen) is en de gekozen banden INtermediate of Wet is..
            this.tyresAdvantage = 0.8;                                                              //Dan wordt het voordeel voor de speler 0.8
        } else {                                                                                    //Als de combinatie anders is (geen goede combinatie)
            this.tyresAdvantage = 1.3;                                                              //Dan is het nadeel voor de speler 1.3
        }


        addSeconds *= this.weather;                                                                 //Vervolgens wordt de basis + extra tijd vermenigvuldigd met het voordeel/nadeel van het weer
        addSeconds *= this.tyresAdvantage;                                                          //En met het voordeel/nadeel van de banden

        var minutes = Math.floor(addSeconds / 60);                                                  //Deze code zorgt ervoor dat de minuten en seconde zo worden geconverteerd
        var seconds = Math.round(addSeconds - minutes * 60);                                        //dat als de uitkomst bijvoorbeeld 120 seconde is er 2:00 komt te staan. De Math.Round() maakt van bijvoorbeeld 1:2.77777777777  1:3
        seconds = ("0" + seconds).slice(-2);                                                        //Deze splice zorgt ervoor dat 1:3 1:03 wordt, aangezien Math.round() dit weghaald.

        templateData = {
            seconds: seconds,                                                                          //Geef de secondes mee als data voor de template
            minutes: minutes,                                                                          //Geef de minuten mee als data voor de template
            driver: this.driver,                                                                       //Geef de coureur mee als data voor de template
            tyres: this.tyres,                                                                         //Geef de banden mee als data voor de template
            weatherText: this.weatherText                                                              //Geef de tekst van het gekozen weer mee als data voor de template
        };

        var template = _.template(this.timeTemplate.html(), templateData, this);                        //Selecteer de template en stop de data erin
        this.$el.html(template);                                                                        //Voeg vervolgens de template toe aan het element dat is opgegeven in de main.js
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