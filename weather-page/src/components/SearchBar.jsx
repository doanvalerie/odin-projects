import PropTypes from 'prop-types';
import fetchWeatherData from '../util/api';
import { IoSearchSharp } from 'react-icons/io5';
import './SearchBar.css';

function SearchBar({ updateWeatherData }) {
  const processSearch = async (event) => {
    event.preventDefault();
    const data = await fetchWeatherData(event.target.location.value);
    updateWeatherData(data);
  };

  return (
    <form id="search_form" onSubmit={processSearch}>
      <IoSearchSharp id="search_icon" />
      <input
        name="location"
        type="text"
        placeholder="search for cities"
      ></input>
    </form>
  );
}

SearchBar.propTypes = {
  updateWeatherData: PropTypes.func,
};

export default SearchBar;
