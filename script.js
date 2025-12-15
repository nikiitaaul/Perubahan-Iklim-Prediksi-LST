const map = L.map('map').setView([-2.437, 116.258], 5);

// Basemap
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap & CartoDB'
}).addTo(map);

// Contoh layer dari qgis2web (GeoJSON)
fetch('data/lst_2030.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          fillColor: getColor(feature.properties.LST),
          weight: 0.5,
          color: '#555',
          fillOpacity: 0.7
        };
      }
    }).addTo(map);
  });

// Fungsi warna
function getColor(d) {
  return d > 40 ? '#800026' :
         d > 35 ? '#BD0026' :
         d > 30 ? '#E31A1C' :
         d > 25 ? '#FD8D3C' :
                  '#FED976';
}
