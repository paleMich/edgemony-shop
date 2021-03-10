import { useState } from 'react'
import ModalProducts from './Modal/ModalProduct'

import './Card.css'

function Card({products, cart, items}) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false)
  return (
      <li className='Card'>
        <span>{products.title}</span>
        <div className='img-container'>
          <img src={products.image} alt=''></img>
        </div>
        {/* <span>{products.price}€</span> */}
        <button type='button' onClick={() => setModalIsOpen(!modalIsOpen)}>View details</button>
        <div className={`modal ${modalIsOpen ? 'modal--is-visible' : ''}`}>
          <div className='modal-overlay'> 
            <span type='button' onClick={() => setModalIsOpen(!modalIsOpen)} className='close-modal'>close</span>
            <ModalProducts 
              product={products} 
              cart={cart}
              items={items}
            />
          </div>
        </div>
      </li>
      
  )
}

export default Card 