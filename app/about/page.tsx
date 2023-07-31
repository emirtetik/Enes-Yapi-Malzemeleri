import React from 'react'
import ContactIcons from '../components/ContactIcons/ContactIcons'
import Image from 'next/image'
import styles from '../styles/about.module.css'
import {FaBuilding,FaUsers,FaBullseye  } from 'react-icons/fa'
import {BiSolidTimeFive} from 'react-icons/bi'
import RootLayout from '../layout'
const page = () => {
  return (
    <RootLayout title='Hakkımızda'>
    <div>
      <ContactIcons/>
      <div className={`flex flex-wrap sm:grid lg:grid-cols-3  `}>
   <section className=' lg:m-10 lg:w-3/3 sm:max-w-none sm:m-0'>
   <div className={` ${styles.image_container}`}>
        <Image
          layout='fill'
            src="/assets/about.avif"
            alt="background"
            quality={100}
            objectFit='cover'
          />
        </div>
   
   </section>
   <section className={`flex flex-grow  w-full ${styles.flex_container}`}>
  <div className="container px-5 py-12 ">
    <div className="relative flex pt-10 pb-20 mx-auto sm:items-center">
      <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
        <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-red-500 rounded-full sm:mt-0 title-font">1</div>
      <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-red-500 bg-red-100 rounded-full">
        <FaUsers size={40}/>
        </div>
        <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
          <h2 className="mb-1 text-xl font-medium text-red-500 title-font">Biz Kimiz</h2>
          <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
    <div className="relative flex pb-20 mx-auto sm:items-center">
      <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
        <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-red-500 rounded-full sm:mt-0 title-font">2</div>
      <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-red-500 bg-red-100 rounded-full">
        <FaBuilding size={40}/>
        </div>
        <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
          <h2 className="mb-1 text-xl font-medium text-red-500 title-font">Kurumsal</h2>
          <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
    
    <div className="relative flex pb-10 mx-auto sm:items-center">
      <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
        <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-red-500 rounded-full sm:mt-0 title-font">3</div>
      <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-red-500 bg-red-100 rounded-full">
        <BiSolidTimeFive size={40}/>
        </div>
        <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
          <h2 className="mb-1 text-xl font-medium text-red-500 title-font">Çalışma Saatlerimiz:</h2>
          <p className="leading-relaxed"><span className='font-bold'>Hafta içi : </span> 08.00 - 19.00</p>
          <p className="leading-relaxed"><span className='font-bold'>Hafta sonu : </span> 08.00 - 19.00 - Pazar Tatil</p>

        </div>
      </div>
    </div>
  </div>
</section>
   </div>
      </div>
      </RootLayout>
  )
}

export default page