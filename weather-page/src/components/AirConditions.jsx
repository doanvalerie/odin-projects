import PropTypes from 'prop-types';
import {
  WiRaindrop,
  WiStrongWind,
  WiRainMix,
  WiThermometer,
  WiRaindrops,
  WiBarometer,
} from 'weather-icons-react';
import './AirConditions.css';

const acIconSize = 50;

function AirConditions({ data }) {
  return (
    <div id="air_conditions" className="block">
      <div className="ac_col">
        <AirConditionBlock
          field="Humidity"
          icon={<WiRaindrop size={acIconSize} />}
          value={`${data.humidity}%`}
        />
        <AirConditionBlock
          field="Wind"
          icon={<WiStrongWind size={acIconSize} />}
          value={`${data.windKPH} kph`}
        />
        <AirConditionBlock
          field="Chance of Rain"
          icon={<WiRainMix size={acIconSize} />}
          value={`${data.chanceOfRain}%`}
        />
      </div>
      <div className="ac_col">
        <AirConditionBlock
          field="Feels Like"
          icon={<WiThermometer size={acIconSize} />}
          value={`${data.feelsLikeC}°C`}
        />
        <AirConditionBlock
          field="Precipitation"
          icon={<WiRaindrops size={acIconSize} />}
          value={`${data.precipMM} mm`}
        />
        <AirConditionBlock
          field="Pressure"
          icon={<WiBarometer size={acIconSize} />}
          value={`${data.pressureMB} mb`}
        />
      </div>
    </div>
  );
}

function AirConditionBlock({ field, icon, value }) {
  return (
    <div className="ac_desc">
      {icon}
      <div className="ac_text">
        <h3 className="ac_field">{field}</h3>
        <h3 className="ac_value">{value}</h3>
      </div>
    </div>
  );
}

AirConditions.propTypes = {
  data: PropTypes.shape({
    humidity: PropTypes.number,
    windKPH: PropTypes.number,
    chanceOfRain: PropTypes.number,
    feelsLikeC: PropTypes.number,
    precipMM: PropTypes.number,
    pressureMB: PropTypes.number,
  }),
};

AirConditionBlock.propTypes = {
  field: PropTypes.string,
  icon: PropTypes.element,
  value: PropTypes.string,
};

export default AirConditions;
