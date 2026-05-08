let map = L.map('map').setView([51.10321, 4.729262], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([51.10321, 4.729262]).addTo(map)
    .bindPopup('Itegem')
    .openPopup();

