site.views.Weather = Backbone.View.extend({

    weatherAdvantage: '',                          //Het voordeel/nadeel dat de persoon krijgt door de goede/verkeerde keuze wordt later gebruikt en wordt hier dus alvast aangemaakt

    events: {
        "click a": 'getChosenWeather'              //Als er op een link wordt geklikt binnen het aangegeven element, ga dan naar de functie getChosenWeather
    },

    initialize: function () {

    },

    /**
     *
     * @param e
     */
    getChosenWeather: function (e) {

        var weatherClicked = $(e.currentTarget).data('weather');     //Neem de waarde die in de link staat waar op geklikt is

        if (weatherClicked == "droog") {                 //Als deze waarde "Droog" is..
            this.weatherAdvantage = 0.9;                //Dan is het voordeel 0.9
        }

        if (weatherClicked == "nat") {                  //Als deze waarde "Nat" is..
            this.weatherAdvantage = 1.2;                //Dan is het nadeel 1.2
        }

        site.events.trigger('weatherChosen', {weather: this.weatherAdvantage, weatherText: weatherClicked});    //Trigger vervolgens het event weatherChosen waarbij dit voordeel of nadeel wordt meegegeven
    }

});