import React from 'react';
import {Card} from 'react-bootstrap';
import fetch from 'isomorphic-fetch';
import './App.css'; // Importar la hoja de estilos


class CityDropdown extends React.Component {
  state = {
    cities: [
      'New York',
      'London',
      'Tokyo',
      'Mexico City',
      'Bogota',
      'São Paulo',
      'Delhi',
      'Shanghai',
      'Los Angeles',
      'Buenos Aires'
    ],
    selectedCity: '',  // Establecer el estado inicial en una cadena vacía
    weather: null,
    showMessage: true
};

handleChange = (event) => {
  this.setState({ selectedCity: event.target.value });
}

handleSubmit = async (event) => {
  event.preventDefault();
  this.setState({ showMessage: false });

  // Obtener la clave de API desde una variable de entorno
  const API_KEY = '';

  // Crear la URL de la API con la ciudad seleccionada
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.selectedCity}&appid=${API_KEY}&lang=es`;

  try {
    // Hacer la solicitud a la API
    const response = await fetch(API_URL);
    const data = await response.json();

    // Mostrar la información del clima en una alerta
    // alert(`El clima en ${this.state.selectedCity} es: ${data.weather[0].main}`);
    this.setState({ weather: data});
    console.log(data);
  } catch (err) {
    // Mostrar un error en caso de que algo salga mal
    alert(`Error: ${err.message}`);
  }
}
  
render() {
  return (
    <div className="container">
      <div style={{display: this.state.showMessage ? 'block' : 'none'}}>
        <h1>Bienvenido a tu App del Clima V.1</h1>
        <p>Para comenzar, por favor selecciona una ciudad para conocer su temperatura y clima actual.</p>
      </div>       
      <div className='float-container'>                           
      <form onSubmit={this.handleSubmit}>
        <label>
          Select a city:
          <select value={this.state.selectedCity} onChange={this.handleChange}>
            {this.state.cities.map(city => (
              <option value={city} key={city}>{city}</option>
            ))}
          </select>
        </label>
        <input type="submit" value="Ver clima" />
      
        {this.state.weather && (
          <Card className="card">
            <Card.Header>El clima en {this.state.selectedCity}</Card.Header>
            <Card.Body>
              {/* <Card.Title>{this.state.weather}</Card.Title> */}
              <Card.Title>{(this.state.weather.main.temp - 273.15).toFixed(1)}°C</Card.Title>
              <Card.Text>
              {this.state.weather.weather[0].description}
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </form>}
      </div>
    </div>
  );
}

}

export default CityDropdown;
