import React, { useEffect, useState } from 'react'
import slide from '../../assets/images/one.jpg'
import slide2 from '../../assets/images/onee.jpeg'
import Slider from "react-slick";

export default function Categoryslider() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 2,
      autoplay:true,
      arrows:true,
    };
  
    useEffect(()=>{

    },[])
  return (
    <div className='row'>
<div className="w-3/4 p-6">
<Slider {...settings}>
<img src={slide} alt="" className='w-full h-[400px]' />
<img src={slide} alt="" className='w-full h-[400px]' />
<img src={slide} alt="" className='w-full h-[400px]' />
</Slider>
    
    </div>
<div className="w-1/4 p-2">
<img src={slide2} alt="" className='w-full h-[200px]' />
<img src={slide2} alt="" className='w-full h-[200px]' />


</div>
    </div>
  )
}
