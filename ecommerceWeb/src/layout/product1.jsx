import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../stores/cartslice'
import { Provider } from 'react-redux'
import store from '../stores/store'
import axios from 'axios';
import { asyncThunkCreator } from '@reduxjs/toolkit'
import useFetch from '../c-hooks/use-fetch'
import { Outlet } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Product1() {

    
    const[addedItems,SetAddedItems]=useState({})
    const dispatch = useDispatch()
    const{data,loading}=useFetch(`https://dummyjson.com/products `)
    function addToCart(item,index) {
        
        dispatch(add(item))
        SetAddedItems(prevState=>({
            ...prevState,
            [item.id]:true
        }))   
    }


    return (
        <div>
            <Provider store={store}>
                {loading && <SkeletonLoader/>}
                {/* {error && <div>{error}</div>} */}
                {!loading && (
                    <div className="">
                        <div className="grid grid-cols-4 gap-4 custom-grid ml-36 mr-36">

                            {data.map((item, index) => {
                                return (
                                    <div key={index} className="border-2 flex flex-col justify-between border-gray-300 hover:shadow-xl p-4">
                                        <img className="w-full h-64 object-cover  hover:object-none   mb-4" src={item.thumbnail} alt={item.title} />
                                        <div className="flex flex-col flex-grow justify-between">
                                            <p className="mb-2">{item.title}</p>
                                            <p className="mb-4">Rs.{item.price}</p>
                                            <button className={addedItems[item.id]?"mt-auto bg-stone-400 rounded-sm text-amber-100 py-2 ":"mt-auto rounded-sm  bg-slate-500 text-white py-2"} onClick={() => addToCart(item,index)} disabled={addedItems[item.id]}> {addedItems[item.id] ? 'Added' : 'Add to cart'}</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>






                )}
            </Provider>

        </div>

    )
}


// SkeletonLoader
const SkeletonLoader = () => {
    return (
      <div className="grid grid-cols-4 gap-4 custom-grid ml-36 mr-36">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="border-2 flex flex-col justify-between border-gray-300 p-4 bg-gray-200 animate-pulse"
          >
            {/* Placeholder for image */}
            <div className=" h-64 bg-gray-300 mb-4 " ></div>
            <div className="flex flex-col flex-grow justify-between">
              {/* Placeholder for title */}
              <div className="bg-gray-300 h-4 mb-2 rounded w-3/4"></div>
              {/* Placeholder for price */}
              <div className="bg-gray-300 h-4 mb-4 rounded w-1/2"></div>
              {/* Placeholder for button */}
              <div className="bg-gray-300 h-8 rounded w-full"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };