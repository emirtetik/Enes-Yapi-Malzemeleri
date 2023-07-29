import React from 'react'
import Image from 'next/image'
import styles from '../../styles/hero.module.css'
const Hero = () => {
  return (

    <section className=" ">
   <div className={` ${styles.image_container}`}>
        <Image
          layout='fill'
            className="image1"
            src="https://www.knic.co.id/uploads/6/6-innovative-construction-materials-can-revolutionize-industry-in-indonesia.jpg"
            alt="background"
            quality={100}
            objectFit="cover" 
          />
        </div>
  <div className=" max-w-6xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-500">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <Image width={500} height={300} className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1574757987642-5755f0839101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxjb25zdHJ1Y3Rpb24lMjBtZXRhcmlhbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>

    </div>
  </div>
</section>
  )
}

export default Hero


