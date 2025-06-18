'use client';
import React from 'react';
import Slider from 'react-slick';

import testiFace from "../assets/imagesource/testi_face.png";
import Image from 'next/image';

import { RiDoubleQuotesL } from "react-icons/ri";

import { FaStar } from "react-icons/fa";

const TestimonialSlider = () => {
    const TestimonialSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      };
  return (
    <div className="w-full">
      
      <div className="our_coaches_slider_section testimonial_slider">
          <div className="gap-8">
            <Slider {...TestimonialSliderSettings}>
              <div className='px-3'>
                <div className="text-center testi_box px-7 py-10">
                  <h3 className="text-[#333333] font-bold ${plusJakartaSans.className} text-xl leading-[25px] pb-3">Bijoy Biswas</h3>
                  <div className='flex justify-center items-center mb-4'>
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                  </div>
                  <span className="text-[#52B69A] text-5xl font-semibold pb-0 text-center inline-block"><RiDoubleQuotesL /></span>
                  <p className="text-[#7B7B7B] text-[15px] leading-[22px] font-medium pb-0 ${plusJakartaSans.className}"> I am thrilled with the exceptional training my child has received at the Chess Master Training Institute in Kolkata. The coaches are incredibly knowledgeable and patient, ensuring each student understands the strategies and techniques. </p>
                </div>
              </div>
              <div className='px-3'>
                <div className="text-center testi_box px-7 py-10">
                  <h3 className="text-[#333333] font-bold ${plusJakartaSans.className} text-xl leading-[25px] pb-3">Suman Kumar Datta</h3>
                  <div className='flex justify-center items-center mb-4'>
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                  </div>
                  <span className="text-[#52B69A] text-5xl font-semibold pb-0 text-center inline-block"><RiDoubleQuotesL /></span>
                  <p className="text-[#7B7B7B] text-[15px] leading-[22px] font-medium pb-0 ${plusJakartaSans.className}">Exceptional training</p>
                </div>
              </div>
              <div className='px-3'>
                <div className="text-center testi_box px-7 py-10">
                  <h3 className="text-[#333333] font-bold ${plusJakartaSans.className} text-xl leading-[25px] pb-3">Hannah Schmitt</h3>
                  <div className='flex justify-center items-center mb-4'>
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                  </div>
                  <span className="text-[#52B69A] text-5xl font-semibold pb-0 text-center inline-block"><RiDoubleQuotesL /></span>
                  <p className="text-[#7B7B7B] text-[15px] leading-[22px] font-medium pb-0 ${plusJakartaSans.className}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </p>
                </div>
              </div>
              <div className='px-3'>
                <div className="text-center testi_box px-7 py-10">
                  <h3 className="text-[#333333] font-bold ${plusJakartaSans.className} text-xl leading-[25px] pb-3">Hannah Schmitt</h3>
                  <div className='flex justify-center items-center mb-4'>
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                  </div>
                  <span className="text-[#52B69A] text-5xl font-semibold pb-0 text-center inline-block"><RiDoubleQuotesL /></span>
                  <p className="text-[#7B7B7B] text-[15px] leading-[22px] font-medium pb-0 ${plusJakartaSans.className}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </p>
                </div>
              </div>
              <div className='px-3'>
                <div className="text-center testi_box px-7 py-10">
                  <h3 className="text-[#333333] font-bold ${plusJakartaSans.className} text-xl leading-[25px] pb-3">Hannah Schmitt</h3>
                  <div className='flex justify-center items-center mb-4'>
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                    <FaStar className='text-[#ffbe33]' />
                  </div>
                  <span className="text-[#52B69A] text-5xl font-semibold pb-0 text-center inline-block"><RiDoubleQuotesL /></span>
                  <p className="text-[#7B7B7B] text-[15px] leading-[22px] font-medium pb-0 ${plusJakartaSans.className}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </p>
                </div>
              </div>
            </Slider>
          </div>
      </div>
      
    </div>
  )
}

export default TestimonialSlider