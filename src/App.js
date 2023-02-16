import { useState } from 'react';
import './App.css';
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar';

function App( {products} ) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  
  return (
    <div>
      <SearchBar 
      filterText={filterText} 
      inStockOnly={inStockOnly}
      onFilterTextChange={setFilterText}
      onInStockOnly={setInStockOnly}
      />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
    
  );
}

export default App;