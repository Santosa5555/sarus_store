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
            <motion.div className="text-center text-sm md:text-lg lg:text-xl font-sans sm:text-sm font-thin tracking-wide pb-2"
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
            <div className="categories mt-24  bg-[#fffcf5] ml-20 mr-20 xl:h-[53rem] lg:h-[49rem] md:h-[46rem] h-[32rem] sm:h-[39rem] relative flex flex-col  items-center">

                <p className='text-center font-thin tracking-[0.2em] animate-bounce sm:text-sm md:text-lg lg:text-xl xl:text-xl text-[8px] mt-4'>CATEGORIES </p>
                <HiChevronDown className='animate-bounce' />
                <div className="categoyGrid grid grid-cols-4 gap-11 mt-12 ">
                    <NavLink to="fashion"><img src='./categories/wardrobe.png' className='w-10 sm:w-12 md:w-16 lg:w-20 xl:w-20 hover:brightness-50 ' data-aos="zoom-in" data-aos-delay="600" data-aos-once="true" /></NavLink>
                    <NavLink to="home&kitchen"><img src='./categories/home&kitchen.png' className='w-10 sm:w-12 md:w-16 lg:w-20  hover:brightness-50 ' data-aos="zoom-in" data-aos-delay="600" data-aos-once="true" /></NavLink>
                    <NavLink to="electronics"><img src='./categories/electronics.png' className='w-10 sm:w-12 md:w-16 xl:w-20 lg:w-20 hover:brightness-50 ' data-aos="zoom-in " data-aos-delay="600" data-aos-once="true" /></NavLink>
                    <NavLink to="arts&crafts" className=''><img src='./categories/porcelain.png' className='w-10 sm:w-12 xl:w-20 md:w-16 lg:w-20 hover:brightness-50 ' data-aos="zoom" data-aos-delay="600" data-aos-once="true" /></NavLink>
                    <NavLink to="beauty" className=''><img src='./categories/beauty.png' className=' w-10 sm:w-12 xl:w-20 md:w-16 lg:w-20 hover:brightness-50 ' data-aos="zoom-in" data-aos-delay="600" data-aos-once="true" /></NavLink>
                    <NavLink to="sports" className=''><img src='./categories/sports.png' className=' w-10 sm:w-12 xl:w-20 md:w-16 lg:w-20 hover:brightness-50 ' data-aos="fade-down" data-aos-delay="600" data-aos-once="true" /></NavLink>
                    <NavLink to="furniture"><img src='./categories/furnitures.png' className=' w-10 sm:w-12 md:w-16 xl:w-20 lg:w-20 hover:brightness-50 ' data-aos="fade-down" data-aos-delay="600" data-aos-once="true" /></NavLink>
                    <NavLink to="grocery"><img src='./categories/grocery.png' className=' w-10 sm:w-12 md:w-16 xl:w-20 lg:w-20 hover:brightness-50 ' data-aos="zoom-in" data-aos-delay="600" data-aos-once="true" /></NavLink>
                    <NavLink to="grocery"className='col-start-2 col-end-4 '><img src='./categories/gift.png' className='opacity-5 z--1 w-10 sm:w-12 md:w-20  lg:w-28 hover:brightness-50 ' data-aos="fade-up"  /></NavLink>
                    {/* <NavLink to="travels" className=''><img src='./categories/travels.png' className=' w-20 sm:w-12 md:w-16 lg:w-20'/></NavLink> */}


                </div>




                <img src='./cartEcom.png' alt='cart'
                    className=' absolute bottom-1 max-w-[15rem] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'
                    data-aos="fade-up"
                />






            </div>
            {/* top or for you or feature or  */}




        </div>




    )
}
