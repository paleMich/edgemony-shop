import { useState } from "react";
import { PropTypes } from "prop-types";

import SearchBar from "../SearchBar"
import Card from "../CardProduct"
import CategoriesFilter from "../Categories";

import "./styles.scss";

function ProductList({ products, categories, openProductModal }) {
  const [searchTerm, setSearchTerm] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const termRegexp = new RegExp(searchTerm, "i");
  const filteredProducts = products.filter(
    (product) =>
      product.title.search(termRegexp) !== -1 &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category))
  );

  return (
    <div className="centerSection">
      <div className="section-filter">
        <SearchBar 
          placeholder={'Search a product..'}
          onSearch={setSearchTerm} 
        />
        <CategoriesFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onSelectCategory={setSelectedCategories}
        />
      </div>
      <div className="Card-wrapper">
        {filteredProducts.map((product) => (
          <Card
            product={product}
            key={product.id}
            openProductModal={() => openProductModal(product)}
          />
        ))}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  openProductModal: PropTypes.func.isRequired,
};

export default ProductList;