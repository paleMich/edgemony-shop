
import './Card.css'

function Card() {
  return (
      <ul className='Card-wrapper'>
        <li className='Card'>
          <span>Title</span>
          <img src='https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt=''></img>
          <span>99€</span>
          <button>Read more</button>
        </li>
        
      </ul>
    
  )
}

export default Card 