import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


// import { fetchProducts, fetchCatogories } from "./services/api";
import Header from "./components/Header";
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import PageNotFnd from './pages/Page404'
import Cart from "./pages/Cart";

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

function App() {
  
  const [cart, setCart] = useState([]);
  
  const cartTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  function isInCart(product) {
    return product != null && cart.find((p) => p.id === product.id) != null;
  };

  function addToCart(product) {
    setCart([...cart, { ...product, quantity: 1 }]);
  };
  
  function removeFromCart(productId) {
    setCart(cart.filter((product) => product.id !== productId));
  };

  function setProductQuantity(productId, quantity) {
    setCart(
      cart.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  }

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
            <Cart 
              products={cart}
              totalPrice={cartTotal}
              removeFromCart={removeFromCart}
              setProductQuantity={setProductQuantity}
            />
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