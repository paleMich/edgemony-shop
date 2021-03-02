import './Card.css'

function Card({products}) {
  return (
      products.map((product) => <li className='Card'>
        <span>{product.title}</span>
        <img src={product.image} alt=''></img>
        <span>{product.price}</span>
        <button>Read more</button>
      </li>
      )
  )
}

export default Card 