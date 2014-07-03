site.collections.DriverAndCarCollection = Backbone.Collection.extend({
   model : site.models.DriverAndCarModel,  //De collection van de coureurs en auto's gebruikt de DriverAndCarModel
   url : "js/DriversAndCars.json"          //De informatie voor de coureurs en auto komt uit een JSON bestandje
});