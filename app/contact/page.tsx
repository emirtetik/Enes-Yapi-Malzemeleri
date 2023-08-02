'use client'
import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import {useTranslation} from 'react-i18next';
const Page = () => {
  const {t} = useTranslation();
  return (
    <div>
      <div className="w-full h-80">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544419.7942408707!2d28.379271170161417!3d40.884054443801574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4127dfa31c6b%3A0x81903de66cc98636!2sEnes%20%C4%B0n%C5%9Faat%20Malzemeleri!5e0!3m2!1str!2str!4v1690568059992!5m2!1str!2str"
          style={{ filter: "grayscale(0.7) contrast(1.1)", opacity: 0.7 }}
        ></iframe>
      </div>
      <div className="flex flex-col max-w-6xl px-5 mx-auto mt-8">
      <div className="w-2/5 h-1 overflow-hidden bg-gray-200 rounded">
        <div className="w-full h-full bg-red-500"></div>
      </div>
      <div className="flex flex-col flex-wrap py-6 mb-12 sm:flex-row">
        <h1 className="mb-2 text-6xl font-bold text-red-500 sm:w-2/5 title-font sm:mb-0">{t('İletişim')}</h1>
        <p className="pl-0 text-base leading-relaxed sm:w-3/5 sm:pl-10">{t('Bizimle iletişime geçin ve Enes İnşaat ile hayalinizdeki projeyi gerçekleştirmek için adım atın. Profesyonel ekibimiz size yardımcı olmaktan mutluluk duyacaktır')}.</p>
      </div>
    </div>
      <ContactForm />
    </div>
  );
};

export default Page;
