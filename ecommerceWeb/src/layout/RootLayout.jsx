import React, { useState,useEffect } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
// import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux';
import logo from '../assets/logoecom.png'
import { CiShoppingCart } from "react-icons/ci";
import { motion } from 'framer-motion';






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

            {/* className="root-layout bg-slate-400 w-[100%] h-[100px] fixed top-0 */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{

                    duration: 1.5

                }}

                className={top ? `` : ` bg-slate-200 rounded-md w-[100%] h-[80px] fixed top-0 z-50`}
                 
            >
                <div className="z-10">

                    <header>
                        <nav className='flex space-x-6 items-center'>
 
                            <NavLink to="/" className=''><img src={logo} alt='sarus' className=' ml-4 mt-2 h-14 w-40'></img></NavLink>
                            <NavLink to="categories" className='ml-6 mt-1'>Category</NavLink>
                            <form action="" className=' rounded-md relative   '>

                                <input
                                    type="text"
                                    placeholder="What are you lookin for?   "
                                    className="border-none mt-1 mr-4 p-2 rounded-md focus:outline-none bg-white focus:ring-2 focus:ring-blue-500 "
                                />



                            </form>


                            <ul className="absolute right-32 flex space-x-5 items-center">
                                <NavLink to="login">Login</NavLink>
                                <p>|</p>
                                <NavLink to="signup">Signup</NavLink>
                                <NavLink to="cart" className={cartProducts.length >0 ?`flex text-green-600`:`flex`}><CiShoppingCart className='text-2xl ' /> {cartProducts.length}</NavLink>
                                <NavLink to="contact">contact</NavLink>

                            </ul>

                        </nav>

                    </header>
                </div>

            </motion.div>
            <main className='mt-[100px]'>
                <Outlet />
            </main>

        </>



    )
}
