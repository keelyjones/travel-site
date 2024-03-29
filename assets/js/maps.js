// Initialize Map API

var map, infoWindow;
  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
//      mapTypeId: 'roadmap',
        zoom: 2.5,
        center: {lat: 40.518385783899, lng: -40.518385783899},
    });
  
     infoWindow = new google.maps.InfoWindow;

// For Geolocation -- Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }
     
// Set user geolocation/send error message.      
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
       