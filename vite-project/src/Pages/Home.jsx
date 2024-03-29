import React, { useState } from 'react'
import { useEffect } from 'react'
import { getProducts } from '../API'

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function getAllProducts() {
      const allProducts = await getProducts();
      setProducts(allProducts);
    }
    getAllProducts()
  },[])
  return (
    <div>
      {products.map((product) => {
        return (<>
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        <p>{product.category}</p>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        </>)
      })}
    </div>
  )
}

export default Home