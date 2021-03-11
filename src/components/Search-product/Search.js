import { PropTypes } from "prop-types";

import "./Search.css";

function Search({ onSearch }) {
  return (
    <div className="SearchBar">
      <span>Search</span>
      <input
        type="search"
        placeholder="Search a product.."
        className="Search"
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;