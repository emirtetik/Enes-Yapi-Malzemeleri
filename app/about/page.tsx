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
   <section className=' lg:m-10 lg:w-3/3  sm:max-w-none sm:m-0'>
   <div className={` ${styles.image_container}`}>
        <Image
          layout='fill'
            src="https://images.unsplash.com/photo-1564483335100-3413b45dbd37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY3fHxjb25zdHJ1Y3Rpb24lMjBidWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="background"
            quality={100}
            objectFit='cover'
          />
        </div>
   
   </section>
   <section className={`flex flex-grow  w-full ${styles.flex_container}`}>
  <div className="container px-5 py-12 ">
    <div className="flex relative pt-10 pb-20 sm:items-center mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
        <FaUsers size={40}/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-red-500 mb-1 text-xl">Biz Kimiz</h2>
          <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
        <FaBuilding size={40}/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-red-500 mb-1 text-xl">Kurumsal</h2>
          <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
    
    <div className="flex relative pb-10 sm:items-center mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
        <BiSolidTimeFive size={40}/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-red-500 mb-1 text-xl">Çalışma Saatlerimiz:</h2>
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