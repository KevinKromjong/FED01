//main.js where we initiate the 2 views
(function (){
   site.init = function(){
       new site.views.ClickA({el : "#clicker"});
       new site.views.BoxBlock({el : "#box"});
   };

    window.addEventListener("load", site.init);
}) ();

//Met () execute je de functie

//Backbone verwacht autmatisch een poperty als je een view maakt. Vandaar el: clicker, dus je geeft de clicker mee als property