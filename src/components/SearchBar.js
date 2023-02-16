import React from 'react'

const SearchBar = ( {filterText, inStockOnly, onFilterTextChange, onInStockOnly } ) => {
  return (
    <form>
        <input type="text" 
        placeholder='Search...' 
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value) }
         />
        <label>
        <br />
        <input type="checkbox" 
        checked={inStockOnly}
        onChange={(e) => onInStockOnly(e.target.checked) }
        />
            Only show products in stock
        </label>
    </form>
  )
}

export default SearchBar