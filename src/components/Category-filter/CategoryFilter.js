import { PropTypes } from "prop-types";

function CategoryFilter({ name, selectedCategories, onSelectCategory }) {
  const isSelected = selectedCategories.includes(name);
  const className = "CategoryFilter" + (isSelected ? " selected" : "");
  const toggleCategory = () => {
    const newSelected = isSelected
      ? selectedCategories.filter((category) => category !== name)
      : [...selectedCategories, name];
    onSelectCategory(newSelected);
  };

  return (
    <button key={name} className={className} onClick={toggleCategory}>
      {name}
    </button>
  );
}

CategoryFilter.propTypes = {
  name: PropTypes.string.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;