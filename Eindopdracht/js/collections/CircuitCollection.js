site.collections.CircuitCollection = Backbone.Collection.extend({
    model: site.models.DriverAndCarModel,  //De collection van de circuits gebruikt de DriverAndCarModel
    url: "js/Circuits.json"                //De informatie voor de circuits komt uit een JSON bestandje
});