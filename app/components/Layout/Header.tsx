'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import i18n from '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import ThemeButton from '../Button/ThemeButton/ThemeButton';
import Button from '../Button/MobileButton/Button';
import { FaWhatsapp,FaPhone } from 'react-icons/fa';

interface NavList {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [openMobile, setOpenMobile] = React.useState(false);


  const handleMobileToogle = () => {
     setOpenMobile(!openMobile);
  }

  const changeLanguage = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    await i18n.changeLanguage(selectedLanguage);
  };
  
  const navList: NavList[] = [
    { name: t('Anasayfa'), href: '/' },
    { name: t('Hakkımızda'), href: '/about' },
    { name: t('Ürünler'), href: '/products' },
    { name: t('İletişim'), href: '/contact' },
  ];

  return (
    <div>
        <div className="flex justify-end items-center bg-gray-300 py-1">
        <div className="mr-2 text-red-500 font-bold">0544 441 441 33</div>
        <Link href="https://web.whatsapp.com/send?phone=5394480527"
       target="_blank" rel="noopener noreferrer" className="text-green-500 mr-0 sm:mr-56">
        <FaWhatsapp size={24} />
      </Link>
     
      </div>

      <header className='py-6 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <nav className='container flex items-center justify-between'>
          <div className="flex items-center ">
                  <Link href="/">
                    <Image src="/assets/loge.jpg" width={180} height={100} alt='logo'/>
                  </Link>
                </div>

              
          
          <div className='hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center'>
       <ul className='flex gap-5 '>
        {navList.map((link, index) => (
          <li key={index}>
            <Link href={link.href}  className={pathname === link.href ? 'text-red-500 font-bold' : ''}>
                {link.name}
            </Link>
          </li>
        ))}
         <select onChange={changeLanguage} value={i18n.language}>
        <option value="tr">TR</option>
        <option value="en">EN</option>
        <option value="ar">AR</option>
      </select>
      <ThemeButton/>
      
      </ul>
      </div>
      <div className="flex items-center px-4 space-x-4 sm:hidden">
            <select onChange={changeLanguage} value={i18n.language} className="pt-2 pb-2">
              <option value="tr">TR</option>
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
            <ThemeButton />
            <Button onClick={handleMobileToogle} />
          </div>
      </nav>
     
      {
        openMobile && (
          <div className='flex items-center justify-center pt-4 border-b border-gray-700 sm:hidden '>
              
              <ul className="grid gap-4 pt-4 pb-2 ">
              {navList.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className={pathname === link.href ? 'text-red-500 font-bold' : ''}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
           
          
          </div>
        )
      }
      </header>
    </div>
  );
};

export default Header;
