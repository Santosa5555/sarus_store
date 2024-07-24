import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import logo from '../assets/logoecom.png'
import { useSelector } from 'react-redux';
import { CiShoppingCart } from "react-icons/ci";
const Header = () => {
    const cartProducts = useSelector(state => state.cart)

    const isSmall = useMediaQuery({ query: "(max-width: 828px)" });
    return (
        <div>
            {isSmall ? <SmallScreenHeader cartProducts={cartProducts} /> : <LargeScreenHeader cartProducts={cartProducts}/>}

        </div>
    )
}
const SmallScreenHeader = ({cartProducts}) => {
    
    return (
        <div className="z-10">

        <header>
            <nav className='flex space-x-6 items-center mx-auto'>

                
                 <NavLink to="/" className=''><img src={logo} alt='sarus' className='
                  ml-4 mt-2 sm:h-14 md:h-14 lg:h-14 h-10 lg:w-40 sm:w-40 w-28 md:w-40'></img>
                  </NavLink>
                  <BiMenu />
                    
                
            
            
            </nav>
        </header>
            



        </div>

    )
}
const LargeScreenHeader = ({cartProducts}) => {
    return (
        <div className="z-10">

            <header>
                    
                <nav className='flex space-x-6 items-center mx-auto'>
                    

                    <NavLink to="/" className=''><img src={logo} alt='sarus' className=' ml-4 mt-2 sm:h-14 md:h-14 lg:h-14 h-10 lg:w-40 sm:w-40 w-28 md:w-40 '></img></NavLink>
                    <NavLink to="categories" className='ml-5 mt-1'>Category</NavLink>
                    <form action="" className=' rounded-md relative  '>

                        <input
                            type="text"
                            placeholder="What are you lookin for? "
                            className="lg:w-80 md:w-64 sm:w-52 border-none mt-2  mr-4 p-2 ml-6 rounded-md focus:outline-none  focus:ring-2 focus:ring-red-300 bg-white   "
                        // onKeyUp={}
                        />



                    </form>


                    <ul className="absolute lg:right-24 mt-2 md:right-12 flex lg:space-x-5 md:space-x-3 items-center ">
                        <NavLink to="login" className='hover:underline'>Login</NavLink>
                        <p>|</p>
                        <NavLink to="signup">Signup</NavLink>
                        <NavLink to="cart" className={cartProducts.length > 0 ? `flex text-green-600` : `flex`}><CiShoppingCart className='text-2xl ' /> {cartProducts.length}</NavLink>
                        <NavLink to="contact">contact</NavLink>

                    </ul>

                </nav>

            </header>
        </div>

    )
}

export default Header
