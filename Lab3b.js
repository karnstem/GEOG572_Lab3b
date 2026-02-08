//declare global map variables
var map;
var minValue;

//Load the data
function jsAjax(){
    //use Fetch to retrieve data
    fetch('us_states.json')
        .then(conversion) //convert data to usable form
        .then(callback) //send retrieved data to a callback function
};

function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}


//define conversion callback function
function conversion(response){
  //convert data to usable form
  return response.json();
}
function callback(response2){
    //tasks using the data go here
    console.log(response2);
    //added tasks
    
    //create map element
    map = L.map('map').setView([37.8, -96], 4);
    //add tile layer
    var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    //add geojson
    //add style
    L.geoJson(response2, {style: style}).addTo(map);
    }
    
window.onload = jsAjax();
