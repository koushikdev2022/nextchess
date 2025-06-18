"use client"
import Image from "next/image";
import bannerImg from "../app/assets/imagesource/banner_img.png";
import chessBeginner from "../app/assets/imagesource/chess_beginner.png";
import classicStrategies from "../app/assets/imagesource/classic_strategies.png"
import championStrategies from "../app/assets/imagesource/champion_strategies.png";
import notionsTime from "../app/assets/imagesource/notions_time.png";
import opponentThoughts from "../app/assets/imagesource/opponent_thoughts.png";
import onlineClasses from "../app/assets/imagesource/online_classes.png";

import bestCoursesIcon from "../app/assets/imagesource/best_courses_icon.png";
import topCoachIcon from "../app/assets/imagesource/top_coach_icon.png";
import dedicatedTeamIcon from "../app/assets/imagesource/dedicated_team_icon.png";

import Link from "next/link";

import { Roboto } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';

import { IoMdCheckmark } from "react-icons/io";
import TestimonialSlider from "./components/TestimonialSlider";
import CoachesSlider from "./components/CoachesSlider";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getIpData, getPlansByIp } from "../app/Reducer/PlanSlice"

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


export default function Home() {
   const { plansData, ipData } = useSelector((state) => state?.plan)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getIpData()).then((res) => {
         console.log("Res", res);
         if (res?.payload?.ip) {
            dispatch(getPlansByIp(res?.payload?.ip))
         }
      })
   }, [])

   console.log("plansData", plansData);

   return (
      <div className="home_wrapper_arera">
         {/* Home banner section start here */}
         <div className="home_banner_area">
            <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
               <div className="lg:flex">
                  <div className="lg:w-6/12 pr-0 mb-6">
                     <span className="text-[#52B69A] text-[18px] font-bold uppercase pb-3 lg:pb-6 block ${roboto.className}">Welcome to C4Chess </span>
                     <h1 className="text-[#0B0B2C] text-3xl lg:text-[60px] lg:leading-[63px] font-extrabold capitalize pb-4 ${plusJakartaSans.className}">Grow your chess skills, with <span className="text-[#52B69A]">video and live courses.</span></h1>
                     <p className="text-[#69697B] font-medium text-base leading-[24px] lg:text-xl lg:leading-[30px] lg:pb-10 pb-5 ${plusJakartaSans.className}">Develop confidence, composure under pressure and the discipline needed to be a champ. This is the club you’ve been looking for.</p>

                     <Link className="text-white bg-[#52B69A] font-medium text-xs lg:text-base rounded-[2px] px-3 py-2 lg:px-9 lg:py-3 border-2 border-[#52B69A] hover:bg-white hover:text-[#52B69A]" href="/" passHref>Book Demo</Link>
                  </div>
                  <div className="lg:w-6/12">
                     <Image src={bannerImg} alt='bannerImg' />
                  </div>
               </div>
            </div>
         </div>
         {/* Home banner section ends here */}

         {/* Why Choose Us section start here */}
         <div className="why_choose_us_section">
            <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
               <div className="lg:flex">
                  <div className="w-6/12">&nbsp;</div>
                  <div className="lg:w-6/12 lg:pl-10">
                     <span className="text-[#52B69A] text-[18px] font-bold uppercase pb-4 block ${roboto.className}">Why Choose us</span>
                     <h2 className="text-[#0B0B2C] text-3xl lg:text-[60px] lg:leading-[63px] font-extrabold capitalize pb-4 ${plusJakartaSans.className}">We are more than just <span className="text-[#52B69A]">chess</span> lovers</h2>
                     <p className="text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}">At C4Chess, we&apos;re more than chess lovers  we&apos;re your partners in mastering the game. Whether you&apos;re a beginner or a competitive player, our experienced team of players, trainers, and analysts is here to support your chess journey at every level.</p>
                     <p className="text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-8 ${plusJakartaSans.className}">At C4CHESS, it&apos;s more than moves  it&apos;s a chess adventure. Whether you&apos;re a pawn or a queen, let&apos;s conquer the 64 squares together!</p>
                     <Link className="text-white bg-[#52B69A] font-medium text-xs lg:text-base rounded-[2px] px-3 py-2 lg:px-9 lg:py-3 border-2 border-[#52B69A] hover:bg-white hover:text-[#52B69A]" href="/" passHref>Register Now (Free Trail)</Link>
                  </div>
               </div>
            </div>
         </div>
         {/* Why Choose Us section ends here */}


         {/* Courses and Learning section start here */}
         <div className="courses_learning_section">
            <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
               <div className="top_title_section text-center mb-6">
                  <span className="text-[#D9ED92] text-[18px] font-bold uppercase pb-4 block ${roboto.className}">OUR CHESS</span>
                  <h2 className="text-white text-3xl lg:text-[60px] lg:leading-[63px] font-extrabold capitalize pb-4 ${plusJakartaSans.className}">Courses and Learning</h2>
                  <p className="text-white font-medium text-base lg:text-[18px] leading-[28px] pb-10 ${plusJakartaSans.className} lg:px-20">Develop confidence, composure under pressure and the discipline needed to be a champ. This is the club you&apos;ve been looking for.</p>
               </div>
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
                  <div className="text-center">
                     <Image src={chessBeginner} alt='chessBeginner' className="inline-block mb-4" />
                     <h3 className="text-white text-2xl leading-[30px] font-bold ${plusJakartaSans.className} mb-2">Chess for Beginner</h3>
                     <p className="text-white text-sm leading-[22px] font-medium ${roboto.className}">Lorem ipsum dolor sit amet, cctetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </div>
                  <div className="text-center">
                     <Image src={classicStrategies} alt='classicStrategies' className="inline-block mb-4" />
                     <h3 className="text-white text-2xl leading-[30px] font-bold ${plusJakartaSans.className} mb-2">Classic Strategies</h3>
                     <p className="text-white text-sm leading-[22px] font-medium ${roboto.className}">Lorem ipsum dolor sit amet, cctetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </div>
                  <div className="text-center">
                     <Image src={championStrategies} alt='championStrategies' className="inline-block mb-4" />
                     <h3 className="text-white text-2xl leading-[30px] font-bold ${plusJakartaSans.className} mb-2">Champion Strategies</h3>
                     <p className="text-white text-sm leading-[22px] font-medium ${roboto.className}">Lorem ipsum dolor sit amet, cctetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </div>
                  <div className="text-center">
                     <Image src={notionsTime} alt='notionsTime' className="inline-block mb-4" />
                     <h3 className="text-white text-2xl leading-[30px] font-bold ${plusJakartaSans.className} mb-2">Notions of Time</h3>
                     <p className="text-white text-sm leading-[22px] font-medium ${roboto.className}">Lorem ipsum dolor sit amet, cctetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </div>
                  <div className="text-center">
                     <Image src={opponentThoughts} alt='opponentThoughts' className="inline-block mb-4" />
                     <h3 className="text-white text-2xl leading-[30px] font-bold ${plusJakartaSans.className} mb-2">Opponent&apos;s Thoughts</h3>
                     <p className="text-white text-sm leading-[22px] font-medium ${roboto.className}">Lorem ipsum dolor sit amet, cctetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </div>
                  <div className="text-center">
                     <Image src={onlineClasses} alt='onlineClasses' className="inline-block mb-4" />
                     <h3 className="text-white text-2xl leading-[30px] font-bold ${plusJakartaSans.className} mb-2">Online Classes</h3>
                     <p className="text-white text-sm leading-[22px] font-medium ${roboto.className}">Lorem ipsum dolor sit amet, cctetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </div>
               </div>
            </div>
         </div>
         {/* Courses and Learning section ends here */}


         {/* Level Up Process section start here */}
         <div className="level_up_process_section">
            <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
               <div className="lg:flex">
                  <div className="w-full lg:pl-10">
                     <span className="text-[#52B69A] text-[18px] font-bold uppercase pb-4 block ${roboto.className}">Progress Type</span>
                     <h2 className="text-[#0B0B2C] text-3xl lg:text-[60px] lg:leading-[63px] font-extrabold capitalize pb-12 ${plusJakartaSans.className}">Our Level Up <span className="text-[#52B69A]">Process</span></h2>
                     <div className="level_up_process_cont_section lg:w-8/12 pt-2">
                        <ul>
                           <li>
                              <h3 className="text-xl lg:text-[26px] leading-[30px] text-[#403B3B] pb-3 font-bold ${plusJakartaSans.className}">Executive Level</h3>
                              <p className="text-base lg:text-[18px] leading-[24px] text-[#69697B] font-medium ${plusJakartaSans.className}">Positional Understanding for enhancing calculation skill and preparation for rated tournament</p>
                           </li>
                           <li>
                              <h3 className="text-xl lg:text-[26px] leading-[30px] text-[#403B3B] pb-3 font-bold ${plusJakartaSans.className}">Transition Level</h3>
                              <p className="text-base lg:text-[18px] leading-[24px] text-[#69697B] font-medium ${plusJakartaSans.className}">Tactical understanding & implementation and preparation for tournament</p>
                           </li>
                           <li>
                              <h3 className="text-xl lg:text-[26px] leading-[30px] text-[#403B3B] pb-3 font-bold ${plusJakartaSans.className}">Basic Level</h3>
                              <p className="text-base lg:text-[18px] leading-[24px] text-[#69697B] font-medium ${plusJakartaSans.className}">Introduction with chess & basic understanding</p>
                           </li>
                        </ul>
                     </div>
                     <div className="w-full flex justify-center">
                        <Link className="text-white bg-[#52B69A] font-medium text-xs lg:text-base rounded-[2px] px-3 py-2 lg:px-9 lg:py-3 border-2 border-[#52B69A] hover:bg-white hover:text-[#52B69A]" href="/" passHref>Enroll Now</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Level Up Process section ends here */}

         {/* chese dark section start here */}
         <div className="chese_dark_section">
            <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
               <div className="lg:flex gap-7">
                  <div className="lg:w-4/12 bg-white rounded-[6px] px-6 py-8 text-center shadow-2xl mb-6 lg:mb-0">
                     <Image src={bestCoursesIcon} alt='bestCoursesIcon' className="inline-block mb-4" />
                     <h3 className="text-[#184E77] text-[26px] leading-[30px] font-bold ${plusJakartaSans.className} pb-3">Best Courses</h3>
                     <p className="text-[#69697B] text-base leading-[24px] font-semibold ${plusJakartaSans.className}">We provide curated curriculum according to the child&apos;s need. We have a scientifically designed programme to enhance the child&apos;s potential.</p>
                  </div>
                  <div className="lg:w-4/12 bg-[#1E6091] rounded-[6px] px-6 py-8 text-center shadow-2xl mb-6 lg:mb-0">
                     <Image src={topCoachIcon} alt='topCoachIcon' className="inline-block mb-4" />
                     <h3 className="text-[#D9ED92] text-[26px] leading-[30px] font-bold ${plusJakartaSans.className} pb-3">Top Coach</h3>
                     <p className="text-white text-base leading-[24px] font-semibold ${plusJakartaSans.className}">We hire highly experienced and professional coaches who can understand child&apos;s pattern of learning and can deliver accordingly.</p>
                  </div>
                  <div className="lg:w-4/12 bg-white rounded-[6px] px-6 py-8 text-center shadow-2xl mb-6 lg:mb-0">
                     <Image src={dedicatedTeamIcon} alt='dedicatedTeamIcon' className="inline-block mb-4" />
                     <h3 className="text-[#184E77] text-[26px] leading-[30px] font-bold ${plusJakartaSans.className} pb-3">Dedicated Team</h3>
                     <p className="text-[#69697B] text-base leading-[24px] font-semibold ${plusJakartaSans.className}">Our academy is providing chess coaching in vasis different region like USA, UK, UAE, Australia etc. We have a dedicated team to ensure quality service as promised.</p>
                  </div>
               </div>
            </div>
         </div>
         {/* chese dark section ends here */}


         {/* Our Coaches section start here */}
         <div className="our_coaches_section">
            <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
               <div className="top_title_section text-center mb-12">
                  <span className="text-[#D9ED92] text-[18px] font-bold uppercase pb-4 block ${roboto.className}">OUR CHESS</span>
                  <h2 className="text-white text-3xl lg:text-[60px] lg:leading-[63px] font-extrabold capitalize pb-4 ${plusJakartaSans.className}">Our Coaches</h2>
               </div>
               <CoachesSlider />
            </div>
         </div>
         {/* Our Coaches section ends here */}


         {/* Play One section start here */}
         <div className="play_one_section">
            <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
               <div className="flex">
                  <div className="lg:w-6/12">&nbsp;</div>
                  <div className="lg:w-6/12 pl-0">
                     <span className="text-[#52B69A] text-[18px] font-bold uppercase pb-4 block ${roboto.className}">Play chess</span>
                     <h2 className="text-[#0B0B2C] text-3xl lg:text-[60px] lg:leading-[63px] font-extrabold capitalize pb-4 ${plusJakartaSans.className}">play One - One Game and Analyse</h2>
                     <p className="text-[#69697B] font-medium text-[18px] leading-[28px] pb-10 ${plusJakartaSans.className}">Play a one-on-one game to test your skills and strategy. Then, take a moment to analyze your performance—spot strengths, fix weaknesses, and improve with every match. Learn by doing, grow by reviewing.</p>
                     <Link className="text-white bg-[#52B69A] font-medium text-xs lg:text-base rounded-[2px] px-3 py-2 lg:px-9 lg:py-3 border-2 border-[#52B69A] hover:bg-white hover:text-[#52B69A]" href="/" passHref>Register Now</Link>
                  </div>
               </div>
            </div>
         </div>
         {/* Play One section ends here */}


         {/* Trial class section start here */}
         <div className="trial_class_section">
            <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
               <div className="lg:flex">
                  <div className="lg:w-6/12 pl-0 mb-8">
                     <h2 className="text-white text-3xl lg:text-[46px] lg:leading-[50px] font-bold pb-4 ${plusJakartaSans.className}">Enroll today for your free trial class</h2>
                     <p className="text-[#8896AB] font-medium text-base lg:text-[18px] leading-[28px] pb-0 ${plusJakartaSans.className}">Join a small, interactive group of kids to learn chess. Our course structures are designed to provide maximum knowledge and allow for flexible, steady-paced learning.</p>
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


         {/* Plans and Pricing section start here */}
         <div className="plans_pricing_section">
            <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
               <h2 className="text-[#0B0B2C] text-3xl lg:text-[60px] lg:leading-[63px] font-extrabold capitalize pb-12 ${plusJakartaSans.className} text-center">Our Plans and <span className="text-[#52B69A]">Pricing</span></h2>
               <div className="lg:flex gap-8 lg:mt-8">
                  {
                     plansData?.data?.map((plans, index) => {
                        return (
                           <>
                              <div className={`${index % 2 == 0 ? "bg-white shadow-2xl rounded-[10px] lg:w-4/12 p-8 mb-6 lg:mb-0" : "bg-[#168AAD] shadow-2xl rounded-[10px] lg:w-4/12 p-8 mb-6 lg:mb-0"}`}>
                                 <h3 className={`${index % 2 == 0 ? "text-black text-[18px] leading-[18px] font-semibold ${plusJakartaSans.className} pb-1" : "text-white text-[18px] leading-[18px] font-semibold ${plusJakartaSans.className} pb-1"}`}>{plans?.planName}</h3>
                                 <p className={`${index % 2 == 0 ? "${plusJakartaSans.className} text-xs font-semibold text-[#656565]" : "${plusJakartaSans.className} text-xs font-semibold text-white"}`}>Forever free, even after the launch</p>
                                 <div className="flex items-center gap-3 mt-5 mb-7">
                                    <p className={`${index % 2 == 0 ? "text-[40px] leading-[48px] font-bold ${plusJakartaSans.className} text-black" : "text-[40px] leading-[48px] font-bold ${plusJakartaSans.className} text-white"}`}>{plans?.prices?.[0]?.currency} {plans?.prices?.[0]?.price}</p>
                                    <span className={`${index % 2 == 0 ? "${plusJakartaSans.className} text-[#656565] font-semibold text-xs" : "${plusJakartaSans.className} text-white font-semibold text-xs"}`}>per seat <br></br>
                                       /month</span>
                                 </div>
                                 <div className="flex justify-center">
                                    <Link className={`${index % 2 == 0 ? "text-white bg-[#168AAD] font-medium text-sm lg:text-sm rounded-[5px] px-3 py-2 lg:px-20 lg:py-3 hover:bg-black" : "text-[#168AAD] bg-white font-medium text-sm lg:text-sm rounded-[5px] px-3 py-2 lg:px-20 lg:py-3 hover:bg-black hover:text-white"}`} href="/" passHref>Purchase Plan</Link>
                                 </div>
                                 {
                                    index % 2 == 0 ? (
                                       <>
                                          <div className="pt-7">
                                             <ul>
                                                <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                                                <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                                                <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                                                <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                                                <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                                                <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                                             </ul>
                                          </div>
                                       </>
                                    ) : (
                                       <>
                                          <div className="pt-7">
                                             <ul>
                                                <li className="${plusJakartaSans.className} text-xs font-semibold text-white flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                                                <li className="${plusJakartaSans.className} text-xs font-semibold text-white flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                                                <li className="${plusJakartaSans.className} text-xs font-semibold text-white flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                                                <li className="${plusJakartaSans.className} text-xs font-semibold text-white flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                                                <li className="${plusJakartaSans.className} text-xs font-semibold text-white flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                                                <li className="${plusJakartaSans.className} text-xs font-semibold text-white flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                                             </ul>
                                          </div>
                                       </>
                                    )
                                 }

                              </div>
                           </>
                        )
                     })
                  }
                  {/* <div className="bg-white shadow-2xl rounded-[10px] lg:w-4/12 p-8 mb-6 lg:mb-0">
                     <h3 className="text-black text-[18px] leading-[18px] font-semibold ${plusJakartaSans.className} pb-1">Basic Package</h3>
                     <p className="${plusJakartaSans.className} text-xs font-semibold text-[#656565]">Forever free, even after the launch</p>
                     <div className="flex items-center gap-3 mt-5 mb-7">
                        <p className="text-[40px] leading-[48px] font-bold ${plusJakartaSans.className} text-black">$11</p>
                        <span className="${plusJakartaSans.className} text-[#656565] font-semibold text-xs">per seat <br></br>
                           /month</span>
                     </div>
                     <div className="flex justify-center">
                        <Link className="text-white bg-[#168AAD] font-medium text-sm lg:text-sm rounded-[5px] px-3 py-2 lg:px-20 lg:py-3 hover:bg-black" href="/" passHref>Purchase Plan</Link>
                     </div>
                     <div className="pt-7">
                        <ul>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                        </ul>
                     </div>
                  </div>
                  <div className="bg-[#168AAD] shadow-2xl rounded-[10px] lg:w-4/12 p-8 mb-6 lg:mb-0">
                     <h3 className="text-white text-[18px] leading-[18px] font-semibold ${plusJakartaSans.className} pb-1">Diamond Pack</h3>
                     <p className="${plusJakartaSans.className} text-xs font-semibold text-white">Forever free, even after the launch</p>
                     <div className="flex items-center gap-3 mt-5 mb-7">
                        <p className="text-[40px] leading-[48px] font-bold ${plusJakartaSans.className} text-white">$11</p>
                        <span className="${plusJakartaSans.className} text-white font-semibold text-xs">per seat <br></br>
                           /month</span>
                     </div>
                     <div className="flex justify-center">
                        <Link className="text-[#168AAD] bg-white font-medium text-sm lg:text-sm rounded-[5px] px-3 py-2 lg:px-20 lg:py-3 hover:bg-black hover:text-white" href="/" passHref>Purchase Plan</Link>
                     </div>
                     <div className="pt-7">
                        <ul>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-white flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-white flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-white flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-white flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-white flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-white flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                        </ul>
                     </div>
                  </div>
                  <div className="bg-white shadow-2xl rounded-[10px] lg:w-4/12 p-8">
                     <h3 className="text-black text-[18px] leading-[18px] font-semibold ${plusJakartaSans.className} pb-1">Diamond Pack</h3>
                     <p className="${plusJakartaSans.className} text-xs font-semibold text-[#656565]">Forever free, even after the launch</p>
                     <div className="flex items-center gap-3 mt-5 mb-7">
                        <p className="text-[40px] leading-[48px] font-bold ${plusJakartaSans.className} text-black">$11</p>
                        <span className="${plusJakartaSans.className} text-[#656565] font-semibold text-xs">per seat <br></br>
                           /month</span>
                     </div>
                     <div className="flex justify-center">
                        <Link className="text-white bg-[#168AAD] font-medium text-sm lg:text-sm rounded-[5px] px-3 py-2 lg:px-20 lg:py-3 hover:bg-black" href="/" passHref>Purchase Plan</Link>
                     </div>
                     <div className="pt-7">
                        <ul>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                           <li className="${plusJakartaSans.className} text-xs font-semibold text-[#656565] flex items-center mb-2"><IoMdCheckmark className="text-[#29C5F6] text-base mr-1" /> Lorem Ipsum</li>
                        </ul>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>
         {/* Plans and Pricing section ends here */}

         {/* testi section start here */}
         <div className="testi_section">
            <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
               <div className="top_title_section text-center mb-14">
                  <h2 className="text-white text-3xl lg:text-[60px] lg:leading-[63px] font-extrabold capitalize pb-8 ${plusJakartaSans.className}">What Our Clients <span className="text-[#52B69A]">Say About Us</span></h2>
               </div>
               <TestimonialSlider />
            </div>

         </div>

         {/* testi section ends here */}

      </div>

   );
}
