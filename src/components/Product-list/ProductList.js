import { useState } from "react";
import { PropTypes } from "prop-types";
import Product from "../Card/Product";
import Search from "../Search-product/Search";

import "./ProductList.css";
import CategoriesFilter from "../Categories/Categories";

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
    <div className="ProductList">
      <div className="ProductList__filters">
        <Search onSearch={setSearchTerm} />
        <CategoriesFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onSelectCategory={setSelectedCategories}
        />
      </div>
      <div className="ProductList__products">
        {filteredProducts.map((product) => (
          <Product
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