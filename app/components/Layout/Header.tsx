'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import i18n from '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import ThemeButton from '../ThemeButton/ThemeButton';

interface NavList {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const pathname = usePathname();
  const { t } = useTranslation();

  const changeLanguage = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    await i18n.changeLanguage(selectedLanguage);
  };
  
  const navList: NavList[] = [
    { name: t('Anasayfa'), href: '/' },
    { name: t('Hakkımızda'), href: '/about' },
    { name: t('Ürünler'), href: '/products' },
    { name: t('Faaliyetlerimiz'), href: '/business' },
    { name: t('İletişim'), href: '/contact' },
  ];

  return (
    <div>
      <header className='py-6 '>
        <nav className='container flex items-center justify-between'>
          <div>
             <span>Enes-İnsaat</span>
          </div>
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
      </nav>
      </header>
    </div>
  );
};

export default Header;
