export const GridEl = ({ text = '', img = '' }) => {
  return (
    <li
      className='flex justify-center items-center flex-col'
    >
      <img className='h-3/5 bg-black rounded-2xl' src={img} alt='image' />
      <span className='font-bold pt-5 text-center text-sm'>{text}</span>
    </li>
  )
}
