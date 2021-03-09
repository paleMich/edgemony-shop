import './Cart.css'

export function Cart({cart}){
  const mapPrice = cart.map(product => parseFloat(product.price))
  
  const finalPrice = mapPrice.reduce((partialAdd, a) => partialAdd + a, 0)    // function add(accumulator, a) { return accumulator + a }
  // oppure cart.reduce((partialAdd, a) => partialAdd + a.price, 0)
 
  return ( 
    <div className='section-cart'>
      { !!cart.length && <span className='price'>{finalPrice.toFixed(2)} €</span> }
      <div className='cart-icon'>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        { !!cart.length && <span className='items-num'>{cart.length}</span> }           {/*  !! uguale a Boolean(csrt.length) */}
      </div>
    </div>
  )
}