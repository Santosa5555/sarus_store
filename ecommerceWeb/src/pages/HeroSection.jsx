import React, { useEffect, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion, useScroll } from "framer-motion"
import { banners } from '../components/banner'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom';
import { HiChevronDown } from "react-icons/hi2";
import HeroListProducts from '../components/products/HeroListProducts';
import { MdArrowForwardIos } from "react-icons/md";
import Footer from '../components/Footer';


export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0) //banner sliden

    useEffect(() => {
        const interval = setInterval(() => {

            setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));


        }, 5000);

        return () => clearInterval(interval)

    }, [])
    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
            // once: true, 
            mirror: false,
            // anchorPlacement: 'top-bottom' 

        })

    }, [])
    return (

        <div className="hero-section">
            <motion.div className="text-center tracking-wide text-[#393E46] text-sm md:text-xl lg:text-6xl sm:text-lg  font-display bg-[#fffcf5]   border-slate-200 pb-2"
             initial={{ y: 0 }} animate={{ y: -8 }} transition={{ duration: 1 }}>"Authentic. Nepali. Yours."</motion.div>
            {/* banner */}
            <motion.div className="banner-container flex mx-auto relative border-2 lg:h-72 md:h-64 xl:h-80 sm:h-40 h-20 xl:w-[calc(100%-400px)] 
             lg:w-[calc(100%-300px)] md:w-[calc(100%-200px)] sm:w-[calc(100%-100px)] w-[calc(100%-50px)] overflow-hidden mt-4" 
             initial={{ y: 0 }} animate={{ y: 4 }} transition={{ duration: 1 }}>
                {banners.map((banner) => (
                    <div key={banner.id} className={currentSlide === banner.id - 1 ? 'absolute outline-none opacity-100 hover:brightness-105h-80 w-[100%]' : ' opacity-0 absolute border-2w-[calc(100%-200px)]'}>
                        <img src={banner.imageUrl} alt={banner.altText} className='w-full  object-cover min-w-[100%] max-w-xs sm:max-w-sm md:max-w-md ' />
                    </div>



                ))}

                {/* Navigation buttons */}
                <button className="absolute left-0 top-[50%] text-white" onClick={() => setCurrentSlide(currentSlide === 0 ? banners.length - 1 : currentSlide - 1)}>
                    <IoIosArrowBack size={30} />
                </button>
                <button className="absolute right-0 top-[50%] text-white" onClick={() => setCurrentSlide(currentSlide === banners.length - 1 ? 0 : currentSlide + 1)}>
                    <IoIosArrowForward size={30} />
                </button>
            </motion.div>


            {/* //categories */}
            <div className="categories mt-[93px] shadow-lg bg-[#fffcf5] ml-36 mr-36 xl:h-[53rem] lg:h-[51rem] md:h-[47rem] sm:h-[38rem] xs:h-[28rem] h-[27rem] relative flex flex-col  items-center">

                <p className='text-center font-thin tracking-[0.2em] animate-bounce sm:text-sm md:text-lg lg:text-xl xl:text-xl text-[8px] mt-3'>CATEGORIES </p>
                <HiChevronDown className='animate-bounce' />
                <div className="categoyGrid grid grid-cols-4 gap-0  lg:mx-auto md:ml-36 sm:ml-20 xs:ml-16 xss:ml-12 xs:mx-auto mt-12   ">
                    <NavLink to="product1/fashion" className=" 
                    relative before:content-[attr(data-tip)]
                    before:opacity-0
                    hover:before:opacity-100
                    
                    " data-tip="fashion"><img src='./categories/wardrobe.png' className='w-10 sm:w-12 md:w-16 lg:w-20 xl:w-20 hover:brightness-50' data-aos="zoom-in" data-aos-delay="600" data-aos-once="true" /></NavLink>

                    <NavLink 
                    to="product1/home&kitchen"
                    className=" 
                    relative before:content-[attr(data-tip)] 
                    before:opacity-0
                    hover:before:opacity-100"
                    data-tip="Home&Kitchen"
                    
                    ><img src='./categories/home&kitchen.png' className='w-10 sm:w-12 md:w-16 lg:w-20  hover:brightness-50 ' data-aos="zoom-in" data-aos-delay="600" data-aos-once="true" /></NavLink>

                    <NavLink 
                    to="product1/electronics"
                    data-tip="Electronics/gadgets"
                    className=" 
                    relative before:content-[attr(data-tip)] block
                    before:opacity-0
                    hover:before:opacity-100"
                    
                    
                    ><img src='./categories/electronics.png' className='w-10 sm:w-12 md:w-16 xl:w-20 lg:w-20 hover:brightness-50 ' data-aos="zoom-in " data-aos-delay="600" data-aos-once="true" /></NavLink>

                    <NavLink to="product1/arts&crafts"
                      data-tip="arts&crafts"
                      className=" 
                      relative before:content-[attr(data-tip)]
                      before:opacity-0
                    hover:before:opacity-100 "
                     
                     ><img src='./categories/porcelain.png' className='w-10 sm:w-12 xl:w-20 md:w-16 lg:w-20 hover:brightness-50 ' data-aos="zoom" data-aos-delay="600" data-aos-once="true" /></NavLink>

                    <NavLink to="product1/beauty"
                     data-tip="Beauty"
                     className=" 
                     relative before:content-[attr(data-tip)]
                     before:opacity-0
                    hover:before:opacity-100"
                    
                    ><img src='./categories/beauty.png' className=' w-10 sm:w-12 xl:w-20 md:w-16 lg:w-20 hover:brightness-50 ' data-aos="zoom-in" data-aos-delay="600" data-aos-once="true" /></NavLink>

                    <NavLink to="product1/sports" 
                     data-tip="Sports"
                     className=" 
                     relative before:content-[attr(data-tip)]
                     before:opacity-0
                    hover:before:opacity-100"
                    
                    ><img src='./categories/sports.png' className=' w-10 sm:w-12 xl:w-20 md:w-16 lg:w-20 hover:brightness-50 ' data-aos="fade-down" data-aos-delay="600" data-aos-once="true" /></NavLink>

                    <NavLink to="product1/furniture"
                     data-tip="Furniture"
                     className=" 
                     relative before:content-[attr(data-tip)]
                     before:opacity-0
                    hover:before:opacity-100"
                    ><img src='./categories/furnitures.png' className=' w-10 sm:w-12 md:w-16 xl:w-20 lg:w-20 hover:brightness-50 ' data-aos="fade-down" data-aos-delay="600" data-aos-once="true" /></NavLink>

                    <NavLink to="product1/grocery"
                     data-tip="grocery"
                     className=" 
                     relative before:content-[attr(data-tip)]
                     before:opacity-0
                    hover:before:opacity-100"
                    ><img src='./categories/grocery.png' className=' w-10 sm:w-12 md:w-16 xl:w-20 lg:w-20 hover:brightness-50 ' data-aos="zoom-in" data-aos-delay="600" data-aos-once="true" /></NavLink>
                    {/* <NavLink to="grocery"className='col-start-2 col-end-4 '><img src='./categories/gift.png' className='opacity-5 z--1 w-10 sm:w-12 md:w-20  lg:w-28  ' data-aos="fade-up"  /></NavLink> */}
                    {/* <NavLink to="travels" className=''><img src='./categories/travels.png' className=' w-20 sm:w-12 md:w-16 lg:w-20'/></NavLink> */}


                </div>




                <img src='./cartEcom2.png' alt='cart'
                    className=' absolute bottom-1 max-w-[15rem] xs-[22rem]  sm:max-w-sm xs:max-w-[16rem] md:max-w-[32rem] lg:max-w-[35rem] xl:max-w-xl xl:h-[35rem] mx-auto lg:mr-20'
                    data-aos="fade-up"
                />

            </div>
            {/* for you */}
            <div className="mt-32 border-t-4 ml-10 mr-10 ">
                <h1 className='flex text-3xl font-sans text-white ml-24 mb-4 pl-5 font-bold bg-[#FFF8F3]
                
                bg-gradient-to-r from-slate-600 via-white to-white animate-gradient-x  border-t-2 rounded-lg 
                
                mr-20 relative'data-aos="zoom-in-out" ><p data-aos="fade-in-out"> For You</p><MdArrowForwardIos className='absolute right-2 '/></h1>



            <HeroListProducts/>
            

            </div>
            {/* top or for you or feature or  */}
             


             {/* footer */}
            <div className="footer border-t-2 bg-stone-400 mt-24 h-[25rem]">
               <Footer/>


            </div>




        </div>




    )
}
