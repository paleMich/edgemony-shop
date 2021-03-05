import { useState } from 'react'

// import Card from '../Card/Card'

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

function Category({data, onClickChange}) {

  // console.log(data)

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