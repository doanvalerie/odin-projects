import format from 'date-fns/format';

async function fetchWeatherData(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=e15e58dde11c4abf89a54416231712&q=${location}&days=3`
  );
  const data = await response.json();
  console.log(data);

  return {
    ...processLocation(data),
    ...processCurrentData(data),
    ...processHourlyForecast(data),
  };
}

function processLocation(data) {
  const { country, name, region } = data.location;

  return {
    location: {
      country: country,
      name: name,
      region: region,
    },
  };
}

function processCurrentData(data) {
  const {
    condition,
    temp_c,
    temp_f,
    last_updated,
    humidity,
    wind_kph,
    precip_mm,
    pressure_mb,
    feelslike_c,
  } = data.current;

  const lastUpdatedParts = last_updated.split(' ');
  const date = format(new Date(lastUpdatedParts[0]), 'eeee, MMMM d');
  const time = lastUpdatedParts[1];

  const chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;

  return {
    current: {
      condition: condition.text,
      tempC: temp_c,
      tempF: temp_f,
      date: date,
      time: time,
      humidity: humidity,
      windKPH: wind_kph,
      chanceOfRain: chanceOfRain,
      precipMM: precip_mm,
      pressureMB: pressure_mb,
      feelsLikeC: feelslike_c,
    },
  };
}

function processHourlyForecast(data) {
  const todayData = data.forecast.forecastday[0].hour;
  const tmrData = data.forecast.forecastday[1].hour;
  const currHour = Number(
    data.current.last_updated.split(' ')[1].split(':')[0]
  );

  const hourlyForecast = [];

  for (let i = currHour; i < 24; i++) {
    const hourlyObj = createHourlyObj(todayData[i]);
    hourlyForecast.push(hourlyObj);
  }

  for (let i = 0; i < currHour; i++) {
    const hourlyObj = createHourlyObj(tmrData[i]);
    hourlyForecast.push(hourlyObj);
  }

  return {
    hourly: hourlyForecast,
  };
}

function createHourlyObj(data) {
  return {
    tempC: data.temp_c,
    tempF: data.temp_f,
    time: data.time.split(' ')[1],
    condition: data.condition.text,
  };
}

export default fetchWeatherData;
