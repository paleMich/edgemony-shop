// import { useState } from "react";
import { PropTypes } from "prop-types";
import { useLocation, useHistory } from "react-router-dom";

import SearchBar from "../SearchBar"
import Card from "../CardProduct"
import CategoriesFilter from "../Categories";

import "./styles.scss";

function ProductList({ products, categories /* openProductModal */ }) {
  const location = useLocation();
  const history = useHistory();

  const searchParams = new URLSearchParams(location.search);      /* location.search è la url già presente, lo faccio per non sovrascriverlo, parto quindi da quella che ho */
  const searchTerm = searchParams.get('q') || '';

  function updateSearchTerm(term) {
    if (term){
      searchParams.set('q', term);                                  /* q = query, spesso usato per indicare appunto una query string */
    }
    else {
      searchParams.delete('q');  
    }
    history.push({ search: '?' + searchParams.toString() });  
  }


  const selectedCategoriesParam = searchParams.get('categories');
  const selectedCategories = selectedCategoriesParam
    ? selectedCategoriesParam.split(",")
    : [];

  function updateCategories(categories) {  
    const selectedParam = categories.join(",")
    if (categories.length === 0) {
      searchParams.delete('categories') 
    } else {
      searchParams.set('categories', selectedParam)                    /* uno è il nome della query string e l'altro è il valore  es: categories=mens, jewerly */
    }
    history.push({ search: '?' + searchParams.toString() })            /* metodo push di history, per aggiornare la mia url con il nuovo new params */
  }


  const termRegexp = new RegExp(searchTerm, "i");                      /* serve a trovare dei match tra la stringa  */
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
          placeholder={`Search a product..`}        // <i className="fa fa-search" aria-hidden="true"></i>
          onSearch={updateSearchTerm}
        />
        <CategoriesFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onSelectCategory={updateCategories}
        />
      </div>
      <div className="Card-wrapper">
        {filteredProducts.map((product) => (
          <Card
            product={product}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};

export default ProductList;