import { useState } from 'react'
// import Card from '../Card/Card'

import './Category.css'

const categ = [
  {
    '_id': 1,
    'name': 'men clothing'
  },
  {
    '_id': 2,
    'name': 'women clothing'
  },
  {
    '_id': 3,
    'name': 'jewelery'
  },
  {
    '_id': 4,
    'name': 'electronics'
  },
]

function Category(data) {
  const [isClicked, setIsClicked] = useState(false);
  
  const renderCategory = () => categ.map((value) => (
    <span className='category-list'>{value.name}</span>
  ))

  return (
    <div onClick={() => setIsClicked(!isClicked)}>
      {renderCategory()}
    </div>
    )
  }

export default Category