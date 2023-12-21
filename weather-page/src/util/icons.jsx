/* eslint-disable react/jsx-key */ // fix
import {
  WiDaySunny,
  WiNightClear,
  WiCloudy,
  WiSleet,
  WiFog,
  WiRain,
  WiRainMix,
  WiSnow,
  WiSnowWind,
  WiThunderstorm,
  WiNightSnowThunderstorm,
} from 'weather-icons-react';

const size = 75;

const icons = new Map([
  // clear
  ['Sunny', <WiDaySunny size={size} />],
  ['Clear', <WiNightClear size={size} />],

  // cloudy
  ['Cloudy', <WiCloudy size={size} />],
  ['Partly cloudy', <WiCloudy size={size} />],
  ['Overcast', <WiCloudy size={size} />],

  // fog
  ['Freezing fog', <WiFog size={size} />],
  ['Fog', <WiFog size={size} />],

  // mist
  ['Mist', <WiRainMix size={size} />],

  // sleet
  ['Light sleet', <WiSleet size={size} />],
  ['Moderate or heavy sleet', <WiSleet size={size} />],
  ['Light sleet showers', <WiSleet size={size} />],
  ['Moderate or heavy sleet showers', <WiSleet size={size} />],
  ['Patchy sleet possible', <WiSleet size={size} />],

  // rain
  ['Light rain', <WiRain size={size} />],
  ['Moderate rain', <WiRain size={size} />],
  ['Heavy rain', <WiRain size={size} />],

  ['Light rain shower', <WiRain size={size} />],
  ['Moderate or heavy rain shower', <WiRain size={size} />],
  ['Torrential rain shower', <WiRain size={size} />],

  ['Patchy rain possible', <WiRain size={size} />],
  ['Patchy light rain', <WiRain size={size} />],

  ['Moderate rain at times', <WiRain size={size} />],
  ['Heavy rain at times', <WiRain size={size} />],

  // drizzle
  ['Light drizzle', <WiRain size={size} />],
  ['Patchy light drizzle', <WiRain size={size} />],

  // freezing rain
  ['Light freezing rain', <WiRainMix size={size} />],
  ['Moderate or heavy freezing rain', <WiRainMix size={size} />],

  // freezing drizzle
  ['Freezing drizzle', <WiRainMix size={size} />],
  ['Heavy freezing drizzle', <WiRainMix size={size} />],
  ['Patchy freezing drizzle possible', <WiRainMix size={size} />],

  // ice pellets
  ['Ice pellets', <WiRainMix size={size} />],
  ['Light showers of ice pellets', <WiRainMix size={size} />],
  ['Moderate or heavy showers of ice pellets', <WiRainMix size={size} />],

  // snow
  ['Light snow', <WiSnow size={size} />],
  ['Moderate snow', <WiSnow size={size} />],
  ['Heavy snow', <WiSnow size={size} />],
  ['Light snow showers', <WiSnow size={size} />],
  ['Moderate or heavy snow showers', <WiSnow size={size} />],
  ['Blowing snow', <WiSnowWind size={size} />],
  ['Blizzard snow', <WiSnowWind size={size} />],
  ['Patchy light snow', <WiSnow size={size} />],
  ['Patchy moderate snow', <WiSnow size={size} />],
  ['Patchy heavy snow', <WiSnow size={size} />],
  ['Patchy snow possible', <WiSnow size={size} />],

  // thunder
  ['Thundery outbreaks possible', <WiThunderstorm size={size} />],
  ['Patchy light rain with thunder', <WiThunderstorm size={size} />],
  ['Moderate or heavy rain with thunder', <WiThunderstorm size={size} />],
  [
    'Moderate or heavy snow with thunder',
    <WiNightSnowThunderstorm size={size} />,
  ],
]);

export default icons;
