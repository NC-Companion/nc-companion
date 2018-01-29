import React from "react";
import Moment from "moment";
import "./Weather.css";
import Cloudy from "../weather-icons/cloudy.svg";
import Clear from "../weather-icons/day.svg";
import Rainy from "../weather-icons/rainy-6.svg";
import fetchWeather from "../helpers/fetchWeather";

class Weather extends React.Component {
  state = {
    weather: {}
  };

  componentDidMount() {
    fetchWeather()
      .then(weatherInfo => {
        this.setState({
          weather: {
            main: weatherInfo.weather[0].main,
            temp: weatherInfo.main.temp
          }
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <section className="is-gropued">
          <section className="control date">
            <span className="subtitle is-4">
              {Moment().format("dddd Do MMMM YYYY")}
            </span>
            <section className="weather control is-pulled-right">
              <span>
                {this.state.weather.main && (
                  <img src={this.showWeatherIcon(this.state.weather.main)} />
                )}
              </span>
              {/* <span className="subtitle is-4">{this.state.weather.main && this.state.weather.main}</span> */}
              <span className="subtitle is-4">
                {this.state.weather.temp && this.state.weather.temp}°C
              </span>
            </section>
          </section>
        </section>
      </div>
    );
  }

  showWeatherIcon = weather => {
    if (weather === "Rain") return Rainy;
    else if (weather === "Clouds") return Cloudy;
    else if (weather === "Clear") return Clear;
  };
}

export default Weather;
