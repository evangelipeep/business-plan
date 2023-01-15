import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../button/Button'

export const Header = () => {
  const Logo = require('./../../images/logo.png')
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
    <nav className='flex justify-between items-center h-[60px] px-5 shadow-2xl bg-gradient-to-r from-white via-my-green to-white'>
      <NavLink to='/' className='cursor-pointer opacity-100 hover:opacity-70'>
        <motion.img
          src={Logo}
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
        <ul className='flex wrap items-center space-x-3'>
          <motion.li
            className='hover:text-my-green '
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <NavLink to='/'>Главная</NavLink>
          </motion.li>
          <motion.li
            className='hover:text-my-green '
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <NavLink to='/calculator'>Калькулятор</NavLink>
          </motion.li>
          <motion.li
            className='hover:text-my-green '
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <NavLink to='/contacts'>Контакты</NavLink>
          </motion.li>
          <li>
            <NavLink to='/profile'>
              <Button hasBorder={true}>Профиль</Button>
            </NavLink>
          </li>
        </ul>
      </span>
    </nav>
  )
}
