import { Outlet } from 'react-router-dom'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'

export const Layout = () => {
  return (
    <>
      <Header />
      <main className='bg-gradient-to-r from-my-green to-white mx-auto'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
