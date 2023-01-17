import { GridEl } from './GridEl'

export const SectionOnHome3 = () => {
  return (
    <section className='border-t-2 bg-my-green'>
      <div className=' container mx-auto '>
        <h1 className='text-center py-5 font-bold text-lg'>
          Проект можно разработать в любой отрасли
        </h1>

        <ul className=' grid grid-cols-4 '>
          <GridEl
            text='Бизнес-план в сфере красоты'
            img='./../images/img-1.png'
          />
          <GridEl
            text='Бизнес-план в сфере
            швейной матерской'
            img='./../images/img-2.png'
          />
          <GridEl
            text='Бизнес-план в сфере 
            ремонта компьютеров'
            img='./../images/img-3.png'
          />
          <GridEl
            text='Бизнес-план в сфере фотоуслуг'
            img='./../images/img-4.png'
          />
          <GridEl text='Бизнес-план в сфере СТО' img='./../images/img-5.png' />
          <GridEl
            text='Бизнес-план в сфере 
            общественного питания'
            img='./../images/img-6.png'
          />
          <GridEl
            text='Бизнес-план в сфере обучения'
            img='./../images/img-7.png'
          />
          <GridEl text='И много других сфер' img='./../images/img-8.png' />
        </ul>
      </div>
    </section>
  )
}
