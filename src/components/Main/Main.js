import Card from './Card/Card'

import './Main.css'
import './Card/Card.css'

function Main({products}) {
  return (
    <div className='Main'>
      <ul className='Card-wrapper'>
        <Card products={products}/>
      </ul>
    </div>
  )
}

export default Main