'use client';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

// import coaches01 from "./assets/imagesource/coaches01.png";
// import coaches02 from "./assets/imagesource/coaches02.png";
// import coaches03 from "./assets/imagesource/coaches03.png";
// import coaches04 from "./assets/imagesource/coaches04.png";

import coaches01 from "../assets/imagesource/coaches01.png";
import coaches02 from "../assets/imagesource/coaches02.png";
import coaches03 from "../assets/imagesource/coaches03.png";
import coaches04 from "../assets/imagesource/coaches04.png";
import coaches05 from "../assets/imagesource/coaches05.png";
import coaches06 from "../assets/imagesource/coaches06.png";

const CoachesSlider = () => {
    const CoachesSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
        <div className="our_coaches_slider_section">
            <div className="gap-8">
                <Slider {...CoachesSliderSettings}>
                    <div className="text-center">
                        <Image src={coaches05} alt='coaches05' className="inline-block mb-8" />
                        <p className="text-white text-[18px] lg:text-[22px] leading-[24px] font-semibold pb-3">Shaati Majumder</p>
                        <span className="text-white text-[18px] lg:text-[22px] leading-[24px] font-semibold pb-3">FIDE Rating : 1779</span>
                    </div>
                    <div className="text-center pt-16">
                        <p className="text-white text-[18px] lg:text-[22px] leading-[24px] font-semibold pb-3">Manabi Chouhan</p>
                        <span className="text-white text-[18px] lg:text-[22px] leading-[24px] font-semibold pb-3">FIDE Rating : 1821</span>
                        <Image src={coaches06} alt='coaches06' className="inline-block mt-8" />
                    </div>
                    <div className="text-center">
                        <Image src={coaches03} alt='coaches03' className="inline-block mb-8" />
                        <p className="text-white text-[18px] lg:text-[22px] leading-[24px] font-semibold pb-3">vanshika Khoshla</p>
                        <span className="text-white text-[18px] lg:text-[22px] leading-[24px] font-semibold pb-3">FIDE Rating : 2644</span>
                    </div>
                    <div className="text-center pt-16">
                        <p className="text-white text-[18px] lg:text-[22px] leading-[24px] font-semibold pb-3">Nakul Shaw</p>
                        <span className="text-white text-[18px] lg:text-[22px] leading-[24px] font-semibold pb-3">FIDE Rating : 2536</span>
                        <Image src={coaches04} alt='coaches04' className="inline-block mt-8" />
                    </div>
                    <div className="text-center">
                        <Image src={coaches01} alt='coaches01' className="inline-block mb-8" />
                        <p className="text-white text-[18px] lg:text-[22px] leading-[24px] font-semibold pb-3">Lawn Ramesly</p>
                        <span className="text-white text-[18px] lg:text-[22px] leading-[24px] font-semibold pb-3">FIDE Rating : 2576</span>
                    </div>
                    <div className="text-center pt-16">
                        <p className="text-white text-[18px] lg:text-[22px] leading-[24px] font-semibold pb-3">Nakul Shaw</p>
                        <span className="text-white text-[18px] lg:text-[22px] leading-[24px] font-semibold pb-3">FIDE Rating : 2536</span>
                        <Image src={coaches02} alt='coaches02' className="inline-block mt-8" />
                    </div>
                    <div className="text-center">
                        <Image src={coaches03} alt='coaches03' className="inline-block mb-8" />
                        <p className="text-white text-[18px] lg:text-[22px] leading-[24px] font-semibold pb-3">vanshika Khoshla</p>
                        <span className="text-white text-[18px] lg:text-[22px] leading-[24px] font-semibold pb-3">FIDE Rating : 2644</span>
                    </div>
                    <div className="text-center pt-16">
                        <p className="text-white text-[18px] lg:text-[22px] leading-[24px] font-semibold pb-3">Nakul Shaw</p>
                        <span className="text-white text-[18px] lg:text-[22px] leading-[24px] font-semibold pb-3">FIDE Rating : 2536</span>
                        <Image src={coaches04} alt='coaches04' className="inline-block mt-8" />
                    </div>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default CoachesSlider