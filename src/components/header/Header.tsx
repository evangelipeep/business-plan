import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../button/Button'

export const Header = () => {
  const pVariants = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 100,
    },
  }

  return (
    <header className='bg-gradient-to-r from-white to-my-green'>
      <div className='mx-auto'>
        <nav className='flex justify-between items-center h-[60px] px-5 shadow-xl'>
          <NavLink
            className='cursor-pointer opacity-100 hover:opacity-70'
            to='/'
          >
            <motion.img
              src={'/images/logo.png'}
              initial={'hidden'}
              animate={'visible'}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              variants={pVariants}
            />
          </NavLink>
          <span>
            <ul className='flex wrap items-center space-x-4'>
              <motion.li
                className='hover:text-white '
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <NavLink to='/'>Главная</NavLink>
              </motion.li>
              <motion.li
                className='hover:text-white '
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <NavLink to='/calculator'>Калькулятор</NavLink>
              </motion.li>
              <motion.li
                className='hover:text-white '
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <NavLink to='/contacts'>Контакты</NavLink>
              </motion.li>
              <li>
                <NavLink to='/profile'>
                  <Button hasBorder={true} children='Профиль'></Button>
                </NavLink>
              </li>
            </ul>
          </span>
        </nav>
      </div>
    </header>
  )
}
