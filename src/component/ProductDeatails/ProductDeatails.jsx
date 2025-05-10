import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function ProductDeatails() {
let {id} =useParams()
const[productdetails,setproductdetails]=useState(null)

function getproductsdeatails(id) {
  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  .then(({data})=>{            
    setproductdetails(data.data)  
    console.log(data.data);
            
  })
  .catch((error)=>{

  })
}
    useEffect(()=>{
      getproductsdeatails(id)
    },[])
  return (
    <>
    <div className="row">
      <div className="w-1/4">
      <img src={productdetails?.imageCover}  />
      </div>
      <div className="w-3/4 p-6 text-center">
      <h1>{productdetails?.title}</h1>
      <p>{productdetails?.description}</p>

                <span>{productdetails?.price} EGP</span>
                <br />
                <button className='btnnn'>Add to Cart</button>
      </div>
    </div>
    </>
  )
}
