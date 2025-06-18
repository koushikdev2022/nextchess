import React from 'react'

import contactBanner from "../assets/imagesource/contact_banner.png";
import Image from 'next/image';
import { Button, Label, Textarea, TextInput } from 'flowbite-react';

import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const page = () => {
    return (
        <div>
            <div className='banner_area p-4 lg:p-0'>
                <div className="max-w-6xl mx-auto lg:py-4">
                    <div className='banner_area_section'>
                        <Image src={contactBanner} alt='contactBanner' className="" />
                        <h1 className="text-white text-3xl lg:text-[60px] lg:leading-[63px] font-extrabold capitalize pb-4 ${plusJakartaSans.className}">Contact <span className="text-[#000]">us</span></h1>
                    </div>
                </div>
            </div>
            {/* Why Choose Us section start here */}
            <div className="certificate_completion_sec">
                <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
                    <div className="lg:flex">
                        <div className="lg:w-6/12">
                            <div className='flex items-center gap-2 mb-4'>
                                <div>
                                    <FaPhoneAlt className='text-[#52b69a]' />
                                </div>
                                <div className='text-base text-black'>+91 9330378911</div>
                            </div>
                            <div className='flex items-center gap-2 mb-4'>
                                <div>
                                    <FaEnvelope className='text-[#52b69a]' />
                                </div>
                                <div className='text-base text-black'>contact@c4chess.com</div>
                            </div>
                            <div className='flex items-start justify-start gap-2 mb-4'>
                                <div className='pt-1'>
                                    <IoLocationSharp className='text-[#52b69a] text-2xl' />
                                </div>
                                <div className='text-base text-black'>83, S P Mukherjee Road, Kolkata-700026</div>
                            </div>
                        </div>
                        <div className="lg:w-6/12 lg:pl-10 flex justify-center items-center">
                            <div>
                                <h2 className="text-[#0B0B2C] text-xl lg:text-[20px] lg:leading-[30px] font-extrabold capitalize pb-0 ${plusJakartaSans.className}">If you have any query feel free to ASK or Contact us!</h2>
                                <p className="text-[#69697B] font-medium text-base leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4 ${plusJakartaSans.className}">Contact us Forms</p>
                                <div className='form_area'>
                                    <div className='mb-2'>
                                        <div className="mb-2 block">
                                            <Label htmlFor="base">Name</Label>
                                        </div>
                                        <TextInput id="base" type="text" sizing="md" />
                                    </div>
                                    <div className='mb-2'>
                                        <div className="mb-2 block">
                                            <Label htmlFor="base">Phone Number</Label>
                                        </div>
                                        <TextInput id="base" type="text" sizing="md" />
                                    </div>
                                    <div className='mb-2'>
                                        <div className="mb-2 block">
                                            <Label htmlFor="base">Email </Label>
                                        </div>
                                        <TextInput id="base" type="email" sizing="md" />
                                    </div>
                                    <div className='mb-4'>
                                        <div className="mb-2 block">
                                            <Label htmlFor="comment">Your massage</Label>
                                        </div>
                                        <Textarea id="comment" placeholder="Your massage" required rows={4} />
                                    </div>
                                    <Button type="submit">Submit</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Why Choose Us section ends here */}
        </div>
    )
}

export default page