import { useState, useEffect } from 'react'
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Loading from "./components/element-effect/Loading/Loading";
import Error from "./components/element-effect/Error/Error";

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cart, setCart] = useState([])
  
  useEffect(() => {
    setLoading(true);
    // setError(false);
    fetch('https://fakestoreapi.com/products')
      .then(async (response) => {
        const data = await response.json();
        if (response.status >= 400){
          throw new Error();
        }
        return data;
      })
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        // setError(true);
      });         
  }, [error]);

  return (
    <>
      <Header logo={data.logo} cart={cart}/>
      <Hero title={data.title} cover={data.cover} description={data.description} />
      {!isLoading 
        ? <Main products={products} items={setCart}/>     /* () => setAddCart(addCart + 1) */
        : <Loading />
      }
      { error&&<Error setError={setError}/> }
    </>
  )
}

export default App;
