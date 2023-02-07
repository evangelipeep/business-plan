import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, Variants } from 'framer-motion'
import { Button } from '../button/Button'
import { ReactComponent as IconOpenMenu } from '../../assets/svg/icon-menu.svg'
import { ReactComponent as IconCloseMenu } from '../../assets/svg/icon-close-menu.svg'
import { ReactComponent as Logo } from '../../assets/svg/logo-nav.svg'
import { MobileNav } from '../mobile-nav/MobileNav'



export const Header = () => {

  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  
  const pVariants: Variants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 100, transition: {
        delay: 0.5,
        duration: 0.9,
      }
    },
  }
  const bVariants: Variants = {
    hidden:{ scale: 1.2 },
    visible: { scale: 0.9, transition: {
      type: 'spring', stiffness: 400, damping: 17 
    } },
  }

  return (
    
    
    
    <header className='bg-my-green'>
      
        <nav className='flex justify-between xl:justify-around items-center h-[60px] px-5 shadow-xl'>
      
          <NavLink to='/'>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={pVariants}>
                <Logo 
                className='h-5 w-[160px] md:h-8 xl:h-10'
                />
            </motion.div>
          </NavLink>

          <div>
            <ul className='hidden xl:flex wrap items-center space-x-4'>
              <motion.li
                className='hover:text-white '
                whileHover='hidden'
                whileTap='visible'
                variants={bVariants}
              >
                <NavLink to='/'>Главная</NavLink>
              </motion.li>
              <motion.li
                className='hover:text-white '
                whileHover='hidden'
                whileTap='visible'
                variants={bVariants}
                
              >
                <NavLink to='/calculator'>Калькулятор</NavLink>
              </motion.li>
              <motion.li
                className='hover:text-white '
                whileHover='hidden'
                whileTap='visible'
                variants={bVariants}
              >
                <NavLink to='/contacts'>Контакты</NavLink>
              </motion.li>
              <li>
                <NavLink to='/profile'>
                  <Button hasBorder={true} children='Профиль'></Button>
                </NavLink>
              </li>
            </ul>
            <div className='xl:hidden flex ml-auto cursor-pointer z-30'
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              {mobileNavOpen ? <IconCloseMenu/> : <IconOpenMenu/>}
              
            </div>
            <div>
            <MobileNav isOpen={mobileNavOpen}/>

            </div>
          </div>
            
        </nav>
        
      
    </header>
  )
}

