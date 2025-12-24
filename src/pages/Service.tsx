import IconBulir from '../assets/img/logo.png'
import CardService from '../components/CardService'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Service = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='bg-[#ebfefa] min-h-screen px-20'>
        <header className='flex justify-between items-center py-6'>
          <div
            className='flex justify-center items-center  gap-2 cursor-pointer'
            onClick={() => navigate('/')}
          >
            <div className='w-11 h-11'>
              <img className='rounded-2xl' src={IconBulir} alt='Bulir Logos' />
            </div>
            <h1 className='text-black text-4xl font-bold'>Bulir</h1>
          </div>

          <ul className='flex gap-5 items-center'>
            <li>
              <a className='hover:underline' href='#'>
                Home
              </a>
            </li>
            <li>
              <a className='hover:underline' href='#'>
                Help
              </a>
            </li>
            <li>
              <a className='hover:underline' href='#'>
                More
              </a>
            </li>
            <li className='p-2 text-center text-white bg-[#28b39c] rounded-lg'>
              <a className='hover:underline' href='#'>
                Profile
              </a>
            </li>
          </ul>
        </header>

        <div className='py-10'>
          <h2 className='text-4xl font-bold mb-6'>Serviços</h2>
          <div className='flex flex-wrap gap-6 justify-center'>
            <CardService />
            <CardService />
            <CardService />
            <CardService />
            <CardService />
            <CardService />
            <CardService />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Service
