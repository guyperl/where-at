
// instantiate canvases
var mapCanvas = $('#map-canvas');
var drawCanvas = $('#draw-canvas');

// google maps shit
function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(41.880454799999995, -87.6251393),
        zoom: 15,
        disableDefaultUI: true,
        // panControl: false,
        // scaleControl: false,
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
};
google.maps.event.addDomListener(window, 'load', initialize);


// pjs draw layer shit
function mapSketch(processing) {
    processing.size($(window).width(), $(window).height());

    processing.setup = function() {
        // setup
    };

    processing.draw = function() {
        // draw loop
    };

    processing.mousePressed = function() {
        // mouse pressed
    };

    processing.mouseReleased = function() {
        // mouse released
    };

};

// attach the sketch function to the canvas
var processingInstance = new Processing(drawCanvas, mapSketch);