import PropTypes from 'prop-types';
import { WiCloudyGusts } from 'weather-icons-react';
import './ForecastSummary.css';

function ForecastSummary({ location, data }) {
  return (
    <div id="forecast_summary" className="block">
      <div id="left_summary">
        <h2>
          {location.country === 'United States of America'
            ? `${location.name}, ${location.region}`
            : `${location.name}, ${location.country}`}
        </h2>
        <h3>
          {data.date}
          <br />
          {data.time}
        </h3>
        <h1>{data.tempC}°C</h1>
      </div>
      <div id="right_summary">
        <h2>{data.condition}</h2>
        <WiCloudyGusts size={100} />
      </div>
    </div>
  );
}

ForecastSummary.propTypes = {
  location: PropTypes.shape({
    region: PropTypes.string,
    country: PropTypes.string,
    name: PropTypes.string,
  }),

  data: PropTypes.shape({
    date: PropTypes.string,
    time: PropTypes.string,
    tempC: PropTypes.number,
    condition: PropTypes.string,
  }),
};

export default ForecastSummary;
