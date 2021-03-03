import { useState } from 'react'
import ProductDetails from './Modal/ModalProduct'

import './Card.css'

function Card({products}) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false)
  return (
      products.map((product) => <li className='Card'>
        <span>{product.title}</span>
        <div className='img-container'>
          <img src={product.image} alt=''></img>
        </div>
        <span>{product.price}€</span>
        <button type='button' onClick={() => setModalIsOpen(!modalIsOpen)}>View details</button>
        <div className={`modal ${modalIsOpen ? 'modal--is-visible' : ''}`}>
          <div className='modal-overlay'> 
            <span type='button' onClick={() => setModalIsOpen(!modalIsOpen)} className='close-modal'>close</span>
            
            <ProductDetails 
              title={product.title} 
              image={product.image} 
            />
          </div>
        </div>
      </li>
      )
  )
}

export default Card 