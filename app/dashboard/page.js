import React from 'react'

import { Poppins } from 'next/font/google';
import Image from 'next/image';

import calendarImg from "../assets/imagesource/calendar_img.png";
import beginner_level_icon from "../assets/imagesource/beginner_level_icon.png";
import Student_Score_graph from "../assets/imagesource/Student_Score_graph.png";
import Link from 'next/link';
import { Progress, Select } from 'flowbite-react';

import { BiSolidChess } from "react-icons/bi";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { BiSolidUpArrow } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { BiSolidFolderMinus } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiSolidBookBookmark } from "react-icons/bi";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const page = () => {
  return (
    <div className='${Poppins.className}'>
      <div className='flex gap-4'>
        <div className='w-7/12 gap-4'>
           <div className='flex gap-4 mb-4'>
              <div className='w-7/12 bg-[#FFFFFF] rounded-[10px] py-4 px-6'>
                <h3 className='${Poppins.className} text-black text-2xl font-semibold mb-3'>Attacking Opening Types</h3>
                <div className='mb-3'>
                  <ul className='flex justify-between items-center'>
                     <li className='${Poppins.className} text-[#686868] text-sm font-normal flex items-center gap-1'><FaClock className='text-[#FF5E5E] text-xl'/> 1 hr 40 mins</li>
                     <li className='${Poppins.className} text-[#686868] text-sm font-normal flex items-center gap-1'><IoMdListBox className='text-[#FFC75E] text-xl'/> 8 Chapters</li>
                     <li className='${Poppins.className} text-[#686868] text-sm font-normal flex items-center gap-1'><BiSolidFolderMinus className='text-[#FF7F5E] text-xl'/> Assignments</li>
                  </ul>
                </div>
                <div className='mb-5'>
                  <div className='flex justify-between items-center mb-2'>
                    <p className='${Poppins.className} text-[#686868] text-base leading-[22px] font-normal'>Course Complete</p>
                    <span className='${Poppins.className} text-black text-[14px] leading-[22px] font-semibold'>40%</span>
                  </div>
                  <div className='mb-2'>
                    <Progress progress={45} size="md" />
                  </div>
                </div>
                <div className='block'>
                  <Link className='border border-[#34A0A4] rounded-full w-full py-3 px-5 text-[#34A0A4] text-base font-medium hover:bg-black inline-flex justify-between items-center' href="/" passHref>Continue Learning <BsFillPlayFill className='text-xl' /></Link>
                </div>
              </div>
              <div className='w-5/12 bg-[#FFFFFF] rounded-[10px] py-4 px-6'>
                <div className='flex justify-between items-center mb-4'>
                  <h3 className='${Poppins.className} text-black text-xl font-semibold mb-3'>Progress</h3>
                  <div className='month_select'>
                    <Select>
                      <option>Month</option>
                      <option>Jan</option>
                      <option>Feb</option>
                      <option>Mar</option>
                    </Select>
                  </div>
                </div>
                <div>
                  <div className='flex items-center mb-4 gap-2'>
                    <div><FaClock className='text-[#FF5E5E] text-xl'/></div>
                    <div>
                      <p className='${Poppins.className} text-black text-sm leading-[18px] font-medium'>40 hours</p>
                      <span className='${Poppins.className} text-[#686868] text-[9px] leading-[12px] font-medium block'>Time Spend</span>
                    </div>
                  </div>
                  <div className='flex items-center mb-4 gap-2'>
                    <div><AiFillCheckCircle className='text-[#FF5E5E] text-xl'/></div>
                    <div>
                      <p className='${Poppins.className} text-black text-sm leading-[18px] font-medium'>1 course</p>
                      <span className='${Poppins.className} text-[#686868] text-[9px] leading-[12px] font-medium block'>Completed</span>
                    </div>
                  </div>
                  <div className='flex items-center mb-4 gap-2'>
                    <div><BiSolidBookBookmark className='text-[#FF5E5E] text-xl'/></div>
                    <div>
                      <p className='${Poppins.className} text-black text-sm leading-[18px] font-medium'>02 course</p>
                      <span className='${Poppins.className} text-[#686868] text-[9px] leading-[12px] font-medium block'>Enrolled</span>
                    </div>
                  </div>
                </div>
              </div>
           </div>
           <div className='bg-[#FFFFFF] rounded-[10px]'>
             <Image src={calendarImg} alt="calendarImg" className='' />
           </div>
        </div>
        <div className='w-5/12'>
          <div className='checkmate_section'>
            <h3 className='text-[30px] leading-[40px] text-black font-semibold mb-2 ${Poppins.className}'>Checkmate in Sight: Can You Find the Winning Move?</h3>
            <p className='text-[#2F2D2D] text-base leading-[22px] ${Poppins.className} mb-6'>Get ready to sharpen your mind! This chess puzzle promises an exciting journey of strategy and skill—each move could transform the way you see the game</p>
            <Link className="text-white inline-block bg-[#52B69A] font-medium text-xs lg:text-base rounded-[10px] px-3 py-2 lg:px-7 lg:py-2 border-2 border-[#52B69A] hover:bg-white hover:text-[#52B69A]" href="/" passHref>Learn More</Link>
          </div>
          <div className='bg-[#FFFFFF] rounded-[10px] py-4 px-6 mb-4'>
             <div className='flex justify-between items-center mb-4'>
                <h3 className='${Poppins.className} text-black text-[22px] leading-[25px] font-medium'>Assignment Progress</h3>
                <div className='flex items-center justify-center gap-2'>
                  <Image src={beginner_level_icon} alt="beginner_level_icon" className='' />
                  <p className='${Poppins.className} text-[#34A0A4] text-base leading-[22px] font-normal'>Beginner Level</p>
                </div>
             </div>
             <div>
                <div className='flex justify-between items-center mb-2'>
                  <p className='${Poppins.className} text-[#686868] text-base leading-[22px] font-normal'>Checkmate in 10 moves</p>
                  <span className='${Poppins.className} text-[#168AAD] text-[14px] leading-[22px] font-semibold'>30%</span>
                </div>
                <div className='mb-2'>
                  <Progress progress={45} size="md" />
                </div>
                <div>
                  <ul className='flex items-center gap-2'>
                    <li className='flex items-center'>
                      <Link className='text-[#52B69A] text-sm font-medium ${Poppins.className} hover:text-black flex items-center gap-1' href="/" passHref><BiSolidChess className='text-xl' /> Open PGN</Link>
                    </li>
                    <li className='flex items-center'>
                      <Link className='text-[#52B69A] text-sm font-medium ${Poppins.className} hover:text-black flex items-center gap-1' href="/" passHref><BsFileEarmarkPdfFill className='text-xl' /> Download Pdf</Link>
                    </li>
                  </ul>
                </div>
             </div>
          </div>
          <div className='bg-[#FFFFFF] rounded-[10px] py-4 px-6'>
             <div className='flex'>
                <div className='w-6/12 mb-4'>
                    <h3 className='${Poppins.className} text-black text-[22px] leading-[25px] font-medium'>Learning Progress</h3>
                    <div className='mt-16'>
                      <div className='bg-[#F6FFF9] rounded-full gap-1 px-5 py-2 inline-flex items-center'>
                        <p className='${Poppins.className} text-[#76C893] text-sm leading-[22px] font-normal'>11.5%</p>
                        <BiSolidUpArrow className='text-[#76C893] text-xs' />
                      </div>
                      <p className='${Poppins.className} text-[#686868] text-base leading-[22px] font-normal'>Compared to last month</p>
                    </div>
                </div>
                <div className='w-6/12 relative'>
                  <Image src={Student_Score_graph} alt="Student_Score_graph" className='' />
                  <div className='text-center absolute left-0 bottom-[30px] w-full'>
                    <h3 className='${Poppins.className} text-[#52B69A] text-[45px] leading-[50px] font-semibold'>60%</h3>
                    <p className='${Poppins.className} text-[#686868] text-base leading-[22px] font-medium'>Student Score : 2489</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page