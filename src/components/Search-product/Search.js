import { PropTypes } from "prop-types";

import "./Search.css";

function Search({ onSearch }) {
  return (
    <div className="Search">
      <input
        type="search"
        placeholder="Search a product.."
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;