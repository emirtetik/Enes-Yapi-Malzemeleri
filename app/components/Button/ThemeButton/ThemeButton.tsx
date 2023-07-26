'use client'
import React, {useState, useEffect} from 'react'
import { useTheme } from 'next-themes'
import {MdDarkMode, MdLightMode} from 'react-icons/md'

const ThemeButton = () => {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    },[])

    if (!mounted) {
        return null
        
    }
  return (

    <button className='flex items-center justify-center rounded-lg'
     aria-label='Toggle Dark Mode' 
     type='button'
     onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>

      {theme === 'dark' ?

      (<MdLightMode className='w-5 h-5 text-orange-300'/>
      ):(
      <MdDarkMode className='w-5 h-5 text-slate-800'/>) }

    </button>
  )
}

export default ThemeButton