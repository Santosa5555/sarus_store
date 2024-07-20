import React, { useEffect, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion, useScroll } from "framer-motion"
import { banners } from '../components/banner'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0) //banner sliden

    useEffect(() => {
        const interval = setInterval(() => {

            setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));


        }, 5000);

        return () => clearInterval(interval)

    }, [])
    useEffect(() => {
        Aos.init({ duration: 1000 })

    }, [])
    return (

        <div className="hero-section">
            {/* banner */}
            <div className="banner-container flex ml-48 relative border-2 h-80 w-[calc(100%-400px)] overflow-hidden " data-aos="fade-up">
                {banners.map((banner) => (
                    <div key={banner.id} className={currentSlide === banner.id - 1 ? 'absolute outline-none opacity-100 hover:brightness-105h-80 w-[100%]' : ' opacity-0 absolute border-2w-[calc(100%-200px)]'}>
                        <img src={banner.imageUrl} alt={banner.altText} className='w-full  object-cover min-w-[100%] ' />
                    </div>



                ))}

            {/* Navigation buttons */}
                <button className="absolute left-0 top-[50%] text-white" onClick={() => setCurrentSlide(currentSlide === 0 ? banners.length - 1 : currentSlide - 1)}>
                    <IoIosArrowBack size={30} />
                </button>
                <button className="absolute right-0 top-[50%] text-white" onClick={() => setCurrentSlide(currentSlide === banners.length - 1 ? 0 : currentSlide + 1)}>
                    <IoIosArrowForward size={30} />
                </button>
            </div>



        </div>




    )
}
