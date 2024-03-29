import React, { useEffect, useState } from 'react'
import { getSingleProduct } from '../API';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null)
  useEffect (() =>{
    async function displayProduct () {
      const {product} = await getSingleProduct(id)
      setProduct(product);

    }
    displayProduct();

  },[]);
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct