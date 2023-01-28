import { NavLink } from 'react-router-dom'
import { motion, Variants } from 'framer-motion'
import { Button } from '../button/Button'
import { MobileMenu } from '../mobile-menu/MobileMenu'
import { ReactComponent as Logo } from '../../assets/svg/logo-nav.svg'
import {ReactComponent as LogoMobile} from '../../assets/svg/logo-mobile.svg'

export const Header = () => {
  const pVariants: Variants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 100,
    },
  }
  const bVariants: Variants = {
    hidden:{ scale: 1.2 },
    visible: { scale: 0.9, transition: {
      delay: 0.5,
      duration: 0.9,
    } },
  }

  return (
    <header className='bg-my-green'>
      
        <nav className='flex justify-around items-center h-[60px] px-5 shadow-xl'>
          <NavLink
            className='cursor-pointer opacity-100 hover:opacity-70'
            to='/'
          >
            <motion.div
              initial='hidden'
              animate='visible'
              variants={pVariants}>
                <LogoMobile
                className='flex h-10 w-10 xl:hidden'/>
                <Logo 
                className='hidden xl:flex xl:h-10'
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
            <MobileMenu/>
          </div>
        </nav>
        
      
    </header>
  )
}
