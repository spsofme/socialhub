import React from 'react'
import icon_search from '../assets/icons/search.svg'

const SearchBar = () => {
  return (
    <div id='searchbar'>
			<img id='search-icon' src={icon_search} alt="search" />
      <input type="text" placeholder='Ara' />
			{/* <div id='search-result'></div> */}
    </div>
  )
}

export default SearchBar