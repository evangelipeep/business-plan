import React from 'react'
import { NavLink } from 'react-router-dom'


export const MobileNav = ({isOpen = false}) => {
  return (
    <>
    <div
      className={`absolute mt-[60px] top-0 left-0 right-0 bg-black opacity-90 z-10 min-h-screen ${isOpen ? 'flex' : 'hidden'}`}/>
      
      <ul className={`absolute mt-[60px] top-0 left-0 right-0 z-20 ${isOpen ? 'flex' : 'hidden'}'`}>
        <li><NavLink to='/calculator'>Калькулятор</NavLink></li>
        <li><NavLink to='/contacts'>Контакты</NavLink></li>
        <li><NavLink to='/profile'>Профиль</NavLink></li>
      </ul>
      
    
    </>
    
  )
}
