import { useState } from 'react'
import './Header.css'

function Header({logo, cart}){
  const mapPrice = cart.map(product => parseFloat(product.price))
  
  function add(accumulator, a) {
    return accumulator + a
  }

  const finalPrice = mapPrice.reduce(add, 0)
  console.log(finalPrice)


  return <header className='Header'>
    <img src={logo} alt="edgemony-shop-logo" />
    <div className='section-cart'>
      <span>{finalPrice}€</span>
      <span>{cart.length}</span>
    </div>
  </header>
}

export default Header
