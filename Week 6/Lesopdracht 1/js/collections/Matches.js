//Collection of maths pointing to an empty Model
site.collections.Matches = Backbone.Collection.extend({
   model : site.models.Match,
   url: "http://docent.cmi.hro.nl/moora/imp03/api/wedstrijden"
});