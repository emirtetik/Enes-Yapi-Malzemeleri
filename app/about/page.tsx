'use client'
import React from 'react'
import ContactIcons from '../components/ContactIcons/ContactIcons'
import Image from 'next/image'
import styles from '../styles/about.module.css'
import {  FaUsers, FaBullseye } from 'react-icons/fa'
import { BiSolidTimeFive } from 'react-icons/bi'
import { useTranslation } from 'react-i18next';

const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center">
      <ContactIcons />
      <div className={`flex flex-wrap sm:grid lg:grid-cols-2 w-full max-w-6xl justify-center`}>
        <section className='mx-auto lg:m-10 lg:w-2/3 sm:max-w-none sm:m-0'>
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
        <section className={`flex flex-grow w-full ${styles.flex_container}`}>
          <div className="container py-12">
            <div className="relative flex pt-10 pb-20 mx-auto sm:items-center">
              <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-red-500 rounded-full sm:mt-0 title-font"></div>
              <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-red-500 bg-red-100 rounded-full">
                  <FaUsers size={40} />
                </div>
                <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                  <h2 className="mb-1 text-xl font-medium text-red-500 title-font">{t('Biz Kimiz')}</h2>
                  <p className="leading-relaxed">{t('Enes İnşaat ve Yapı Malzemeleri olarak, 1999 yılından beri içinde bulunduğumuz inşaat sektöründe çeyrek asırlık tecrübemizle sizlere hizmet sunmaktayız. Amacımız, yapmak istediğiniz projelerin yapım aşamasında malzeme teminini en hızlı ve en uygun şekilde sizlere ulaştırmaktır. Müşteri odaklı satış şeklimiz ve fiyat politikalarımız, müşteri beklentilerini karşılamak üzerine kuruludur.Çalışma hayatımız boyunca gerçekleştirdiğimiz inşaat projelerinde ve karşılaştığımız müşteri istek ve sorunlarından kazandığımız tecrübe, bizi tercih etmek isteyen müşterilerimize taleplerine en yakın teslimat ve ürün seçeneklerini sunabilmemizi sağlamaktadır. Her projede teslim ettiğimiz ürünü seçerken, biz de bu ürünü kendi evlerimizde kullanabilir miyiz diye düşünerek, satmaya hedeflediğimiz ürünlere karar vermekteyiz.Bu bağlamda, teslimat, ürün ve fiyat konusunda mümkün olduğunca ılımlı politikalar izlemeye çalışıyoruz. Müşterilerimizin memnuniyetini her zaman ön planda tutarak, kaliteli ürünleri uygun fiyatlarla sunma hedefimizi sürdürüyoruz.')}
                  </p>
                </div>
              </div>
            </div>


            <div className="relative flex pb-10 mx-auto sm:items-center">
              <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-red-500 rounded-full sm:mt-0 title-font"></div>
              <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-red-500 bg-red-100 rounded-full">
                  <BiSolidTimeFive size={40} />
                </div>
                <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                  <h2 className="mb-1 text-xl font-medium text-red-500 title-font">{t('Çalışma Saatlerimiz')}:</h2>
                  <p className="leading-relaxed"><span className='font-bold'>{t('Hafta içi')} : </span> 08.00 - 19.00</p>
                  <p className="leading-relaxed"><span className='font-bold'>{t('Hafta sonu')}: </span> 08.00 - 19.00 - {t('Pazar Tatil')}</p>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Page;
