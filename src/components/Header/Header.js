import './Header.css'

function Header({logo, cartProd}){
  console.log(cartProd)
  return <header className='Header'>
    <img src={logo} alt="edgemony-shop-logo" />
    <div className='section-cart'>
      <span>{cartProd.price}</span>
      <span>{cartProd.length}</span>
    </div>
  </header>
}

export default Header
