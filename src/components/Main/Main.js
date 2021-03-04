import {useState} from 'react'
// import Search from './Search-product/Search'

import Card from './Card/Card'

import './Main.css'
import './Card/Card.css'

function Main({products}) {
  const [search, setSearch] = useState('')

  const filtProduct = products.filter(data => {
    return data.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className='Main'>
      {/* <Search setSearch={setSearch}/> */}
      <div className='SearchBar'>
        <span>Search</span>
        <input type='text' placeholder='Search a product' onChange={(e) => setSearch(e.target.value)} className='Search'></input>
      </div>

      <ul className='Card-wrapper'>{
        filtProduct.map((product) => 
          <Card products={product} key={product.id}/>
        )}
      </ul>
    </div>
  )
}

export default Main