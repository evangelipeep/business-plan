import { Button } from '../components/button/Button'

export const HomePage = () => {
  return (
    <div>
      <section className='my-52 text-center'>
        <h1 className='text-7xl'>Разработайте бизнес-план</h1>
        <h2 className='text-5xl'>Начните своё дело прямо сейчас!</h2>
        <button className='mt-12'>
          <Button isFilled={true}>ПОЕХАЛИ</Button>
        </button>
      </section>
    </div>
  )
}
