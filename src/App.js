import { useState, useEffect } from 'react'
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";

import "./App.css";

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

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      })
      .catch(() => {
        console.log('error')
      });         
  }, []);

  return (
    <>
      <Header logo={data.logo} />
      <Hero title={data.title} cover={data.cover} description={data.description} />
      <Main products={products}/>
    </>
  )
}

export default App;
