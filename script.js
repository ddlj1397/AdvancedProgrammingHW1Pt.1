var map = L.map('map').setView([38.627003, -90.199402], 10);
//https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
//'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
//https://wiki.openstreetmap.org/wiki/Tile_servers
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([38.624691,  -90.184776]).addTo(map);
var marker2 = L.marker([38.638901, -90.284599]).addTo(map);
var marker3 = L.marker([38.5472759, -90.5440121]).addTo(map);
var marker4 = L.marker([38.7183861, -90.755684]).addTo(map);
var marker5 = L.marker([38.639598, -90.254963]).addTo(map);

marker.bindPopup("<b>National Park <b><br>Gateway Arch").openPopup();
marker2.bindPopup("<b>City Park <b><br>Forest Park").openPopup();
marker3.bindPopup("<b>State Park <b><br>Castelwood").openPopup();
marker4.bindPopup("<b>Conservation Area <b><br>August A. Busch").openPopup();
marker5.bindPopup("<b>Entertainment District <b><br>Central West End").openPopup();
