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
      const handleScroll = () => {
        setVisible(window.scrollY > 100);
      };
      handleScroll();
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    
    useEffect(() => {
      const handleResize = () => {
        setVisible(window.innerWidth > 640); 
      };
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
   
  return (
    <>
      {visible && (
        <div className={`fixed flex flex-col gap-4 transform -translate-y-1/2 right-4 top-1/2`}>
          <Link href="https://web.whatsapp.com/send?phone=0537 495 7296" target="_blank" rel="noopener noreferrer" className="text-green-500">
            <FaWhatsapp size={34} />
          </Link>
          <Link href="tel:0537 495 7296" className="text-blue-500">
            <FaPhone size={34} />
          </Link>

          <Link href={`https://www.google.com/maps/dir/Current+Location/${latitude},${longitude}`} target="_blank" rel="noopener noreferrer" className="text-red-500">
            <FaMapMarkerAlt size={34} />
          </Link>
        </div>
      )}
    </>
  );
};

export default ContactIcons;