import { motion } from 'framer-motion'

export const GridEl = ({ text = '', img = '' }) => {
  return (
    <motion.li
      className='flex  justify-center items-center flex-col'
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ['0%', '0%', '50%', '50%', '0%'],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <img className='h-4/6 bg-black rounded-2xl' src={img} alt='image' />
      <span className='font-bold pt-5'>{text}</span>
    </motion.li>
  )
}
