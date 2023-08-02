'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();


  return (
    <footer className=" body-font">
  <div className="container px-5 py-16 mx-auto border-t border-gray-800">
    <div className="flex flex-wrap order-first max-w-6xl mx-auto text-center md:text-left">
      
      <div className="w-full px-4 lg:w-1/3 md:w-1/2 ">
      <div className="flex items-center py-6 ">
             <Link href="/">
                    <Image src="/assets/loge.jpg" width={250} height={120} alt='logo'/>
                  </Link>
           
                </div>
                <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
                <Link href="/" className="text-red-500">ademsari41@hotmail.com</Link>

      </span>
      </div>
      <div className="w-full px-4 lg:w-1/3 md:w-1/2">
        <h2 className="mb-3 text-sm font-bold tracking-widest title-font">{t('Bağlantılar')}</h2>
        <nav className="mb-10 list-none">
          <li>
            <Link  href='/' className="text-gray-600 hover:text-gray-800">{t('Anasayfa')}</Link>
          </li>
          <li>
            <Link href='/about' className="text-gray-600 hover:text-gray-800">{t('Hakkımızda')}</Link>
          </li>
          <li>
            <Link href='/products' className="text-gray-600 hover:text-gray-800">{t('Ürünler')}</Link>
          </li>
         
          <li>
            <Link href='/contact' className="text-gray-600 hover:text-gray-800">{t('İletişim')}</Link>
          </li>
        </nav>
      </div>
      <div className="w-full px-4 lg:w-1/3 md:w-1/2">
        <h2 className="mb-3 text-sm font-bold tracking-widest title-font">{t('İletişim')}</h2>
        <div className="flex flex-wrap items-end justify-center xl:flex-nowrap md:flex-nowrap lg:flex-wrap md:justify-start">
          <div className="relative w-40 mr-2 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4">
            <form action={'https://getform.io/f/72e4b6a8-3479-4c9c-96ed-4a457b43b226'} method='POST' >
            <label htmlFor="footer-field" className="text-sm leading-7 text-gray-600">{t('Mesaj')}</label>
            
            <textarea  id="text" name="textarea" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:bg-transparent focus:ring-2 focus:ring-red-200 focus:border-red-500"/>
            
          <button type="submit" className="inline-flex flex-shrink-0 px-6 py-2 text-white bg-red-500 border-0 rounded lg:mt-2 xl:mt-0 focus:outline-none hover:bg-red-600">Gönder</button>
          
        </form>
          </div>
        </div>

        <p className="mt-2 text-sm text-center text-gray-500 md:text-left">{t('Fiyat almak için ')}
          <br className="hidden lg:block" />{t('iletişime geçiniz')}.
        </p>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container flex flex-col items-center px-5 py-6 mx-auto sm:flex-row">
    
      <p className="items-center mt-4 text-sm text-gray-700 sm:ml-6 sm:mt-0">© 2023 Enes-insaat 
      </p>
     
    </div>
  </div>
</footer>
  )
}

export default Footer