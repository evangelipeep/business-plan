import { motion } from 'framer-motion'
import { Button } from '../../components/button/Button'

export const SectionOnHome = () => {
  const pVariants = {
    hidden: {opacity: 0, scale: 0.5},
    visible: { opacity: 1, scale: 1 }
  }
  return (
    <section className=' mx-auto py-52 text-center w-max'>
      <motion.h1
        className='text-7xl'
        initial={'hidden'}
        animate={'visible'}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        variants={pVariants}
      >
        Разработайте бизнес-план
      </motion.h1>
      <motion.h2
        className='text-5xl'
        initial={'hidden'}
        animate={'visible'}
        transition={{
          duration: 0.8,
          delay: 0.6,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        variants={pVariants}
      >
        Начните своё дело прямо сейчас!
      </motion.h2>
      <button className='mt-32'>
        <Button isFilled={true} children='ПОЕХАЛИ'></Button>
      </button>
    </section>
  )
}
