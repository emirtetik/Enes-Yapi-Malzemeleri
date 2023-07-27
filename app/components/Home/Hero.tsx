import React from 'react'
import Image from 'next/image'
import styles from '../../styles/hero.module.css'
const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
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
  <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row max-w-6xl ">
    <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
      <Image width={400} height={400} className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1574757987642-5755f0839101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxjb25zdHJ1Y3Rpb24lMjBtZXRhcmlhbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>
    </div>
    <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
      <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">Knausgaard typewriter readymade marfa</h1>
      <p className="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
      <div className="flex items-end justify-center w-full md:justify-start">
        <div className="relative w-2/4 mr-4 lg:w-full xl:w-1/2">
          <label htmlFor="hero-field" className="text-sm leading-7 text-gray-600">Placeholder</label>
          <input type="text" id="hero-field" name="hero-field" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-red-200 focus:bg-transparent focus:border-red-500"/>
        </div>
        <button className="inline-flex px-6 py-2 text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600">Button</button>
      </div>
      <p className="w-full mt-2 mb-8 text-sm text-gray-500">Neutra shabby chic ramps, viral fixie.</p>
      <div className="flex lg:flex-row md:flex-col">
        <button className="inline-flex items-center px-5 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>
          <span className="flex flex-col items-start ml-4 leading-none">
            <span className="mb-1 text-xs text-gray-600">GET IT ON</span>
            <span className="font-medium title-font">Google Play</span>
          </span>
        </button>
        <button className="inline-flex items-center px-5 py-3 mt-0 ml-4 bg-gray-100 rounded-lg lg:ml-4 md:ml-0 md:mt-4 lg:mt-0 hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg>
          <span className="flex flex-col items-start ml-4 leading-none">
            <span className="mb-1 text-xs text-gray-600">Download on the</span>
            <span className="font-medium title-font">App Store</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero