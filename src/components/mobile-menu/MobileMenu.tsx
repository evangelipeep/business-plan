import { ReactComponent as IconMenu } from '../../assets/svg/icon-menu.svg'

export const MobileMenu = () => {
  return (
    <div className='xl:hidden flex ml-auto cursor-pointer z-30'>
      <IconMenu/>
    </div>
  )
}
