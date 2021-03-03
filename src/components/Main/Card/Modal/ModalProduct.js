import './ModalProduct.css'

function ProductDetails({product}) {
  return (
    <div className='modal-prod'>
      <div className='img-modal'>
        <img src={product.image} alt=''></img>
      </div>
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <span>{product.price}€</span>
    </div>
  )
}

export default ProductDetails