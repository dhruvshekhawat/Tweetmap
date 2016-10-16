var map;

function initMap()
{

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: 15, lng: -10}
  });

  var script = document.createElement('script');
  script.src = 'https://developers.google.com/maps/documentation/javascript/tutorials/js/earthquake_GeoJSONP.js';
  document.getElementsByTagName('head')[0].appendChild(script);
}

window.eqfeed_callback = function(results)
{
    var locations = [];
    for(var i = 0; i < results.features.length; i++)
    {
      var coords = results.features[i].geometry.coordinates;
      var coordinates = {};
      coordinates.lat = coords[1];
      coordinates.lng = coords[0];
      locations.push(coordinates);
    }
    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
};