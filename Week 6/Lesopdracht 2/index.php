<?php
////$basePath
//$basePath = "/Serious JS/Serious-Javascript/Week 6/Lesopdracht 2";
////$templateData //array met file get contents van html bestanden
//$templateData = array(
//    'matches' => file_get_contents('templates/matches.html'),
//    'error' => file_get_contents('templates/matches.html')
//);
//
//$settings = json_encode(array(
//   'basePath' => $basePath,
//   'template' => $templateData
//));
////$settings //array variabele met jsonencode
//////'basepath' => basepath
//
//
//?>
<!doctype HTML>
<html>
<head>

</head>
<body>

<div id="naampje">Nounee</div>

<!--index.php contents in <body>-->
<div id="container">
    <div id="team-links">
        <a href="#" data-club="Ajax" data-league="Eredivisie">Ajax</a>
        <a href="#" data-club="Getafe" data-league="PrimeraDivision">Getafe</a>
        <a href="#" data-club="Liverpool" data-league="PremierLeague">Liverpool</a>
    </div>

    <div id="team-matches">
        <span class="start-message">Choose a team on the left!</span>
    </div>

    <h1>Dit is een header</h1>

    <script src="js/jquery-2.1.0.js" type="text/javascript"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js"></script>
<!--    <script src="--><?php //print $basePath;?><!--"</script>-->
<!--    <script src="site.settings = --><?php //print $settings; ?><!--"></script>-->
    <script src="js/init.js"></script>
    <script src="js/models/Match.js"></script>
    <script src="js/collections/Matches.js"></script>
    <script src="js/views/TeamLinks.js"></script>
    <script src="js/views/TeamMatches.js"></script>
    <script src="js/routers/Matches.js"></script>
    <script src="js/main.js"></script>
</div>
</body>
</html>