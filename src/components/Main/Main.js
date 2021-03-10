import {useState} from 'react'
// import Search from './Search-product/Search'     {/* test */}
// import Category from './Category/Category'       {/* test */}

import Card from './Card/Card'

import './Main.css'
import './Card/Card.css'

function Main({products, cart, items}) {
  const [search, setSearch] = useState('')
  const [categories, setCategories] = useState([])
  const [isClicked, setIsClicked] = useState(false);
  
  // search filter
  const filtProduct = products.filter(data => {
    return data.title.toLowerCase().includes(search.toLowerCase()) || data.description.toLowerCase().includes(search.toLowerCase())
  })

  // map/filter for a single
  const filtCategory = products.map(value => {
    return value.category 
  })

  const productCategory = filtCategory.filter((v, i, a) => a.indexOf(v) === i);
  //

  return (
    <div className='Main'>
      {/* <Search setSearch={setSearch}/> */}      {/* test */}
      <div className='section-filter'>
        <div className='SearchBar'>
          <span>Search</span>
          <input 
            type='text' 
            value={search}              // add: versione controllata, do un valore ad input che è collegato al nostro stato
            onChange={(e) => setSearch(e.target.value)} 
            className='Search' 
            placeholder='Search a product'></input>
        </div>

        <div className='Category-list'>{
          productCategory.map((data) => 
            <button 
              type='button' onClick={() => setIsClicked(!isClicked)} 
              className={`category ${isClicked ? 'category--is-hidden' : ''}`}>
              {data}
            </button>
          )
        }
          
          {/* <Category data={products} onClickChange={setIsClicked}/> */}
          
        </div>
      </div>

      {/* render products if search ? filtProduct : 'category clicked' */}
      <ul className='Card-wrapper'>{
        filtProduct.map((product) => 
          <Card 
            products={product} 
            cart={cart}
            items={items} 
            key={product.id}/>
        )}
      </ul>
    </div>
  )
}

export default Main