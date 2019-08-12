var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2FybG9zbW9yaWxsb29vIiwiYSI6ImNqejhtZGk1bTA1Ym8zY282b2IyNDk5YWIifQ.O4V2TkmL3ld5dzQunL8I8w'
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);
marker.bindPopup("<b>marcador</b><br> que funciona.").openPopup();

//function NewMarker() {
    //document.getElementById("coordenadas").value.submit();
    //console.log(NewMarker)    
  //} 




    