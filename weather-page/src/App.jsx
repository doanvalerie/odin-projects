import SearchBar from './components/SearchBar';
import ForecastSummary from './components/ForecastSummary';
import AirConditions from './components/AirConditions';
import HourlyForecast from './components/HourlyForecast';
import fetchWeatherData from './util/api';
import { WiCloudy } from 'weather-icons-react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  useEffect(() => {
    const defaultFetchWeatherData = async () => {
      const data = await fetchWeatherData('Los Angeles');
      setWeatherData(data);
    };

    defaultFetchWeatherData();
  }, []);

  return (
    <>
      {!weatherData ? (
        <h1 id="loading">
          <WiCloudy size={200} />
        </h1>
      ) : (
        <>
          <div id="upper_content">
            <SearchBar updateWeatherData={handleWeatherData} />
            <ForecastSummary
              location={weatherData.location}
              data={weatherData.current}
            />
            <AirConditions data={weatherData.current} />
          </div>
          <div id="lower_content">
            <HourlyForecast data={weatherData.hourly} />
          </div>
        </>
      )}
    </>
  );
}

export default App;
