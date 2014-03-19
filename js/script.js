function initialize(pos) 
{

/*---- Positions ----*/

  var pos0 = new google.maps.LatLng(21.0333333, 105.8500000);
  var pos1 = new google.maps.LatLng(21.0444124, 105.8437443);
  var pos2 = new google.maps.LatLng(21.0016397, 105.8802223);
  var pos3 = new google.maps.LatLng(21.0263625, 105.8183491);
  var pos4 = new google.maps.LatLng(21.0328980, 105.8337370);
  var pos5 = new google.maps.LatLng(21.0201784, 105.8473277);

/*---- Map position ----*/

  var mappos = pos0;

  if(pos == "pos1")
  {
    var mappos = pos1;
  }
  else if(pos == "pos2")
  {
    var mappos = pos2;
  }
  else if(pos == "pos3")
  {
    var mappos = pos3;
  }
  else if(pos == "pos4")
  {
    var mappos = pos4;
  }
  else if(pos == "pos5")
  {
    var mappos = pos5;
  }
  else
  {
    var mappos = pos0;
  }

/*---- Map type ----*/

  var roadmap = google.maps.MapTypeId.ROADMAP;
  var satellite = google.maps.MapTypeId.SATELLITE;
  var hybrid = google.maps.MapTypeId.HYBRID;
  var terrain = google.maps.MapTypeId.TERRAIN;

/*---- Map zoom ----*/

  if(pos == "pos0")
  {
    var zoom = 13; 
  }
  else
  {
    var zoom = 17;
  }

/*---- Map ----*/

  var mapOptions = {
    zoom: zoom,
    center: mappos,
    mapTypeId: hybrid
  };

  var theMap = new google.maps.Map(document.getElementById('divMap'),mapOptions);

/*---- Panel reset ----*/

  document.getElementById("divTitlePanel").innerHTML = "";
  document.getElementById("divPanel").innerHTML = "";

/*---- Icon ----*/

  var explosion = "../images/explosion_icon_64px_pointer.png";
  var crosshair = "../images/crosshair_icon_64px_pointer.png";
  var gun = "../images/gun_icon_64px_pointer.png";
  var knife = "../images/knife_icon_64px_pointer.png";
  var home = "../images/home_icon_64px_pointer.png";

/*---- Animation ----*/

  var drop = google.maps.Animation.DROP;
  var bounce = google.maps.Animation.BOUNCE;

/*---- Marqueur ----*/

  var markerOption1 = {
    position: pos1,
    map: theMap,
    icon: gun,
    animation: drop,
    title: "Le bureau"
  };

  var mapMarker1 = new google.maps.Marker(markerOption1);

  var markerOption2 = {
    position: pos2,
    map: theMap,
    icon: explosion,
    animation: drop,
    title: "L'entrepôt de transport de la drogue"
  };

  var mapMarker2 = new google.maps.Marker(markerOption2);

  var markerOption3 = {
    position: pos3,
    map: theMap,
    icon: explosion,
    animation: drop,
    title: "L'entrepôt de fabrication de la drogue"
  };

  var mapMarker3 = new google.maps.Marker(markerOption3);

  var markerOption4 = {
    position: pos4,
    map: theMap,
    icon: crosshair,
    animation: drop,
    title: "La villa des Nguyen"
  };

  var mapMarker4 = new google.maps.Marker(markerOption4);

  var markerOption5 = {
    position: pos5,
    map: theMap,
    icon: home,
    animation: drop,
    title: "La planque"
  };

  var mapMarker5 = new google.maps.Marker(markerOption5);

  /*google.maps.event.addListener(mapMarker, 'click', toggleBounce);

  function toggleBounce() 
  {
    if (mapMarker.getAnimation() != null) {
      mapMarker.setAnimation(null);
    } else {
      mapMarker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }*/

/*---- Infowidow content----*/

  var info1 = '<div class="infobulle"><h6>Le bureau</h6>'+'<hr />'+'<p>Marc est le chargé de communication.<br />Il organise les rendez-vous et les transactions.<br />Vous devez éliminer Marc.</p>'+'<hr />'+'<img src="../images/wipula_m.jpg" /> <img src="../images/tour.jpg" />'+'<hr />'+'<a class="lien" onclick="itineraire(\'pos1\');">Calculer un itinéraire</a></div>';
  var info2 = '<div class="infobulle"><h6>L\'entrepôt de transport de la drogue</h6>'+'<hr />'+'<p>C\'est ici que se fait le lien avec l\'extérieur.<br />l\'entrepôt est géré par Mike un des lieutenant de Germain.<br />Vous devez éliminer Mike et faire exploser tout le chargement.</p>'+'<hr />'+'<img src="../images/ticqua_m.jpg" /> <img src="../images/entrepot.jpg" />'+'<hr />'+'<a class="lien" onclick="itineraire(\'pos2\')">Calculer un itinéraire</a></div>';
  var info3 = '<div class="infobulle"><h6>L\'entrepôt de fabrication de la drogue</h6>'+'<hr />'+'<p>C\'est ici qu\'est fabriqué la drogue.<br />l\'entrepôt est géré par Boubou un des lieutenant de Germain.<br />Vous devez éliminer Boubou et faire exploser tout le chargement.</p>'+'<hr />'+'<img src="../images/camara_c.jpg" /> <img src="../images/entrepot2.jpg" />'+'<hr />'+'<a class="lien" onclick="itineraire(\'pos3\')">Calculer un itinéraire</a></div>';
  var info4 = '<div class="infobulle"><h6>La villa des Nguyen</h6>'+'<hr />'+'<p>Pour finir vous aller devoir tuer le chef de cette organisation criminel.<br />La zone est ultra-sécurisé.<br />L\'utilisation du sniper pour éliminer Germain est fortement recommandé.</p>'+'<hr />'+'<img src="../images/nguye-_g.jpg" /> <img src="../images/villa.jpg" />'+'<hr />'+'<a class="lien" onclick="itineraire(\'pos4\')">Calculer un itinéraire</a></div>';
  var info5 = '<div class="infobulle"><h6>La planque</h6>'+'<hr /><p>Votre planque, qui est aussi le point d\'extraction.</p>'+'<hr />'+'<img src="../images/planque.jpg" /></div>';

/*---- Infowindow ----*/

  var infowindow1 = new google.maps.InfoWindow({
    content: info1
  });

  function infobulle1()
  {
    infowindow1.open(theMap,mapMarker1);
  }

  var infowindow2 = new google.maps.InfoWindow({
    content: info2
  });

  function infobulle2()
  {
    infowindow2.open(theMap,mapMarker2);
  }

  var infowindow3 = new google.maps.InfoWindow({
    content: info3
  });

  function infobulle3()
  {
    infowindow3.open(theMap,mapMarker3);
  }

  var infowindow4 = new google.maps.InfoWindow({
    content: info4
  });

  function infobulle4()
  {
    infowindow4.open(theMap,mapMarker4);
  }

  var infowindow5 = new google.maps.InfoWindow({
    content: info5
  });

  function infobulle5()
  {
    infowindow5.open(theMap,mapMarker5);
  }

/*---- event ----*/

  google.maps.event.addListener(mapMarker1, 'click', infobulle1);
  google.maps.event.addListener(mapMarker2, 'click', infobulle2);
  google.maps.event.addListener(mapMarker3, 'click', infobulle3);
  google.maps.event.addListener(mapMarker4, 'click', infobulle4);
  google.maps.event.addListener(mapMarker5, 'click', infobulle5);

}

