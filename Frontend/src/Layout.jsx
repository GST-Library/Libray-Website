import NavBar from './Header'
import Footer from './Footer'
import { Outlet,ScrollRestoration } from 'react-router-dom'
// import Register from './Pages/Register'

function Layout() {
  return (
    <div className='scroll-smooth cursor-default'>
      <ScrollRestoration />
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
