(function () {
    site.init = function () {

        new site.models.DriverAndCarModel();        //Hier wordt de model aangemaakt

        var driverAndCarCollection = new site.collections.DriverAndCarCollection();     //Hier wordt de collection voor de coureur en de auto aangemaakt
        var circuitCollection      = new site.collections.CircuitCollection();          //Hier wordt de collection voor het circuit aangemaakt
        var errorTemplate          = $("#error-template");                              //De error Template wordt meerdere keren gebruikt en is hier voor het gemak aangemaakt als variabele


        //Hier worden de views aangemaakt, elk met een element, een eventuele collection en eventuele templates
        new site.views.DriverAndCar({el : "#F1-drivers", driverTemplate : $("#drivers-template"), errorTemplate : errorTemplate, collection : driverAndCarCollection});
        new site.views.Circuit({el : "#F1-circuit", circuitTemplate : $("#circuit-template"), errorTemplate : errorTemplate, collection : circuitCollection});
        new site.views.Weather({el : "#F1-weather"});
        new site.views.Tyres({el : "#F1-tyres"});
        new site.views.Time({el : "#F1-time", timeTemplate : $("#time-template"), collection: driverAndCarCollection});

    };

    site.$document.on('ready', site.init);
})();