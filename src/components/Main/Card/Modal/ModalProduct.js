function ProductDetails({product}) {
  return (
    <div>
      <div className='img-container'>
        <img src={product.image} alt=''></img>
      </div>
      <span>{product.title}</span>
      <p>{product.description}</p>
      <span>{product.price}€</span>
    </div>
  )
}

export default ProductDetails