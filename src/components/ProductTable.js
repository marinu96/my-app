import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ products, filterText , inStockOnly }) => {
    //console.log(products);
    let lastCategory = null;
    const rows = [];

    products.forEach((product) => {

        // === exactamente igual, tipo y valor, == valor igual
        // indexOf 1 true -1 false

        if(product.name.toLowerCase().indexOf(filterText.toLowerCase())=== -1){
            return
        }
        if(inStockOnly && !product.stocked){
            return
        }

        if(product.category !== lastCategory){
            rows.push (
                <ProductCategoryRow 
                category={product.category} 
                key={product.category} />
            )
            //console.log(rows);
        }
        rows.push(
            <ProductRow 
            product={product} 
            key={product.name} />
        )

        lastCategory = product.category;
    });

  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            <tbody>
                {rows}
            </tbody>
        </thead>
    </table>

  )
}

export default ProductTable