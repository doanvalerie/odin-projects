import PropTypes from 'prop-types';
import icons from '../util/icons';
import './HourlyForecast.css';

function HourlyForecast({ data }) {
  return (
    <div id="hourly_forecast" className="block">
      <h2>Hourly Forecast</h2>
      <div id="forecast_row">
        {data.map((hour) => (
          <HourlyBlock
            key={hour.time}
            time={hour.time}
            temp={hour.tempC}
            condition={hour.condition}
          />
        ))}
      </div>
    </div>
  );
}

function HourlyBlock({ time, temp, condition }) {
  // console.log(condition);
  return (
    <div className="hourly_block">
      <h3>{time}</h3>
      {icons.get(condition)}
      <h3>{temp}°C</h3>
    </div>
  );
}

HourlyForecast.propTypes = {
  data: PropTypes.array,
};

HourlyBlock.propTypes = {
  time: PropTypes.string,
  temp: PropTypes.number,
  condition: PropTypes.string,
};

export default HourlyForecast;
