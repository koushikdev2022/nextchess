'use client';
import React from 'react';
import Slider from 'react-slick';

import testiFace from "../assets/imagesource/testi_face.png";
import Image from 'next/image';

import { RiDoubleQuotesL } from "react-icons/ri";

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
              <div className="text-center testi_box px-7 pb-14">
                <Image src={testiFace} alt='testiFace' className="inline-block mb-3 mt-[-20px]" />
                <h3 className="text-[#333333] font-bold ${plusJakartaSans.className} text-xl leading-[25px] pb-3">Hannah Schmitt</h3>
                <span className="text-[#52B69A] text-[22px] leading-[24px] font-semibold pb-0 text-center inline-block"><RiDoubleQuotesL /></span>
                <p className="text-[#7B7B7B] text-[15px] leading-[22px] font-medium pb-8 ${plusJakartaSans.className}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </p>
              </div>
              <div className="text-center testi_box px-7 pb-14">
                <Image src={testiFace} alt='testiFace' className="inline-block mb-3 mt-[-20px]" />
                <h3 className="text-[#333333] font-bold ${plusJakartaSans.className} text-xl leading-[25px] pb-3">Hannah Schmitt</h3>
                <span className="text-[#52B69A] text-[22px] leading-[24px] font-semibold pb-0 text-center inline-block"><RiDoubleQuotesL /></span>
                <p className="text-[#7B7B7B] text-[15px] leading-[22px] font-medium pb-8 ${plusJakartaSans.className}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </p>
              </div>
              <div className="text-center testi_box px-7 pb-14">
                <Image src={testiFace} alt='testiFace' className="inline-block mb-3 mt-[-20px]" />
                <h3 className="text-[#333333] font-bold ${plusJakartaSans.className} text-xl leading-[25px] pb-3">Hannah Schmitt</h3>
                <span className="text-[#52B69A] text-[22px] leading-[24px] font-semibold pb-0 text-center inline-block"><RiDoubleQuotesL /></span>
                <p className="text-[#7B7B7B] text-[15px] leading-[22px] font-medium pb-8 ${plusJakartaSans.className}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </p>
              </div>
              <div className="text-center testi_box px-7 pb-14">
                <Image src={testiFace} alt='testiFace' className="inline-block mb-3 mt-[-20px]" />
                <h3 className="text-[#333333] font-bold ${plusJakartaSans.className} text-xl leading-[25px] pb-3">Hannah Schmitt</h3>
                <span className="text-[#52B69A] text-[22px] leading-[24px] font-semibold pb-0 text-center inline-block"><RiDoubleQuotesL /></span>
                <p className="text-[#7B7B7B] text-[15px] leading-[22px] font-medium pb-8 ${plusJakartaSans.className}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </p>
              </div>
              <div className="text-center testi_box px-7 pb-14">
                <Image src={testiFace} alt='testiFace' className="inline-block mb-3 mt-[-20px]" />
                <h3 className="text-[#333333] font-bold ${plusJakartaSans.className} text-xl leading-[25px] pb-3">Hannah Schmitt</h3>
                <span className="text-[#52B69A] text-[22px] leading-[24px] font-semibold pb-0 text-center inline-block"><RiDoubleQuotesL /></span>
                <p className="text-[#7B7B7B] text-[15px] leading-[22px] font-medium pb-8 ${plusJakartaSans.className}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </p>
              </div>
            </Slider>
          </div>
      </div>
      
    </div>
  )
}

export default TestimonialSlider