import React,{useState, useEffect} from 'react'
import Product from './Product';
import productsArray from './data'
import axios from "axios"

const ProductList = () => {
   
    const [products, setProducts] = useState(productsArray)
    const [productSearchValue, setProductSearchValue] = useState('')

    const fetchProducts = ()=>{
      axios.get('https://fakestoreapi.com/products')
           .then(response=> setProducts(response.data))
    }

    const searchProductHandler = (event)=>{
      setProductSearchValue(event.target.value)
    }
  
    useEffect(()=>{
        fetchProducts()
    }, [])

  return (
    <>
    <h1>Product List</h1>
    <input className="searchBar-input" type="search" name="search" placeholder='Search here' onChange={searchProductHandler} value={productSearchValue}/>
    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center mt-5 mb-5"> 
      {products ? products.filter((product)=>product.title.toLowerCase().includes(productSearchValue)).map((product) => <Product {...product}/>): null}
    </div>
    </>
  )
}

export default ProductList