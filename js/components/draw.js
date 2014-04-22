var drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.POLYLINE,
    drawingControl: true,
    drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT,
        // drawingModes: [google.maps.drawing.OverlayType.POLYLINE, google.maps.drawing.OverlayType.MARKER, google.maps.drawing.OverlayType.POLYGON, google.maps.drawing.OverlayType.CIRCLE, google.maps.drawing.OverlayType.RECTANGLE]
        drawingModes: [google.maps.drawing.OverlayType.POLYLINE, google.maps.drawing.OverlayType.MARKER]
    },
    polylineOptions: {
        strokeWeight: 5,
        strokeOpacity: 0.5,
        strokeColor: '#ff0000',
        clickable: false,
        zIndex: 1,
        editable: false
    },
    polygonOptions: {
        editable: false
    },
    markerOptions: {
        editable: false
    }
});


function draw() {
    drawingManager.setMap(map);

    //After creating 'drawingManager' object in if block 
    google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
        var output = ("|" + event.type + "");
        switch (event.type) {
            case google.maps.drawing.OverlayType.MARKER:
                output = output + (event.overlay.getPosition() + "");
                constructMarker(output);
                break;
            case google.maps.drawing.OverlayType.RECTANGLE:
                output = output + (event.overlay.getBounds() + "");
                break;
            case google.maps.drawing.OverlayType.CIRCLE:
                output = output + (event.overlay.getCenter() + "")
                output = output + (event.overlay.getRadius() + "");
                break;
            default:
                path = event.overlay.getPath();
                for (var i = 0; i < path.length; i++) {
                    output = output + (path.getAt(i) + ';')
                };
                constructPolyline(output);
                break;
        };
        console.log(output);
        save.add(output);
    });
}