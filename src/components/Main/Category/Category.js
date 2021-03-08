import { useState } from 'react'

// import Card from '../Card/Card'

import './Category.css'

function Category({data, onClickChange}) {

  const renderCategory = () => categ.map((value) => (
    <span onClick={() => onClickChange} className='category-list'>{value.name}
      
    </span>
  ))

  // const filtProduct = data.filter(data => {
  //   return data.category.includes(categName)
  // })

  return (
    category === data.category 
    ? null
    : renderCategory()
  )
  
      
  
}

export default Category