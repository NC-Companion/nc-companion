const fetchWeather = () => {
  return fetch(
    "https://fcc-weather-api.glitch.me/api/current?lon=-2.24&lat=53.48"
  ).then(buffer => buffer.json());
};

export default fetchWeather;
