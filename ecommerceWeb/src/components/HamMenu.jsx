import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5";
export default function HamMenu({showMenu,setShowMenu}) {
    // function hideMenu(){
    //     showMenu=false
    // }

    return (
        <>
            <div className={`fixed top-0  right-0 flex flex-col space-y-6 pt-20 text-lg 
            text-center border-2  h-lvh  z-10 text-white bg-rose-600 w-1/3 transition-transform  ${ showMenu ? 'translate-x-0' : 'translate-x-full'}
            duration-300 ease-in-out`}>

                    <button className='text-4xl text-white  absolute top-7 right-8 animate-bounce-once' onClick={()=>setShowMenu(false)}><IoCloseSharp /></button>
                
                    <NavLink to="login" className='hover:text-slate-500'>Login</NavLink>

                    <NavLink to="signup" className='hover:text-slate-500'>Signup</NavLink>

                    <NavLink to="contact" className='hover:text-slate-500'>contact</NavLink>

               
                   


            </div>
        </>
        
    )
}
