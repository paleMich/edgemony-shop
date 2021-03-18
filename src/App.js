import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { postItemToCart, deletItemFromCart, fetchCart } from "./services/api";

import Header from "./components/Header";
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import PageNotFnd from './pages/Page404'
import Cart from "./pages/Cart";
import Loader from "./components/Loader";
import ErrorBanner from "./components/Error";

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

let cartId;

function App() {

  const [cart, setCart] = useState([]);

  const cartTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  function isInCart(product) {
    return product != null && cart.find((p) => p.id === product.id) != null;
  };

  async function addToCart(product) {
    try {
      const cartObj = await postItemToCart(cartId, product.id, 1)
      setCart(cartObj.items);
    } catch (error) {
      console.error('Error Api call of postItemToCart' + error.message)
    }
  };

  async function removeFromCart(productId) {
    setIsLoading(true);
    setApiError("");
    try {
      const cartObj = await deletItemFromCart(cartId, productId)
      setCart(cartObj.items);
    } catch (error) {
      console.error('Error Api call of postItemToCart' + error.message)
    }
  };

  async function setProductQuantity(productId, quantity) {
    try {
      const cartObj = await postItemToCart(cartId, productId, quantity)
      setCart(cartObj.items);
    } catch (error) {
      console.error('Error Api call of postItemToCart' + error.message)
    }
  }
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    const cartIdFromLocalStorage = localStorage.getItem('edgemony-cart-id')
    if (cartIdFromLocalStorage) {
      async function fetchCartInEffect() {
        try {
          setIsLoading(true);
          setApiError("");
          const cartObj = await fetchCart(cartIdFromLocalStorage)
          setCart(cartObj.items)
          cartId = cartObj.id
        } catch (error) {
          console.error('Error about Api call cart' + error.message)
          setApiError(error.message)
        }
      }
      fetchCartInEffect()
      setIsLoading(false);
    }
  }, [retry])

  return (
    <Router>
      <div className="App">
        <Header
          logo={data.logo}
          title={data.title}
          cartTotal={cartTotal}
          cartSize={cart.length}
        />

        <Switch>                                          {/*  legge la stringa che c'è nella url, in base a ciò (path) decide quale componente mostrare  */}
          <Route exact path='/'>                          {/* exact - dice che la stringa deve essere uguale alla url, altrimenti usa un sistema a cascata  */}
            <Home />
          </Route>
          <Route path='/product/:productId'>              {/*  ':' cattura tutto quello che viene dopo lo '/', quindi dice che nella url è presente un parametro */}
            <Product
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              inCart={isInCart}
            />
          </Route>
          <Route path='/cart'>
            {isLoading ? (
              <Loader />
            ) : apiError ? (
              <ErrorBanner
                message={apiError}
                close={() => setApiError("")}
                retry={() => setRetry(!retry)}
              />
            ) : (
              <Cart
                products={cart}
                totalPrice={cartTotal}
                removeFromCart={removeFromCart}
                setProductQuantity={setProductQuantity}
              />
            )}
          </Route>
          <Route path='/*'>
            <PageNotFnd />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;