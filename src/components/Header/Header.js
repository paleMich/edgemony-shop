import './Header.css'

function Header({logo, cart}){
  const mapPrice = cart.map(product => parseFloat(product.price))
  
  const finalPrice = mapPrice.reduce((partialAdd, a) => partialAdd + a, 0)    // function add(accumulator, a) { return accumulator + a }
 
  return <header className='Header'>
    <img src={logo} alt="edgemony-shop-logo" />
    <div className='section-cart'>
      <span className='price'>{finalPrice} €</span>
      <div className='Cart'>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        <span className='items-num'>{cart.length}</span>
      </div>
    </div>
  </header>
}

export default Header
