'use client'
import React from 'react'
import Link from 'next/link'
import i18n from '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();


  return (
    <footer className=" body-font">
  <div className="container px-5 py-24 mx-auto border-t border-gray-800">
    <div className="flex flex-wrap order-first text-center md:text-left">
      
      <div className="w-full px-4 lg:w-1/3 md:w-1/2   ">
      <div className="flex   py-6  items-center ">
                  <Link href="/">
                    <h1 className="px-4 text-2xl font-medium">
                    <span className="text-red-500">   Enes</span> İnşaat
                    </h1>
                  </Link>
           
                </div>
                <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
        <Link href={'/'}  className="text-gray-500">
        </Link>
        <Link href={'/'} className="ml-3 text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </Link>
        <Link href={'/'} className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </Link>
        <Link href={'/'} className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </Link>
      </span>
      </div>
      <div className="w-full px-4 lg:w-1/3 md:w-1/2">
        <h2 className="mb-3 text-sm font-bold tracking-widest  title-font">Bağlantılar</h2>
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
            <Link href='/activities' className="text-gray-600 hover:text-gray-800">{t('Faaliyetlerimiz')}</Link>
          </li>
          <li>
            <Link href='/contact' className="text-gray-600 hover:text-gray-800">{t('İletişim')}</Link>
          </li>
        </nav>
      </div>
      <div className="w-full px-4 lg:w-1/3 md:w-1/2">
        <h2 className="mb-3 text-sm font-bold tracking-widest  title-font">İletişim</h2>
        <div className="flex flex-wrap items-end justify-center xl:flex-nowrap md:flex-nowrap lg:flex-wrap md:justify-start">
          <div className="relative w-40 mr-2 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4">
            <form action="">
            <label htmlFor="footer-field" className="text-sm leading-7 text-gray-600">Mesaj</label>
            <textarea  id="text" name="textarea" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:bg-transparent focus:ring-2 focus:ring-red-200 focus:border-red-500"/>
            
          <button type="submit" className="inline-flex flex-shrink-0 px-6 py-2 text-white bg-red-500 border-0 rounded lg:mt-2 xl:mt-0 focus:outline-none hover:bg-red-600">Gönder</button>
          
        </form>
          </div>
        </div>

        <p className="mt-2 text-sm text-center text-gray-500 md:text-left">Fiyat almak için 
          <br className="hidden lg:block" />iletişime geçiniz.
        </p>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container flex flex-col items-center px-5 py-6 mx-auto sm:flex-row">
    
      <p className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0">© 2023 Enes-insaat 
      </p>
     
    </div>
  </div>
</footer>
  )
}

export default Footer