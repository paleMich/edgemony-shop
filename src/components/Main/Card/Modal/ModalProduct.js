function ProductDetails(props) {
  return (
    <div>
      <span>{props.title}</span>
      <div className='img-container'>
      <img src={props.image} alt=''></img>
      </div>
    </div>
  )
}

export default ProductDetails