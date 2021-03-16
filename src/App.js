import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import { fetchProducts, fetchCatogories } from "./services/api";
import Header from "./components/Header";
import Home from './pages/Home'
import Product from './pages/Product'
import Page404 from './pages/Page404'
import ModalBodySidebar from "./components/Modal-sidebar"
import Cart from "./components/Cart";

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

function App() {
  // Modal logic
  const [productInModal, setProductInModal] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  function openProductModal(product) {
    setProductInModal(product);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setTimeout(() => {
      setProductInModal(null);
    }, 500);
  }

  useEffect(() => {
    if (modalIsOpen || isCartOpen) {
      document.body.style.height = `100vh`;
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.height = ``;
      document.body.style.overflow = ``;
    }
  }, [modalIsOpen, isCartOpen]);

  // Cart Logic

  const [cart, setCart] = useState([]);
  
  const cartTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  function isInCart(product) {
    return product != null && cart.find((p) => p.id === product.id) != null;
  }
  function addToCart(productId) {
    setCart([...cart, { id: productId, quantity: 1 }]);
  }
  function removeFromCart(productId) {
    setCart(cart.filter((product) => product.id !== productId));
  }
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
          onCartClick={() => setCartOpen(true)}
        />
        {/* <ModalBodySidebar
          isOpen={isCartOpen}
          close={() => setCartOpen(false)}
          title='Cart'
        >
          <Cart
            // products={cartProducts}
            totalPrice={cartTotal}
            removeFromCart={removeFromCart}
            setProductQuantity={setProductQuantity}
          />
        </ModalBodySidebar> */}

        <Switch>             // legge la stringa che c'è nella url, in base a ciò (path) decide quale componente mostrare 
          <Route exact path='/'>            // exact - dice che la stringa deve essere uguale alla url, altrimenti usa un sistema a cascata 
            <Home />
          </Route>
          <Route path='/product/:productId'>            // ':' cattura tutto quello che viene dopo lo '/', quindi dice alla url che questo è un parametro
            <Product
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isInCart={isInCart} />
          </Route>
          <Route path='/page404'>
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;