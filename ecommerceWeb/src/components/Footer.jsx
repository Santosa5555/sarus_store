import React from 'react'

import logo from '../assets/logoecom.png'
import esewaLogo from "../assets/footer-images/esewa.png";
import khaltiLogo from "../assets/footer-images/khalti-logo.png";
import masterCardLogo from "../assets/footer-images/mastercard-logo.png";
import visaLogo from "../assets/footer-images/Visa-Logo.png";
import paypalLogo from "../assets/footer-images/paypal-logo.png";
import imepayLogo from "../assets/footer-images/imepay-logo.png";


const Footer = () => {
    const logos = [
        { url: esewaLogo, alt: "ESEWA" },
        { url: khaltiLogo, alt: "KHALTI" },
        { url: masterCardLogo, alt: "MASTERCARD" },
        { url: visaLogo, alt: "VISA" },
        { url: paypalLogo, alt: "PAYPAL" },
        { url: imepayLogo, alt: "IMEPAY" },
      ];
  return (
    <div className="grid grid-cols-3">
    <div className="gap-5 mt-5 flex flex-col ml-8">
      <img
        src={logo}
        alt="sarus"
        className="hover:animate-bounce-once ml-4 mt-2 sm:h-8 md:h-9 lg:h-14 h-5 lg:w-40 sm:w-32 w-20 md:w-40"
      />
      <ul className="ml-10 text-lg font-lato flex flex-col gap-4 ">
        < li className='hover:text-white cursor-pointer'>About us</ li >
        < li className='hover:text-white cursor-pointer'>Contact us</ li >
        < li className='hover:text-white cursor-pointer'>Terms and Condition</ li>
        < li className='hover:text-white cursor-pointer'>Privacy Policy</ li>
      </ul>
    </div>
    <div className="flex flex-col mt-8">
      <h1 className="text-xl font-bold mb-5">Payment Methods</h1>
      <div className="flex flex-wrap gap-4">
        {logos.map((logo, index) => (
          <img
            src={logo.url}
            alt={logo.alt}
            className="h-10 w-16 bg-white"
            key={index}
          />
        ))}
      </div>
    </div>
  </div>
);
};

 

export default Footer
