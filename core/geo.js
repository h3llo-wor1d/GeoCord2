const request = require("sync-request");
const config = require('../config.json');
const geoKey = config.geoKey;

function calcCrow(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2-lat1);
    var dLon = toRad(lon2-lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return Math.round(Math.round(d)*0.621371) // Convert distance in km to distance in miles;
}

// Converts numeric degrees to radians
function toRad(Value) 
{
    return Value * Math.PI / 180;
}

function fetchGeoLocation(query)
{
    return JSON.parse(request('GET', `https://api.myptv.com/geocoding/v1/locations/by-text?searchText=${encodeURIComponent(query)}&apiKey=${geoKey}`).getBody('utf8'));
}

module.exports = {
    fetchGeoLocation: fetchGeoLocation
}