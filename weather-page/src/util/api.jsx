import format from 'date-fns/format';

async function fetchWeatherData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=e15e58dde11c4abf89a54416231712&q=${location}`
  );
  const data = await response.json();
  const weatherData = {};
  console.log(data);

  processForecastSummary(data, weatherData);
  return weatherData;
}

function processForecastSummary(data, weatherData) {
  const country = data.location.country;
  const name = data.location.name;
  const region = data.location.region;
  const condition = data.current.condition.text;
  const tempCelsius = data.current.temp_c;
  const tempFahrenheit = data.current.temp_f;

  const lastUpdated = data.current.last_updated;
  const lastUpdatedParts = lastUpdated.split(' ');

  const date = format(new Date(lastUpdatedParts[0]), 'eeee, MMMM d');
  const time = lastUpdatedParts[1];

  weatherData['forecastSummary'] = {
    country: country,
    name: name,
    region: region,
    condition: condition,
    tempCelsius: tempCelsius,
    tempFahrenheit: tempFahrenheit,
    date: date,
    time: time,
  };
}

export default fetchWeatherData;
