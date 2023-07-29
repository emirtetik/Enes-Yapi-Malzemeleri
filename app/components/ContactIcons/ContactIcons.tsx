'use client'
import React,{useEffect, useState} from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import styles from '../../styles/contactIcons.module.css'

const ContactIcons = () => {
    const latitude = 40.709233005995074;
    const longitude = 29.83764696080012;
    const [visible, setVisible] = useState(false);

   useEffect(() => {
      const handleScroll = ( ) => {
        setVisible(window.scrollY > 100);

      }
      window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
   }, [])
   
  return (
    <div className={`${visible ? 'block' : 'hidden'}  fixed flex flex-col gap-4 transform -translate-y-1/2 right-4 top-1/2`}>
      <Link href="https://web.whatsapp.com/send?phone=5394480527"
       target="_blank" rel="noopener noreferrer" className="text-green-500 ">
        <FaWhatsapp size={24} />
      </Link>
      <Link href="tel:5394480527" className="text-blue-500 ">
        <FaPhone size={24} />
      </Link>
      
      <Link href={`https://www.google.com/maps/dir/Current+Location/${latitude},${longitude}`} 
      target="_blank" rel="noopener noreferrer" className="text-red-500 ">
        <FaMapMarkerAlt size={24} />
      </Link>
    </div>
  );
};

export default ContactIcons;