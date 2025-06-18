import Image from 'next/image'
import React from 'react'

import { TabItem, Tabs, Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

import video_section_banner from "../assets/imagesource/video_section_banner.png";
import coachImg from "../assets/imagesource/coach_img.png";

import totalEnrolledLogo from "../assets/imagesource/total_enrolled_logo.png";
import clockIcon from "../assets/imagesource/clock_icon.png";
import Link from 'next/link';

import { BiRightArrowCircle } from "react-icons/bi";
import { BiVideo } from "react-icons/bi";
import { BiLockOpen } from "react-icons/bi";

const page = () => {
  return (
    <div className='bg-white rounded-[10px] py-4 px-6'>
        <div>
            <h3 className='${Poppins.className} text-[#2D2D2D] text-[36px] leading-[46px] font-semibold'>Learning the Board and Beyond</h3>
        </div>
        <div className='my-4'>
          <Image src={video_section_banner} alt="video_section_banner" className='rounded-[10px]' />
        </div>
        <div className='content_area'>
            <div className='flex gap-8'>
                <div className='w-8/12 border border-[#E6E6E6] rounded-[4px]'>
                  <div className='tab_section p-4'>
                    <Tabs aria-label="Pills" variant="pills" className='tab_btn_area'>
                        <TabItem active title="Course Info">
                            <div className='tab_cont_area'>
                               <h3 className='${Poppins.className} text-[#383737] text-xl font-semibold mb-3'>About this course</h3>
                               <p className='${Poppins.className} text-[#9C9B9B] text-sm font-normal mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                               <p className='${Poppins.className} text-[#9C9B9B] text-sm font-normal mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                               <p className='${Poppins.className} text-[#9C9B9B] text-sm font-normal mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                               <h3 className='${Poppins.className} text-[#383737] text-xl font-semibold mb-3'>What will you learn?</h3>
                               <ul>
                                 <li className='${Poppins.className} text-[#9C9B9B] text-sm font-normal mb-3 inline-flex items-center gap-1 w-6/12'><BiRightArrowCircle className='text-base' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                 <li className='${Poppins.className} text-[#9C9B9B] text-sm font-normal mb-3 inline-flex items-center gap-1 w-6/12'><BiRightArrowCircle className='text-base' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                 <li className='${Poppins.className} text-[#9C9B9B] text-sm font-normal mb-3 inline-flex items-center gap-1 w-6/12'><BiRightArrowCircle className='text-base' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                 <li className='${Poppins.className} text-[#9C9B9B] text-sm font-normal mb-3 inline-flex items-center gap-1 w-6/12'><BiRightArrowCircle className='text-base' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                 <li className='${Poppins.className} text-[#9C9B9B] text-sm font-normal mb-3 inline-flex items-center gap-1 w-6/12'><BiRightArrowCircle className='text-base' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                 <li className='${Poppins.className} text-[#9C9B9B] text-sm font-normal mb-3 inline-flex items-center gap-1 w-6/12'><BiRightArrowCircle className='text-base' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                               </ul>
                               <h3 className='${Poppins.className} text-[#383737] text-xl font-semibold mb-3'>Course Content</h3>
                               <div className='accordian_section bg-white'>
                                <Accordion>
                                    <AccordionPanel>
                                        <AccordionTitle>Getting started with basics of chess</AccordionTitle>
                                        <AccordionContent className='acco_cont_bg'>
                                            <div className='bg-white'>
                                                <div className='flex justify-between items-center mb-4'>
                                                    <div className='${Poppins.className} text-[#817B7B] text-sm font-normal flex items-center gap-2'><BiVideo className='text-xl' /> Introduction to Digital Arts course</div>
                                                    <div className='${Poppins.className} text-[#817B7B] text-sm font-tormal flex items-center gap-2'> 01:00:00 <BiLockOpen className='text-xl' /></div>
                                                </div>
                                                <div className='flex justify-between items-center mb-4'>
                                                    <div className='${Poppins.className} text-[#817B7B] text-sm font-normal flex items-center gap-2'><BiVideo className='text-xl' /> Introduction to Digital Arts course</div>
                                                    <div className='${Poppins.className} text-[#817B7B] text-sm font-tormal flex items-center gap-2'> 01:00:00 <BiLockOpen className='text-xl' /></div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionPanel>
                                    <AccordionPanel>
                                        <AccordionTitle>Getting started with basics of chess</AccordionTitle>
                                        <AccordionContent className='acco_cont_bg'>
                                            <div className='bg-white'>
                                                <div className='flex justify-between items-center mb-4'>
                                                    <div className='${Poppins.className} text-[#817B7B] text-sm font-normal flex items-center gap-2'><BiVideo className='text-xl' /> Introduction to Digital Arts course</div>
                                                    <div className='${Poppins.className} text-[#817B7B] text-sm font-tormal flex items-center gap-2'> 01:00:00 <BiLockOpen className='text-xl' /></div>
                                                </div>
                                                <div className='flex justify-between items-center mb-4'>
                                                    <div className='${Poppins.className} text-[#817B7B] text-sm font-normal flex items-center gap-2'><BiVideo className='text-xl' /> Introduction to Digital Arts course</div>
                                                    <div className='${Poppins.className} text-[#817B7B] text-sm font-tormal flex items-center gap-2'> 01:00:00 <BiLockOpen className='text-xl' /></div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionPanel>
                                    <AccordionPanel>
                                        <AccordionTitle>Getting started with basics of chess</AccordionTitle>
                                        <AccordionContent className='acco_cont_bg'>
                                            <div className='bg-white'>
                                                <div className='flex justify-between items-center mb-4'>
                                                    <div className='${Poppins.className} text-[#817B7B] text-sm font-normal flex items-center gap-2'><BiVideo className='text-xl' /> Introduction to Digital Arts course</div>
                                                    <div className='${Poppins.className} text-[#817B7B] text-sm font-tormal flex items-center gap-2'> 01:00:00 <BiLockOpen className='text-xl' /></div>
                                                </div>
                                                <div className='flex justify-between items-center mb-4'>
                                                    <div className='${Poppins.className} text-[#817B7B] text-sm font-normal flex items-center gap-2'><BiVideo className='text-xl' /> Introduction to Digital Arts course</div>
                                                    <div className='${Poppins.className} text-[#817B7B] text-sm font-tormal flex items-center gap-2'> 01:00:00 <BiLockOpen className='text-xl' /></div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionPanel>
                                </Accordion>
                               </div>
                            </div>
                        </TabItem>
                        <TabItem title="Resources">
                            <div className='tab_cont_area'>
                               <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
                            </div>
                        </TabItem>
                    </Tabs>
                  </div>
                </div>
                <div className='w-4/12'>
                   <div className='border border-[#E6E6E6] rounded-[4px] mb-4'>
                      <div className='border-b border-[#E6E6E6] py-5 px-7 flex items-center gap-3'>
                        <div>
                          <Image src={coachImg} alt="coachImg" className='rounded-[10px]' />
                        </div>
                        <div>
                            <h3 className='${Poppins.className} text-black text-base font-semibold'>Vai Sharma</h3>
                            <p className='${Poppins.className} text-[#575757] text-sm font-medium'>Coach</p>
                        </div>
                      </div>
                      <div className='py-5 px-7'>
                        <ul>
                            <li className='${Poppins.className} text-[#9C9B9B] text-sm font-medium mb-3 flex items-center gap-2'>
                                <Image src={totalEnrolledLogo} alt="totalEnrolledLogo" /> <p>931 Total Enrolled</p>
                            </li>
                            <li className='${Poppins.className} text-[#9C9B9B] text-sm font-medium flex items-center gap-2'>
                                <Image src={clockIcon} alt="clockIcon" /> <p>7th March - 8th April</p>
                            </li>
                        </ul>
                      </div>
                   </div>
                   <div className='border border-[#E6E6E6] rounded-[4px] mb-4'>
                      <div className='border-b border-[#E6E6E6] py-5 px-7 flex items-center gap-3'>
                        <h3 className='${Poppins.className} text-[#383737] text-2xl font-semibold'>Course Materials</h3>
                      </div>
                      <div className='py-5 px-7'>
                        <ul className='pl-10'>
                            <li className='${Poppins.className} text-[#9C9B9B] text-sm font-medium mb-3 list-disc'>Lives Classes</li>
                            <li className='${Poppins.className} text-[#9C9B9B] text-sm font-medium mb-3 list-disc'>Doubt Clear Sessions</li>
                            <li className='${Poppins.className} text-[#9C9B9B] text-sm font-medium mb-3 list-disc'>13 articles</li>
                            <li className='${Poppins.className} text-[#9C9B9B] text-sm font-medium mb-3 list-disc'>Downloadable Assignment Resourses</li>
                            <li className='${Poppins.className} text-[#9C9B9B] text-sm font-medium mb-3 list-disc'>Certificate of Completion</li>
                        </ul>
                      </div>
                   </div>
                   <div className='border border-[#E6E6E6] rounded-[4px] mb-4'>
                      <div className='border-b border-[#E6E6E6] py-5 px-7 flex items-center gap-3'>
                        <h3 className='${Poppins.className} text-[#383737] text-2xl font-semibold'>Tags</h3>
                      </div>
                      <div className='py-5 px-7'>
                        <ul className='flex gap-3'>
                            <li className='${Poppins.className} text-[#5D5D5D] px-4 py-2 rounded-[5px] text-sm font-medium bg-[#E3E3E3]'>Live Classes</li>
                            <li className='${Poppins.className} text-[#5D5D5D] px-4 py-2 rounded-[5px] text-sm font-medium bg-[#E3E3E3]'>Beginner</li>
                        </ul>
                      </div>
                   </div>
                   <div className='block'>
                    <Link className='bg-[#52B69A] rounded-[5px] w-full py-3 px-5 text-white text-base font-medium hover:bg-black inline-flex justify-center items-center' href="/" passHref>Enroll Today</Link>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page