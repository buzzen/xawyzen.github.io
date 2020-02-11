var mymap = L.map('mapid').fitWorld();

L.tileLayer("https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={key}", {
        key: '30ed08b6749b4fa2a0bbfe8a111078f4',
        attribution: 'cc <a href="https://www.thunderforest.com/">Thunderforest',
        maxZoom: 18,
    }).addTo(mymap);

mymap.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mymap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(mymap);
}

mymap.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mymap.on('locationerror', onLocationError);