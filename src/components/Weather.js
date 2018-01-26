import React from 'react';
import Moment from 'moment';
import './Weather.css';
import Cloudy from '../weather-icons/cloudy.svg';
import Clear from '../weather-icons/day.svg';
import Rainy from '../weather-icons/rainy-6.svg';

class Weather extends React.Component {
  state = {
    weather: {}
  };

  componentDidMount() {
    this.fetchWeather()
  }

  render() {
    return (
      <section className="notification is-info is-gropued">
        <section className='control date is-two-quarters'>
          <span className="subtitle is-4">{Moment().format('dddd do MMMM YYYY HH:MM')}</span>
        </section>
        <section className="weather control is-pulled-right is-two-quarters notification is-warning">
          <span className="subtitle is-4">{this.state.weather.main && this.state.weather.main}</span>
          {this.state.weather.main && <img src={this.showWeatherIcon(this.state.weather.main)} />}
          <span className="subtitle is-4">{this.state.weather.temp && this.state.weather.temp}°C</span>
        </section>
      </section>

    )
  }


  fetchWeather = () => {
    fetch('https://fcc-weather-api.glitch.me/api/current?lon=-2.24&lat=53.48')
      .then(buffer => buffer.json())
      .then((weatherInfo) => {
        console.log()
        this.setState({ weather: { main: weatherInfo.weather[0].main, temp: weatherInfo.main.temp } })
      })
      .catch(console.error)
  }

  showWeatherIcon = (weather) => {
    if (weather === 'Rain') return Rainy;
    else if (weather === 'Clouds') return Cloudy;
    else if (weather === 'Clear') return Clear;
  }
}

export default Weather;