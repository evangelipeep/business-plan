import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

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
    <nav className='flex justify-between items-center h-[60px] px-5 shadow-md bg-gray-50'>
      <NavLink to='/' className='active:bg-emerald-500'>
        <motion.img
          src={''}
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
        <NavLink to='/calculator' className='mr-2 active:bg-emerald-500'>
          Калькулятор
        </NavLink>
        <NavLink to='/contacts' className='mr-2 active:bg-emerald-500'>
          Контакты
        </NavLink>
        <NavLink to='/profile' className='mr-2 active:bg-emerald-500'>
          Профиль
        </NavLink>
      </span>
    </nav>
  )
}
