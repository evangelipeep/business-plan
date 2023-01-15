import { Button } from '../components/button/Button'
import { motion } from 'framer-motion'

export const HomePage = () => {
  return (
    <div className='bg-gradient-to-r from-my-green via-white to-my-green'>
      <section className='py-52 text-center '>
        <motion.h1
          className='text-7xl'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Разработайте бизнес-план
        </motion.h1>
        <motion.h2
          className='text-5xl'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Начните своё дело прямо сейчас!
        </motion.h2>
        <button className='mt-10'>
          <Button isFilled={true}>ПОЕХАЛИ</Button>
        </button>
      </section>
      <div className='flex border-y-2 border-my-green-2 bg-slate-50 '>
        <section className='mx-auto py-12 space-y-3 w-3/4 text-lg'>
          <p>
            <strong>Бизнес план</strong> – это документ, который отвечает на все
            вопросы, связанные с вашим бизнесом и дает исчерпывающие
            представление о показателях компании в долгосрочной и краткосрочной
            перспективе и его можно редактировать наряду с изменением текущих
            планов и стратегий.
          </p>
          <p>
            В отличие от пособий, главная задача социального контракта – помочь
            людям преодолеть трудности и выйти на стабильный доход. Одно из
            направлений социального контракта - помощь гражданину в
            осуществление индивидуальной предпринимательской деятельности с
            возможности обучения или переобучения, а также возможна реализация
            социального контракта по направлению ЛПХ.
          </p>
          <p>
            <strong>Граждане РФ имеют право на поддержку</strong> собственного
            дела путём подписания социального контракта и получения финансовой
            поддержки на развитие в размере от 100 000 рублей до 300 000 рублей
            в зависимости от региона.
          </p>
          <p className='font-bold'>
            Также любой гражданин имеет право на единовременную финансовую
            помощь для развития собственного дела от центра занятости.
          </p>
          <p>Обе субсидии можно получить одновременно.</p>
        </section>
      </div>
    </div>
  )
}
