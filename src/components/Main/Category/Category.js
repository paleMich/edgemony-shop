import { useState } from 'react'
// import Card from '../Card/Card'

import Card from '../Card/Card'

import './Category.css'

const categ = [
  {
    '_id': 1,
    name: 'men clothing'
  },
  {
    '_id': 2,
    name: 'women clothing'
  },
  {
    '_id': 3,
    name: 'jewelery'
  },
  {
    '_id': 4,
    name: 'electronics'
  },
]

const categName = categ.map(data => data.name)    /* test */

function Category({data}) {
  const [isClicked, setIsClicked] = useState(false);
  
  const renderCategory = () => categ.map((value) => (
    <span onClick={() => setIsClicked(!isClicked)} className='category-list'>{value.name}</span>
  ))

  const filtProduct = data.filter(data => {
    return data.category.includes(categName)
  })

  return (
    <div>
      {renderCategory()}
      {filtProduct.map((product) => 
          <Card products={product} key={product.id}/>
        )}
    </div>
    )
  }

export default Category