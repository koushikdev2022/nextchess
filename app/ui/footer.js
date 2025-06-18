import React from 'react'

import { Roboto } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

import footerLogo from "../assets/imagesource/footer_logo.png";
import Image from 'next/image';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['700'], // optional: define font weights
  variable: '--font-roboto', // optional: for CSS variables
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const Footer = () => {
  return (
    <div className='bg-[#DAE6DF]'>
      <div className='footer_top py-10'>
        <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
          <div className='lg:flex lg:gap-8'>
            <div className='lg:w-4/12 mb-6 lg:mb-0'>
              <Image src={footerLogo} alt='footerLogo' className='mb-8' />
              <div className='social_section'>
                <ul className='flex gap-3'>
                  <li>
                    <Link className='bg-[#B5E48C] hover:bg-white text-[#2264AA] hover:text-black text-2xl flex justify-center items-center w-[48px] h-[48px] rounded-full' href="/" passHref>
                      <BiLogoLinkedin />
                    </Link>
                  </li>
                  <li>
                    <Link className='bg-[#B5E48C] hover:bg-white text-[#2264AA] hover:text-black text-2xl flex justify-center items-center w-[48px] h-[48px] rounded-full' href="/" passHref>
                      <BiLogoFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link className='bg-[#B5E48C] hover:bg-white text-[#2264AA] hover:text-black text-2xl flex justify-center items-center w-[48px] h-[48px] rounded-full' href="/" passHref>
                      <AiFillInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link className='bg-[#B5E48C] hover:bg-white text-[#2264AA] hover:text-black text-xl flex justify-center items-center w-[48px] h-[48px] rounded-full' href="/" passHref>
                      <BsYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link className='bg-[#B5E48C] hover:bg-white text-[#2264AA] hover:text-black text-xl flex justify-center items-center w-[48px] h-[48px] rounded-full' href="/" passHref>
                      <BsTwitterX />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='lg:w-4/12 mb-6 lg:mb-0'>
              <h3 className='text-[#1A759F] text-[22px] leading-[22px] pb-5 font-bold ${plusJakartaSans.className}'>Quick Links</h3>
              <ul>
                <li>
                  <Link className='text-[14px] w-4/12 text-[#5E5A5A] hover:text-[#1A759F] font-semibold mr-4 mb-2.5 ${plusJakartaSans.className} float-left' href="/" passHref>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className='text-[14px] w-4/12 text-[#5E5A5A] hover:text-[#1A759F] font-semibold mr-4 mb-2.5 ${plusJakartaSans.className} float-left' href="/" passHref>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className='text-[14px] w-4/12 text-[#5E5A5A] hover:text-[#1A759F] font-semibold mr-4 mb-2.5 ${plusJakartaSans.className} float-left' href="/" passHref>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className='text-[14px] w-6/12 text-[#5E5A5A] hover:text-[#1A759F] font-semibold mr-4 mb-2.5 ${plusJakartaSans.className} float-left' href="/" passHref>
                    Register for Demo Class
                  </Link>
                </li>
                <li>
                  <Link className='text-[14px] w-4/12 text-[#5E5A5A] hover:text-[#1A759F] font-semibold mr-4 mb-2.5 ${plusJakartaSans.className} float-left' href="/" passHref>
                    Courses
                  </Link>
                </li>
                <li>
                  <Link className='text-[14px] w-7/12 text-[#5E5A5A] hover:text-[#1A759F] font-semibold mr-0 mb-2.5 ${plusJakartaSans.className} float-left' href="/" passHref>
                    Cancellation & Refund Policy
                  </Link>
                </li>
                <li>
                  <Link className='text-[14px] w-4/12 text-[#5E5A5A] hover:text-[#1A759F] font-semibold mr-4 mb-2.5 ${plusJakartaSans.className} float-left' href="/" passHref>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className='lg:w-4/12 clear-both'>
              <h3 className='text-[#1A759F] text-[22px] leading-[22px] pb-5 font-bold ${plusJakartaSans.className}'>Contact Us</h3>
              <div className='flex items-start mb-4'>
                <div>
                  <IoLocationSharp className='text-[#52B69A] text-2xl mr-1' />
                </div>
                <div>
                  <h4 className='text-base text-[#5E5A5A] font-semibold ${plusJakartaSans.className} pb-0.5'>Address</h4>
                  <p className='text-xs text-[#000000] font-normal ${plusJakartaSans.className}'>83, S P Mukherjee Road, Kolkata-700026</p>
                </div>
              </div>
              <div className='flex items-start mb-4'>
                <div>
                  <FaEnvelope className='text-[#52B69A] text-xl mr-1' />
                </div>
                <div>
                  <h4 className='text-base text-[#5E5A5A] font-semibold ${plusJakartaSans.className} pb-0.5'>Email</h4>
                  <p className='text-xs text-[#000000] font-normal ${plusJakartaSans.className}'>contact@c4chess.com</p>
                </div>
              </div>
              <div className='flex items-start mb-4'>
                <div>
                  <MdPhone className='text-[#52B69A] text-2xl mr-1' />
                </div>
                <div>
                  <h4 className='text-base text-[#5E5A5A] font-semibold ${plusJakartaSans.className} pb-0.5'>Phone Number</h4>
                  <p className='text-xs text-[#000000] font-normal ${plusJakartaSans.className}'>+91 9330378911</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer_bottom border-t-2 border-[#aeb4b0] py-3'>
        <div className="max-w-6xl mx-auto py-2 text-center">
          <p className='text-[15px] font-medium ${plusJakartaSans.className}'>Copyright © 2025 C4Chess | Designed by <span className='font-bold'>Iksen India Ptv. Ltd.</span></p>
        </div>
      </div>
    </div>
  )
}

export default Footer