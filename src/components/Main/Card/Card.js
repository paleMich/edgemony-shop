import './Card.css'

function Card({products}) {
  return (
      products.map((product) => <li className='Card'>
        <span>{product.title}</span>
        <div className='img-container'>
          <img src={product.image} alt=''></img>
        </div>
        <span>{product.price}€</span>
        <button>Read more</button>
      </li>
      )
  )
}

export default Card 