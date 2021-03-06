import {useState} from 'react'
// import Search from './Search-product/Search'     {/* test */}
// import Category from './Category/Category'       {/* test */}

import Card from './Card/Card'

import './Main.css'
import './Card/Card.css'

function Main({products}) {
  const [search, setSearch] = useState('')
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
          <input type='text' placeholder='Search a product' onChange={(e) => setSearch(e.target.value)} className='Search'></input>
        </div>

        <div className='Category'>{
          productCategory.map((data) => <div className='category-list' >
              <span onClick={() => setIsClicked(!isClicked)} className={`category ${isClicked ? 'category--is-hidden' : ''}`} >{data}</span>   
            </div>
          )
        }
          
          {/* <Category data={products} onClickChange={setIsClicked}/> */}
          
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