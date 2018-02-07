 function initMap() {
        var laboratoria = {lat: -33.4188304, lng: -70.6423391};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: laboratoria
        });
        var marker = new google.maps.Marker({
          position: laboratoria,
          map: map
        });
      }

function buscar(){
  if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

     infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

/*
function initMap() {
        var laboratoria = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: laboratoria
        });

        var marcadorLaboratoria = new google.maps.Marker({
          position: laboratoria,
          map: map
        });
      }

function buscar(){
  if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
  
  function exito(){
  var funcionExito = funcion(posicion){
  var latitud, longitud;
  latitud = posicion.coords.latitude;
  longitud = posicion.coords.longitude;
}

  var miUbicacion = new google.maps.Marker({
  position: {lat:latitud, lng:longitud},
  map: map
});
}

var funcionError = function () {
    alert('tenemos un problema con encontrar tu ubicación');
}
}
}


 

document.getElementById("encuentrame").addEventListener('click',buscar);


*/