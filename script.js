var map = L.map('map').setView([-0.7839 ,37.0400], 10);

//adding the open streetmap tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//adding of markers to my map
var marker = L.marker([-0.7611, 37.0293]).addTo(map);
marker.bindPopup("<b>MUGOIRI GIRLS SECONDARY SCHOOL<br>MURANGA</b>").openPopup();
var marker = L.marker([-0.745706944, 36.96855028]).addTo(map);
marker.bindPopup("<b>KIAGUTHU BOYS SECONDARY SCHOOl<br>MURANGA</b>").openPopup();
var marker = L.marker([-0.6021985, 36.9501801]).addTo(map);
marker.bindPopup("<b>KIRIAINI GIRLS SECONDARY SCHOOl<br>MURANGA</b>").openPopup();
var marker = L.marker([-0.7213, 37.1450]).addTo(map);
marker.bindPopup("<b>MURANGA HIGH SCHOOL<br>MURANGA</b>").openPopup();
var marker = L.marker([-0.77438, 36.99926]).addTo(map);
marker.bindPopup("<b>NJIIRI HIGH SCHOOL<br>MURANGA</b>").openPopup();


//adding google map layer
googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleStreets.addTo(map);

//Adding Satellite View
googleSat = L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleSat.addTo(map);

/*var popup = L.popup()
    .setLatLng([-0.745706944, 36.96855028])
    .setContent("KIAGUTHU BOYS SECONDARY SCHOOl")
    .openOn(map)*/