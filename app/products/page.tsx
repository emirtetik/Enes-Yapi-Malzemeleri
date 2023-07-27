import React from 'react'
import ProductsCard from '../components/Products/ProductsCard'
import Image from 'next/image'
import styles from '../styles/product.module.css'
import ContactIcons from '../components/ContactIcons/ContactIcons'
const productsPage = () => {
  return (
    <div>
      <ContactIcons/>
       <div className={` ${styles.image_container}`}>
        <Image
          layout='fill'
            className="image1"
            src="https://www.tasdekorasyon.com.tr/wp-content/uploads/2020/04/1-Eski-Tu%C4%9Fla-Taba.jpg"
            alt="background"
            quality={100}
            objectFit="cover" 
          />
    </div>
      <div className="flex flex-col max-w-6xl mx-auto px-5 mt-8">
      <div className="h-1 overflow-hidden bg-gray-200 rounded w-2/5">
        <div className="w-24 h-full bg-red-500"></div>
      </div>
      <div className="flex flex-col flex-wrap py-6 mb-12 sm:flex-row">
        <h1 className="mb-2 text-6xl  text-red-500 sm:w-2/5 title-font font-bold sm:mb-0">Ürünler</h1>
        <p className="pl-0 text-base leading-relaxed sm:w-3/5 sm:pl-10">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
      </div>
    </div>
        <ProductsCard/>
        </div>
  )
}

export default productsPage