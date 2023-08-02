'use client'

import React from 'react'
import Image from 'next/image'
import styles from '../../styles/hero.module.css'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';
const Hero = () => {

  const { t } = useTranslation();

  return (

    <section className="">
   <div className={` ${styles.image_container}`}>
        <Image
          layout='fill'
            className="image1"
            src="/assets/bg.jpg"
            alt="background"
            quality={100}
            objectFit="cover" 
          />
        </div>
  <div className="flex flex-col items-center max-w-6xl px-5 py-24 mx-auto md:flex-row">
    <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
      <h1 className="mb-4 text-3xl font-medium text-red-500 title-font sm:text-4xl">{t('İnşaatın Vazgeçilmezi: Uygun Fiyatlı ve Yüksek Performanslı Yapı Malzemeleri')}
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 leading-relaxed">{t(`Merhaba! Biz, inşaat sektöründeki ihtiyaçlarınızı karşılamak için buradayız. Kalite ve güvenin adresi olarak, inşaat projelerinizin temel taşlarını oluşturan malzemeleri sunmak için çalışıyoruz. Geniş ürün yelpazemiz, rekabetçi fiyatlarımız ve uzman ekibimizle size en iyi hizmeti sunmayı hedefliyoruz. Yılların verdiği tecrübe ve güçlü tedarikçi ilişkilerimiz sayesinde, müşterilerimize güvenilir, dayanıklı ve sertifikalı yapı malzemeleri sunmaktan gurur duyuyoruz. İster büyük bir inşaat projesi yönetiyor olun, ister kişisel bir tadilat yapmak isteyin, ihtiyacınız olan tüm malzemeleri bizde bulabilirsiniz.`)}</p>
      <div className="flex justify-center">
        <Link href='/products' className="inline-flex px-6 py-2 text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600">{t('İncele')}</Link>
      </div>
    </div>
    <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
    <Image width={500} height={300} className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1574757987642-5755f0839101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxjb25zdHJ1Y3Rpb24lMjBtZXRhcmlhbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>

    </div>
  </div>
</section>
  )
}

export default Hero


