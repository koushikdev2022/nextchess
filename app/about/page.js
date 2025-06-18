import Link from 'next/link'
import React from 'react'

import manabiChouhan from "../assets/imagesource/manabi_chouhan.jpg";
import aboutBanner from "../assets/imagesource/about_banner.png";
import Image from 'next/image';

const page = () => {
  return (
    <div>
      <div className='banner_area'>
        <div className="max-w-6xl mx-auto lg:py-4">
          <div className='banner_area_section'>
            <Image src={aboutBanner} alt='aboutBanner' className="" />
            <h1 className="text-[#0B0B2C] text-3xl lg:text-[60px] lg:leading-[63px] font-extrabold capitalize pb-4 ${plusJakartaSans.className}">About <span className="text-[#52B69A]">us</span></h1>
          </div>
        </div>
      </div>
      {/* Why Choose Us section start here */}
      <div className="about_section">
        <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
          <div className="lg:flex">
            <div className="w-6/12">
              <Image src={manabiChouhan} alt='manabiChouhan' className="" />
            </div>
            <div className="lg:w-6/12 lg:pl-10">
              <h2 className="text-[#0B0B2C] text-3xl lg:text-[40px] lg:leading-[50px] font-extrabold capitalize pb-4 ${plusJakartaSans.className}">Manabi Chouhan: <span className="text-[#52B69A]">Founder & CEO</span></h2>
              <p className="text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}">Manabi Chouhan is a distinguished chess coach and the visionary Founder & CEO of C4Chess Academy. With over a decade of experience in the chess coaching industry, Manabi has honed her skills and developed a deep understanding of the game, which she passionately imparts to her students.</p>
              <p className="text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-8 ${plusJakartaSans.className}">Under her expert guidance, thousands of students from diverse countries, including the USA, UK, Australia, and UAE, have enhanced their chess skills and strategic thinking. Her commitment to fostering talent and promoting the intellectual growth of her students has made her a respected figure in the chess community.</p>
              <p className="text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-8 ${plusJakartaSans.className}">Manabi&apos;s leadership and dedication continue to drive the company&apos;s mission to nurture and develop the next generation of chess champions.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us section ends here */}
    </div>
  )
}

export default page