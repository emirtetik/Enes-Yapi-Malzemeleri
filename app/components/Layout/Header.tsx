'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import i18n from '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import ThemeButton from '../Button/ThemeButton/ThemeButton';
import Button from '../Button/MobileButton/Button';

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
    { name: t('Faaliyetlerimiz'), href: '/activities' },
    { name: t('İletişim'), href: '/contact' },
  ];

  return (
    <div>
      <header className='py-6 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <nav className='container flex items-center justify-between'>
          <div className="flex items-center ">
                  <Link href="/">
                    <h1 className="px-4 text-2xl font-medium">
                      Enes <span className="text-red-500">İnşaat</span>
                    </h1>
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
