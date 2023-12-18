import PropTypes from 'prop-types';
import { WiCloudyGusts } from 'weather-icons-react';
import './ForecastSummary.css';

function ForecastSummary({ data }) {
  return (
    <div id="forecast_summary" className="block">
      <div id="left_summary">
        <h2>
          {data.country === 'United States of America'
            ? `${data.name}, ${data.region}`
            : `${data.name}, ${data.country}`}
        </h2>
        <h4>
          {data.date}
          <br />
          {data.time}
        </h4>
        <h1>{data.tempCelsius}°C</h1>
      </div>
      <div id="right_summary">
        <h2>{data.condition}</h2>
        <WiCloudyGusts size={100} />
      </div>
    </div>
  );
}

ForecastSummary.propTypes = {
  data: PropTypes.shape({
    region: PropTypes.string,
    country: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    tempCelsius: PropTypes.number,
    condition: PropTypes.string,
  }),
};

export default ForecastSummary;
