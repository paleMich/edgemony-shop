import {useState} from 'react'
// import Search from './Search-product/Search'     {/* test */}

import Category from './Category/Category'
import Card from './Card/Card'

import './Main.css'
import './Card/Card.css'

function Main({products}) {
  const [search, setSearch] = useState('')
  const [isClicked, setIsClicked] = useState(false);
  
  const filtProduct = products.filter(data => {
    return data.title.toLowerCase().includes(search.toLowerCase()) || data.description.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className='Main'>
      {/* <Search setSearch={setSearch}/> */}      {/* test */}
      <div className='section-filter'>
        <div className='SearchBar'>
          <span>Search</span>
          <input type='text' placeholder='Search a product' onChange={(e) => setSearch(e.target.value)} className='Search'></input>
        </div>

        <div className='Category'>
          <Category onClick={() => setIsClicked(!isClicked)} data={products}/>
        </div>
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