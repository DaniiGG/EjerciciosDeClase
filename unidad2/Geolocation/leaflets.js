function obtenerposicion(coordenadas){
    console.log(coordenadas.coords.latitude);
    let lat =coordenadas.coords.latitude;
    let lon =coordenadas.coords.longitude;
    var map = L.map('map').setView([lat, lon], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([lat, lon]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
    var circle = L.circle([lat, lon], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
}



if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(obtenerposicion);
    
}else{
    document.write("Geolocalizacion no permitida");
}