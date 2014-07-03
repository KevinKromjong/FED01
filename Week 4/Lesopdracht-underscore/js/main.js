var data = [
    {
        title : "Article 1",
        order : 3,
        status : 1,
        awesome: true
    },
    {
        title : "Article2",
        order : 1,
        status : 3,
        awesome:true
    },
    {
        title : "Article 3",
        order : 2,
        status :1,
        awesome : true
    }
]

//Alter data with _.each method, using _.random to create different numbers for our images

_.each(data, function(item, index, list){
    item.imageUrl = "http://lorempixel.com/" + _.random(200, 600) + "/" + _.random(200, 600) + "/";
});

var publishedData = _.filter(data, function(item, index, list){
    return item.awesome == true;
});

console.log(publishedData);

//Using _.templates to generate HTML without any HTML in JS
//HTML needs to be loaded first from external templates file

function articlesHtmlLoaded(html){
    var articlesHtml = _.template(html, {articles : publishedData});
    $("#articles").append(articlesHtml);
}

$.get("templates/articles.html", articlesHtmlLoaded);
