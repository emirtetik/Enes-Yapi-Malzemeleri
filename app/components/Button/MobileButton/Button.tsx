import React from 'react'
import {FaBuilding } from 'react-icons/fa'

interface ButtonProps{
    onClick: () => void
}
export default function Button ({onClick}: ButtonProps)  {

  return (
    <button
       onClick={onClick}
       type='button'
      
    >
     <FaBuilding  className="w-6 h-6 "/>
    </button>
  )
}
