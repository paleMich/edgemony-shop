import { useState, useEffect } from 'react'
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";

import './components/element-effect/loading.css';
import './components/element-effect/error.css';



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
  // const [reload, setReload] = useState(false)
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });         
  }, []);

  return (
    <>
      <Header logo={data.logo} />
      <Hero title={data.title} cover={data.cover} description={data.description} />
      {!isLoading ? (
        <Main products={products}/>
        ) : (
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        )
      }
      { isError&&<p /* onClick={() => setReload(reload)}  */className='error'>ALLERT
          <p>Please click</p>
          <span>Here</span>
        </p> }
    </>
  )
}

export default App;
