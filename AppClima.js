let longitud, latitud, temperatura, ubication, viento, url, key;
key = "dc4a65cf6ddf84a0d852a66fcecd714e";
const x = console.log.bind();

temperatura = document.getElementById("temperatura");
ubication = document.getElementById("ubi");
viento = document.getElementById("viento");

window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( async(ubi) => {
      latitud = ubi.coords.latitude;
      longitud = ubi.coords.longitude;
      x(longitud);
      x(latitud);    
      url = await `https://api.openweathermap.org/data/2.5/weather?q=Mexico&lang=es&units=metric&appid=${key}`;

      fetch(url)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
        
          x(data)
      
          if(!!Object.entries(data)){
            let temp= Math.round( data.main.temp)
            temperatura.textContent=`temp: ${temp} c°`;
          //Ejercicio por el PROFESOR ING OSMAR
         
           


            x(temp)
          }

         
        })
        .catch((error) => x(error));
    });
  }
});
