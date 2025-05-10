import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import mains from"../../assets/images/one.jpg"
import { useQuery } from '@tanstack/react-query';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default function RecentProducts() {
  
        function getRecent() {
            return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
        }

    let {data,isError,error,isLoading,isFetching} = useQuery({
        queryKey: ['ahmed'],
        queryFn:getRecent,
        retry:3000,
    })

         if (isLoading) {
            return <div className="py-8 w-full flex justify-center" >

                            <ClimbingBoxLoader
                            color="green"
                            size={23}/>         
                            
                              </div>
         }   

         if (isError) {
            return <div className="py-8 w-full flex justify-center" >
                    <h3>{error}</h3>
            </div>
         }  
         

  return (
   <>
   <div className="row">
    {data?.data.data.map((product)=><div key={product.id} className="w-1/4 px-6">
<div className="product py-4">
           <Link to={`/productdeatails/${product.id}`}>
           <img className='w-full' src={product.imageCover} alt={product.title}/>
                <span className='block font-light text-green-600'>{product.category.name}</span>
                <h2 className='text-lg font-normal text-gray-800 mb-4'>{product.title.split(' ').slice(0,2).join(' ')}</h2>
                <div className="flex justify-between">
                        <span>{product.price} EGP</span>
                        <span>{product.ratingAverage} <i className='fas fa-star text-yellow-300'></i></span>
                </div>
                <button className='btn'>Add to Cart</button>
           </Link>
    </div>

    </div>)}
   </div>
   
   </>
  )
}
