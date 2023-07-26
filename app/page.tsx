'use client'
import React from 'react';
import ContactIcons from './components/ContactIcons/ContactIcons';
import Hero from './components/Home/Hero';
import Content from './components/Home/Content';
import MySwiper from './components/Home/Swiper';
export default function Home() {

  return (
    <div>
      <ContactIcons />
       <Hero/>
       <Content/>
       <MySwiper/>
     </div>
  );
}


