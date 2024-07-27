import React, { useState,useEffect } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
// import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux';
import logo from '../assets/logoecom.png'
import { CiShoppingCart } from "react-icons/ci";
import { motion } from 'framer-motion';
import Header from '../components/header';






export default function RootLayout() {
    const cartProducts = useSelector(state => state.cart)
    const [top, setTop] = useState(true)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setTop(false)
        }
        else {
            setTop(true)
        }
    })
  
    return (
        <>

            
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{

                    duration: 1.5

                }}

                className={top ? `` : ` bg-slate-200  animate-bounce-once shadow-lg shadow-zinc-400 rounded-md w-[100%] h-[80px]  fixed top-0 z-50`}
                 
            >
                <Header/>

            </motion.div>
            <main className='mt-[110px] bg-stone-100'>
                <Outlet />
            </main>

        </>



    )
}
