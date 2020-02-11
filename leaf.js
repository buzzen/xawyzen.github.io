var mymap = L.map('mapid').fitWorld();

L.tileLayer("https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={key}", {
        key: '30ed08b6749b4fa2a0bbfe8a111078f4',
        attribution: 'cc <a href="https://www.thunderforest.com/">Thunderforest',
        maxZoom: 18,
    }).addTo(mymap);

mymap.locate({setView: true, maxZoom: 16});
