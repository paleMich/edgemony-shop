import './Search.css'

function Search(setSearch) {
  
  return  <div className='SearchBar'>
      <span>Search</span>
      <input type='text' placeholder='Search a product' onChange={(e) => setSearch(e.target.value)} className='Search'></input>

    </div>
}

export default Search