/*---- Itineraire ----*/

function itineraire(direction) 
{

  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();

  var pos0 = new google.maps.LatLng(21.0333333, 105.8500000);
  var pos1 = new google.maps.LatLng(21.0444124, 105.8437443);
  var pos2 = new google.maps.LatLng(21.0016397, 105.8802223);
  var pos3 = new google.maps.LatLng(21.0263625, 105.8183491);
  var pos4 = new google.maps.LatLng(21.0328980, 105.8337370);
  var pos5 = new google.maps.LatLng(21.0201784, 105.8473277);

  if(direction == "pos1")
  {
    direction = pos1;
    var titlePanel = "L\'itinéraire du bureau";
  }
  else if(direction == "pos2")
  {
    direction = pos2;
    var titlePanel = "L\'itinéraire de l'entrepôt de transport de la drogue";
  }
  else if(direction == "pos3")
  {
    direction = pos3;
    var titlePanel = "L\'itinéraire de l'entrepôt de fabrication de la drogue";
  }
  else if(direction == "pos4")
  {
    direction = pos4;
    var titlePanel = "L\'itinéraire de la villa des Nguyen";
  }



  var optionsCarte = {
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    center: pos0
  };
      
  maCarte = new google.maps.Map(document.getElementById("divMap"), optionsCarte);
  directionsDisplay.setMap(maCarte);

  document.getElementById("divTitlePanel").innerHTML = '<h1>'+titlePanel+'</h1>';
  directionsDisplay.setPanel(document.getElementById("divPanel"));
  
  var requeteItineraire = {
    origin: pos5,
    destination: direction,
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  };

  directionsService.route(requeteItineraire, function(response, status) {
  if (status == google.maps.DirectionsStatus.OK) 
  {
    directionsDisplay.setDirections(response);
  }
  });

}