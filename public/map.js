//Public Key Token --> Dieser wird gebraucht um die Daten der API zu laden 
mapboxgl.accessToken = 'pk.eyJ1IjoidG9iaWFzaGludHpzY2hlIiwiYSI6ImNrYTg2bjludDA5dmEyc21rN2t4MjNkbmkifQ.lfE3NVdUeBwC7p_36Wrhnw';

//Standart-Map wird erstellt 
var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-103.591, 40], 
            zoom: 3

 }); 