site.views.Tyres = Backbone.View.extend({

    tyreAdvantage: '',     //Het voordeel/nadeel dat de persoon krijgt door de goede/verkeerde keuze wordt later gebruikt en wordt hier dus alvast aangemaakt
    tyresClicked: '',      //De naam van de banden die door de persoon aangeklikt is wordt later gebruikt om door te geven en wordt hier dus alvast aangemaakt

    events: {
        "click a": "getChosenTyres"        //Als er op een link wordt geklikt binnen het aangegeven element, ga dan naar de functie getChosenTyres
    },

    initialize: function () {
    },

    /**
     *
     * @param e
     */

    getChosenTyres: function (e) {

        this.tyresClicked = $(e.currentTarget).data("tyre");                //Neem de waarde die in de link staat waar op geklikt is

        site.events.trigger('tyresChosen', {tyres: this.tyresClicked});     //Trigger het event tyresChosen en stuur daar de waarde van de link aan mee

    }
});