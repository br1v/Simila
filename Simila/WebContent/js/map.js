
$(document).ready(function(){
	google.maps.event.addDomListener(window, 'load', initialize);}
);
	function initialize() {
			
			/* Style of the map */
			var styles = [
			{
		      stylers: [
		        { hue: "#2F1906" },
		        { saturation: -40 }
		      ]
		    },{
		      featureType: "road",
		      elementType: "geometry",
		      stylers: [
		        { lightness: 100 },
		        { visibility: "simplified" }
		      ]
		    },{
		      featureType: "road",
		      elementType: "labels",
		      stylers: [
		        { visibility: "on" }
		      ]
		    },{
		         featureType: "poi",
		         elementType: "labels",
		         stylers: [
		           { visibility: "off" }
		         ]
		       }
		
		     ];
		     
		    
		  // Create a new StyledMapType object, passing it the array of styles,
		  // as well as the name to be displayed on the map type control.
		  var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
		  
		  /* Lat. and Lon. of the center of the map */
		  var myCenter = new google.maps.LatLng(41.927265, 12.419798);
		  
		  // Create a map object, and include the MapTypeId to add
		  // to the map type control.
		  var mapOptions = {
		    zoom: 16, 			//zoom level
		    center: myCenter, 		//center position
		    scrollwheel: false, 	//zoom when scroll disable
		    zoomControl: true, 		//show control zoom
		    
		    mapTypeControlOptions: {
		      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style'] 
		    }
		
		  };
		  
		  var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
		
		  //Associate the styled map with the MapTypeId and set it to display.
		  map.mapTypes.set('map_style', styledMap);
		  map.setMapTypeId('map_style');
		  
		  /* Marker Pane & Cioccolato */
		  var contentString = 
		      '<div class="popup">'+
		      '<h2 id="forno">Pane & Cioccolato</h2>'+
		      '<p>Panificio - Tavola Calda</b><br/>'+
		      '</p>'+
		      '<a target="_blank" href="https://www.google.it/maps/place/Via+Pietro+Maffi,+141,+00168+Roma/@41.9256415,12.4196623,19z/data=!3m1!4b1!4m2!3m1!1s0x132f5e39dd469f29:0xabb7e72213957564?hl=it">'+
		      'Guarda la mappa a schermo intero! &#187;</a> '+
		      '</div>';
		
		  var infowindow = new google.maps.InfoWindow({
		      content: contentString,
		      maxWidth: 230,
		      maxHeight: 300,
		
		  });
		  
		  var image1 = 'img/logo/pec_marker_icon.png'
		  var myLatlng = new google.maps.LatLng(41.925672, 12.419621);
		  var marker = new google.maps.Marker({
		      position: myLatlng,
		      map: map,
		      title: 'forno',
		      icon: image1
		  });
		 
		  google.maps.event.addListener(marker, 'click', function() {
		    infowindow.open(map,marker);
		  });

		  /* open popup marker when map is load */
		  new google.maps.event.trigger( marker, 'click' );
		  	
	}



	



