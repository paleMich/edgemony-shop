import { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import Hero from "../../components/Hero";
import Loader from "../../components/Loader";
import ErrorBanner from "../../components/Error";
import ProductList from "../../components/Product-list";
import { fetchProducts, fetchCatogories } from "../../services/api";

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};


let cache;

function Home() {
  // API data logic
  const [products, setProducts] = useState(cache ? cache.products : []);
  const [categories, setCategories] = useState(cache ? cache.products : []);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    if (cache !== undefined) {
      return;       /* se ho già qualcosa mi fermo e non faccio niente, altrimenti vado avanti */
    }
    setIsLoading(true);
    setApiError("");
    Promise.all([fetchProducts(), fetchCatogories()])
      .then(([products, categories]) => {
        setProducts(products);
        setCategories(categories);
        cache = { products, categories}
      })
      .catch((err) => setApiError(err.message))
      .finally(() => setIsLoading(false));
  }, [retry]);  

  return (
    <div className="Home">
      <Hero
        title={data.title}
        description={data.description}
        cover={data.cover}
      />
      <main>
        {isLoading ? (
          <Loader />
        ) : apiError ? (
          <ErrorBanner
            message={apiError}
            close={() => setApiError("")}
            retry={() => setRetry(!retry)}
          />
        ) : (
          <ProductList
            products={products}
            categories={categories}
          />
        )}
      </main>
    </div>
  );
}

export default Home;