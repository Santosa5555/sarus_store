import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import logo from '../assets/logoecom.png'
import { useSelector } from 'react-redux';
import { CiShoppingCart } from "react-icons/ci";
import HamMenu from './HamMenu';
const Header = () => {
    const cartProducts = useSelector(state => state.cart)

    const isSmall = useMediaQuery({ query: "(max-width: 984px)" });
    return (
        <div>
            {isSmall ? <SmallScreenHeader cartProducts={cartProducts} /> : <LargeScreenHeader cartProducts={cartProducts} />}

        </div>
    )
}
const SmallScreenHeader = ({ cartProducts }) => {
    const [showMenu, setShowMenu] = useState(false)
    function showHamMenu() {
        setShowMenu(!showMenu)
    }
    return (
        <div className="z-10">

            <header>
                <nav className='flex space-x-6 items-center mx-auto relative '>


                    <NavLink to="/" className=''><img src={logo} alt='sarus' className='
                  ml-4 mt-2 sm:h-14 md:h-14 lg:h-14 h-10 lg:w-40 sm:w-40 w-28 md:w-40'></img>
                    </NavLink>
                    <button onClick={showHamMenu}>


                        <BiMenu className='absolute right-8 text-3xl top-1/2' />
                    </button>
                    



                </nav>
            </header>
            {showMenu && <HamMenu showMenu={showMenu} setShowMenu={setShowMenu}/>}





        </div>

    )
}
const LargeScreenHeader = ({ cartProducts }) => {
    return (
        <div className="z-10">

            <header>

                <nav className='flex space-x-4 items-center mx-auto  translate-x-3 tracking-wider font-thin text-lg'>


                    <NavLink to="/" className=''><img src={logo} alt='sarus' className='hover:animate-bounce-once ml-4 mt-2 sm:h-14 md:h-14 lg:h-16 h-10 lg:w-48 sm:w-40 w-28 md:w-40 '></img></NavLink>
                    <NavLink to="categories" className='lg:pl-ml-2 pl-4 mt-2 font-thin text-xl hover:text-slate-400'>Category</NavLink>
                    <form action="" className=' rounded-md relative lg:pl-12 xl:pl-24 md:pl-12 pl-10 pt-3 '>

                        <input
                            type="text"
                            placeholder="What are you lookin for? "
                            className=" xl:w-[29rem] lg:w-[20rem] md:w-72 sm:w-52 border-2 mt-2  font-extralight text-[15px] pl-7 mr-4 p-2 ml-1 rounded-xl text-md focus:outline-none  focus:ring-1 focus:ring-stone-text-slate-400 hover:shadow-md bg-white  tracking-normal "
                        // onKeyUp={}
                        />



                    </form>


                    <ul className="absolute xl:right-24 lg:right-12 mt-3 md:right-12 flex xl:space-x-5 lg:space-x-4 space-x-4  items-center font-thin text-lg   ">
                        <NavLink to="login" className='hover:text-slate-400'>Login</NavLink>
                        <p>|</p>
                        <NavLink to="signup" className='hover:text-slate-400'>Signup</NavLink>
                        <NavLink to="cart" className={cartProducts.length > 0 ? `flex text-green-600` : `flex`}><CiShoppingCart className='text-3xl ' /> {cartProducts.length}</NavLink>
                        <NavLink to="contact" className='hover:text-slate-400'>contact</NavLink>

                    </ul>

                </nav>

            </header>
        </div>

    )
}

export default Header
