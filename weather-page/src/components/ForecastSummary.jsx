import PropTypes from 'prop-types';
import icons from '../util/icons';
import './ForecastSummary.css';

function ForecastSummary({ location, data }) {
  return (
    <div id="forecast_summary" className="block">
      <div id="left_summary">
        <h1>
          {location.country === 'United States of America'
            ? `${location.name}, ${location.region}`
            : `${location.name}, ${location.country}`}
        </h1>
        <h2>
          {data.date}
          <br />
          {data.time}
        </h2>
        <h2 id="forecast_temp">{data.tempC}°C</h2>
      </div>
      <div id="right_summary">
        <h2>{data.condition}</h2>
        {icons.get(data.condition)}
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
