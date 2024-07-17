import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Aos from 'aos'
import 'aos/dist/aos.css'



export default function Cart() {
    const cartProduct=useSelector(state=>state.cart)
    useEffect(()=>{
      Aos.init({duration:1000})

    },[])
  return (
    <div>
        {cartProduct&& cartProduct.length ?
        cartProduct.map((item)=>(
           <div className=" border-slate-500 mb-8 p-5 -z-10" data-aos="fade-up">

            <img className="w-200 h-200" src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.description}</p>
            <h2>{item.price}</h2>
           </div>
        ))
        :null
        
    }
      
    </div>
  )
}
