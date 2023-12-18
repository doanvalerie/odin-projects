import SearchBar from './components/SearchBar';
import ForecastSummary from './components/ForecastSummary';
import fetchWeatherData from './util/api';
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
        <div>Loading!</div>
      ) : (
        <main>
          <div id="upper_content">
            <div id="left_upper_content">
              <SearchBar updateWeatherData={handleWeatherData} />
              <ForecastSummary data={weatherData.forecastSummary} />
            </div>
            <div id="right_upper_content"></div>
          </div>
          <div id="lower_content"></div>
        </main>
      )}
    </>
  );
}

export default App;
