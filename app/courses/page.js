import Link from 'next/link'
import React from 'react'

import manabiChouhan from "../assets/imagesource/manabi_chouhan.jpg";
import ourcourseBanner from "../assets/imagesource/ourcourse_banner.png";
import groupClass from "../assets/imagesource/Group-class.png";
import girlPic from "../assets/imagesource/girl_pic.jpg";
import certificateCompletion from "../assets/imagesource/certificate_completion.png";
import c4chess_certificate from "../assets/imagesource/c4chess_certificate.jpg";
import Image from 'next/image';

const courses = () => {
  return (
    <div>
      <div className='banner_area'>
        <div className="max-w-6xl mx-auto lg:py-4">
          <div className='banner_area_section'>
              <Image src={ourcourseBanner} alt='ourcourseBanner' className="" />
              <h1 className="text-white text-3xl lg:text-[60px] lg:leading-[63px] font-extrabold capitalize pb-4 ${plusJakartaSans.className}">Our <span className="text-[#52B69A]">Courses</span></h1>
          </div>
        </div>
      </div>
      {/* Why Choose Us section start here */}
      <div className="courses_section_top">
          <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
              <div className="lg:flex">
                 <div className="w-6/12">
                   <Image src={groupClass} alt='groupClass' className="" />
                 </div>
                 <div className="lg:w-6/12 lg:pl-10">
                   <h2 className="text-[#0B0B2C] text-3xl lg:text-[40px] lg:leading-[50px] font-extrabold capitalize pb-4 ${plusJakartaSans.className}">The Group Chess Class</h2>
                   <p className="text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}">Our group chess classes are interactive live sessions where the instructor introduces a chess concept and assigns a corresponding practice task. Students then present their understanding, apply the concept, and ask questions.</p>
                   <p className="text-[#52b69a] text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-5 ${plusJakartaSans.className} font-bold">Learn. Compete. Grow—Together.</p>
                   <div className='mb-5'>
                        <ul>
                          <li className='text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}'>🧑‍🤝‍🧑 Interactive Group Sessions: Learn alongside peers for an engaging experience</li>
                          <li className='text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}'>♟️ Level-Based Batches: Students are grouped by skill level for focused learning</li>
                          <li className='text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}'>🧩 Concept Reinforcement: Regular practice games, puzzles, and live discussions</li>
                          <li className='text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}'>🧑‍🏫 Coach-Led Strategy Sessions: Learn patterns, plans, and tricks with expert guidance</li>
                          <li className='text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}'>❎ Doubt Solving: Real-time Q&A and personalized attention within group setting</li>
                          <li className='text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}'>🏅 Peer Motivation: Competitive yet supportive environment to inspire growth</li>
                          <li className='text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}'>💰 Affordable Learning: Quality coaching at a lower cost per session</li>
                        </ul>
                    </div>
                   <Link className="text-white bg-[#52B69A] font-medium text-xs lg:text-base rounded-[2px] px-3 py-2 lg:px-9 lg:py-3 border-2 border-[#52B69A] hover:bg-white hover:text-[#52B69A]" href="/" passHref>Enroll Now</Link>
                 </div>
              </div>
          </div>
       </div>
       {/* Why Choose Us section ends here */}
       {/* Why Choose Us section start here */}
      <div className="courses_section_top bg-[#f8f8ff]">
          <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
              <div className="lg:flex">
                 <div className="lg:w-6/12 lg:pr-10">
                   <h2 className="text-[#0B0B2C] text-3xl lg:text-[40px] lg:leading-[50px] font-extrabold capitalize pb-4 ${plusJakartaSans.className}">The Private Chess Class</h2>
                   <div className='mb-5'>
                      <p className="text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-8 ${plusJakartaSans.className}">1-on-1 coaching for focused growth and rapid improvement</p>
                      <ul>
                        <li className='text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}'>🎯 Fully Personalized: Lessons tailored to the student’s level, goals, and learning speed</li>
                        <li className='text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}'>🧑‍🏫 Expert Coaches: Learn from FIDE-rated, experienced professionals</li>
                        <li className='text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}'>📊 Progress Tracking: Regular assessments and feedback to monitor improvement</li>
                        <li className='text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}'>♟️ Game Analysis: Detailed reviews of student’s games to fix mistakes and build strategy</li>
                        <li className='text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}'>🧠 Deep Concept Clarity: In-depth explanation of tactics, openings, and endgames</li>
                        <li className='text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}'>🕒 Flexible Scheduling: Classes available at convenient times across time zones</li>
                        <li className='text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}'>🏆 Tournament Prep Support: Special focus on performance in real competitions</li>
                      </ul>
                  </div>
                   <Link className="text-white bg-[#52B69A] font-medium text-xs lg:text-base rounded-[2px] px-3 py-2 lg:px-9 lg:py-3 border-2 border-[#52B69A] hover:bg-white hover:text-[#52B69A]" href="/" passHref>Enroll Now</Link>
                 </div>

                 <div className="w-6/12">
                   <Image src={girlPic} alt='girlPic' className="" />
                 </div>
              </div>
          </div>
       </div>
       {/* Why Choose Us section ends here */}
       {/* Why Choose Us section start here */}
       <div className="certificate_completion_sec">
          <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
              <div className="lg:flex">
                 <div className="w-6/12">
                   <Image src={c4chess_certificate} alt='c4chess_certificate' className="" />
                 </div>
                 <div className="lg:w-6/12 lg:pl-10 flex justify-center items-center">
                   <div>
                     <h2 className="text-[#0B0B2C] text-3xl lg:text-[40px] lg:leading-[50px] font-extrabold capitalize pb-4 ${plusJakartaSans.className}">Certificate of completion</h2>
                     <p className="text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}">Students will be provided level completion cortificate after finishing each level.</p>
                   </div>
                 </div>
              </div>
          </div>
       </div>
       {/* Why Choose Us section ends here */}
      {/* Trial class section start here */}
        <div className="trial_class_section">
          <div className="max-w-6xl mx-auto lg:py-0 px-4 lg:px-0">
              <div className="lg:flex">
                 <div className="lg:w-6/12 pl-0 mb-8">
                    <h2 className="text-white text-3xl lg:text-[46px] lg:leading-[50px] font-bold pb-4 ${plusJakartaSans.className}">Demo Class</h2>
                    <p className="text-[#8896AB] font-medium text-base lg:text-[18px] leading-[28px] pb-0 ${plusJakartaSans.className}">Test our teaching process.
                    Experience our innovative approach to learning</p>
                 </div>
                 <div className="lg:w-6/12 flex justify-center lg:justify-end items-center">
                     <div>
                       <Link className="text-white bg-[#52B69A] font-medium text-xs lg:text-base rounded-[2px] px-3 py-2 lg:px-9 lg:py-3 border-2 border-[#52B69A] hover:bg-white hover:text-[#52B69A]" href="/" passHref>Enroll Now</Link>
                     </div>
                 </div>
              </div>
          </div>
       </div>
       {/* Trial class section ends here */}
    </div>
  )
}

export default courses