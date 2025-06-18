"use client";
import Image from 'next/image'
import React from 'react'

import userFace from "../assets/imagesource/user_face.png";

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const Insideheader = () => {
  return (
    <div className='bg-[#FFFFFF] rounded-[10px] py-4 px-6 mb-6'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-2xl font-semibold text-[#313030] ${plusJakartaSans.className} mb-1'>Welcome 👋 </h1>
          <p className='text-base text-[#686868] ${Poppins.className}'>Let&apos;s Learn something new today</p>
        </div>
        <div>
          <div className='user_face'>
            <Image src={userFace} alt="userFace" className='rounded-[4px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insideheader