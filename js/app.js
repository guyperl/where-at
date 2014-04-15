var poly;
var map;

function initialize() {
    var mapOptions = {
        zoom: 15,
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var polyOptions = {
        strokeColor: '#ff0000',
        strokeOpacity: 1.0,
        strokeWeight: 3
    };
    poly = new google.maps.Polyline(polyOptions);
    poly.setMap(map);

    // Add a listener for the click event
    // I ought to change this to allow dragging
    google.maps.event.addListener(map, 'click', addLatLng);

    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = new google.maps.LatLng(position.coords.latitude,
                position.coords.longitude);

            // var infowindow = new google.maps.InfoWindow({
            //     map: map,
            //     position: pos,
            //     content: 'Location found using HTML5.'
            // });

            map.setCenter(pos);
        }, function() {
            handleNoGeolocation(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
    }
}


// automatically center on current location
function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
        var content = 'Error: Couldn\'t find your location.';
    } else {
        var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
        map: map,
        position: new google.maps.LatLng(41.880454799999995, -87.6251393),
        content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
}


/**
 * Handles click events on a map, and adds a new point to the Polyline.
 * @param {google.maps.MouseEvent} event
 */

function addLatLng(event) {

    var path = poly.getPath();

    // Because path is an MVCArray, we can simply append a new coordinate
    // and it will automatically appear.
    path.push(event.latLng);

    // Add a new marker at the new plotted point on the polyline.
    // var marker = new google.maps.Marker({
    //   position: event.latLng,
    //   title: '#' + path.getLength(),
    //   map: map
    // });
}

google.maps.event.addDomListener(window, 'load', initialize);