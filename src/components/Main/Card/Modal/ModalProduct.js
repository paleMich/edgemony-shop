import React, { useState } from 'react';

import './ModalProduct.css'

function ModalProducts({product, items}) {
  const [clicked, setClicked] = useState(false)
  const [btnText, setBtnText] = useState('Add to cart')
  const addToCart = () => items((prevState) => [...prevState, {...product}])

  const onClick = () => {
    if(!clicked){
      setClicked(true);
      addToCart();
      setBtnText('In cart')
    }
  }

  return (
    <div className='modal-prod'>
      <div className='img-modal'>
        <img src={product.image} alt=''></img>
      </div>
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <div className='footer-modal'>
        <button 
          type='button' 
          onClick={onClick} 
          className='Cart'>{btnText}
        </button>
        <span>Price: {product.price}€</span>
      </div>
    </div>
  )
}

export default ModalProducts