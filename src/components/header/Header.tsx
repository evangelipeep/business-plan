import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

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
    <nav className='flex justify-between items-center h-[60px] px-5 shadow-md bg-gray-50'>
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
        <ul className='flex wrap'>
          <motion.li
            className='hover:text-my-green '
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <NavLink to='/calculator' className='mr-3 '>
              Калькулятор
            </NavLink>
          </motion.li>
          <motion.li
            className='hover:text-my-green '
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <NavLink to='/contacts' className='mr-3 '>
              Контакты
            </NavLink>
          </motion.li>
          <motion.li
            className='hover:text-my-green '
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <NavLink to='/profile' className='mr-3 '>
              Профиль
            </NavLink>
          </motion.li>
        </ul>
      </span>
    </nav>
  )
}
