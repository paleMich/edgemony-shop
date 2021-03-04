import Card from './Card/Card'

import './Main.css'
import './Card/Card.css'

function Main({products}) {
  return (
    <div className='Main'>
      <ul className='Card-wrapper'>{
        products.map((product) => 
          <Card products={product} key={product.id}/>
        )}
      </ul>
    </div>
  )
}

export default Main