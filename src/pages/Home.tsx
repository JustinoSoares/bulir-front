import logo from '../assets/img/logo.png'
import background from '../assets/img/bg1.webp'
import MagneticButton from '../components/MagneticButton'
import Carousal from '../components/Carousal'
import Footer from '../components/Footer'
import { useState } from 'react'

const Home = () => {
 const [isLoggedIn] = useState(() => {
  return !!localStorage.getItem('token')
})



  return (
    <div className='overflow-x-hidden font-sans'>
      <div className='relative h-dvh w-dvw '>
        <img
          src={background}
          className='object-cover h-dvh w-dvw'
          alt='Background'
        />
        <div className='flex  z-1 flex-col items-center md:items-start lg:items-start  px-10 lg:px-20 md:px-20 py-10 gap-10 md:gap-14 lg:gap-14 text-white absolute top-0 left-0 h-screen'>
          <div className='flex justify-center items-center  gap-2'>
            <div className='w-11 h-11'>
              <img className='rounded-2xl' src={logo} alt='Bulir Logos' />
            </div>
            <h1 className='text-white text-4xl font-bold'>Bulir</h1>
          </div>
          <div>
            <h2 className='text-white md:text-5xl text-center md:text-start text-3xl lg:text-start max-w-[550px] font-bold'>
              Conheça a nova forma de{' '}
              <span className='text-[#31ecc6]'>solicitar serviços</span> que vai
              mudar a vida de todos Angolanos
            </h2>
          </div>
          <div>
            <p className='text-white text-center md:text-start lg:text-start  max-w-[550px]'>
              Tornamos o processo de contratação – 10x mais rápido. Modernizamos
              o processo, ajudando pessoas a solicitar e encontrar prestadores
              de serviço de forma prática e segura.
            </p>
          </div>

          <MagneticButton
            navigateTo='/login'
            className='text-black font-semibold cursor-pointer hover:bg-[#28b39c]'
          >
            Começar Agora
          </MagneticButton>
        </div>
        <div className='absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)]'></div>
      </div>
      <section className='bg-[#ebfefa] p-20'>
        <Carousal />
        {isLoggedIn && (
          <div className='text-center'>
            <MagneticButton
              navigateTo='/services'
              className='mt-10 text-white bg-[#28b39c] font-semibold cursor-pointer hover:bg-[#31ecc6]'
            >
              Ver Todos os Serviços
            </MagneticButton>
          </div>
        )}
      </section>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
