import {Cart} from './Cart/Cart'

import './Header.css'

function Header({logo, cart, onClose, products}){
  return <header className='Header'>
    <img src={logo} alt="edgemony-shop-logo" />
    <Cart cart={cart} onClose={onClose} products={products}/>
  </header>
}

export default Header
