import {Cart} from './Cart/Cart'

import './Header.css'

function Header({logo, cart}){
  return <header className='Header'>
    <img src={logo} alt="edgemony-shop-logo" />
    <Cart cart={cart}/>
  </header>
}

export default Header
