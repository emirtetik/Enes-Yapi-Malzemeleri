'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation  } from 'swiper/modules';
import { IoMdBuild } from 'react-icons/io'; 
import  {IoBuildSharp} from 'react-icons/io5';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const images = [
    {
        id: 1,
        src: '/assets/swiper/images.jpg',   
    },
    {
        id: 2,
        src: '/assets/swiper/logo.png',   
    },
    {
        id: 3,
        src: '/assets/swiper/images.jpg',   
    },
    {
        id: 4,
        src: '/assets/swiper/images.png',   
    },
    {
        id: 5,
        src: '/assets/swiper/images.jpg',   
    },
    {
        id: 6,
        src: '/assets/swiper/download.png',   
    },
    {
        id: 7,
        src: '/assets/swiper/download.jpg',   
    }
]
export default function MySwiper() {
  return (
    <section className='max-w-6xl px-5 mx-auto '>
    <Swiper
      spaceBetween={10}
      modules={[Navigation]}
      slidesPerView={1}
      autoplay={{ delay: 4000 }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      breakpoints={{
        700:{
          slidesPerView: 3,
        }
      }}
      >
      
      {images.map((image) => (
          <SwiperSlide key={image.id} className='min-h-[150px]  rounded-lg py-8 px-8 '>
             <div className='flex justify-center items-center h-[300px]'>
              <Image layout='fixed' objectFit='cover' width={150} height={150} src={image.src} alt='slider' />
            </div>
          </SwiperSlide>
        ))}
      <div  >
          <IoMdBuild size={64} className=' swiper-button-prev' style={{color: '#bb0000'}}/>
        </div>
        <div >
          <IoBuildSharp size={64} className=' swiper-button-next' style={{color: '#bb0000'}}/>
        </div>
    </Swiper>
    </section>
  );
};