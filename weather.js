// Seleccionamos los elementos del formulario
const citySelect = document.querySelector('#city-select');
const submitBtn = document.querySelector('#submit-btn');
var apiKey = '0326f54842bef742974952568b236ccf';

// Cuando se haga clic en el botón, obtener el valor de la ciudad seleccionada
submitBtn.addEventListener('click', () => {
  const selectedCity = citySelect.value;

  // Hacer una solicitud a la API del clima usando la ciudad seleccionada
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+ selectedCity +'&appid=' + apiKey)
  
    // Convertir la respuesta en formato JSON
    .then(response => response.json())
    // Mostrar el clima en una alerta
    .then(data => {
      const weatherData = data.weather[0];
      const weather = `The weather in ${selectedCity} is currently ${weatherData.main}.`;
      alert(weather);
    })
    // En caso de error, mostrar el error en una alerta
    .catch(error => {
      alert(error);
    });
});
