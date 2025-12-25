import IconBulir from '../assets/img/logo.png'
import CardService from '../components/CardService'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { FaSearch } from 'react-icons/fa'
import { toast } from 'react-toastify'
import AlertDialog from '../components/Dialog'

type MyServivesType = {
  id: string
  name: string
  description: string
  price: number
  userId: string
  createdAt: string
}

const Service = () => {
  const navigate = useNavigate()
  const [services, setServices] = useState<MyServivesType[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          toast.error('Usuário não autenticado')
          navigate('/')
          return
        }
        let endpoint = `/service/all`
        if (searchTerm) {
          endpoint += `?name=${encodeURIComponent(searchTerm)}`
        }

        try {
          const servicesResponse = await api.get<MyServivesType[]>(endpoint, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          setServices(servicesResponse.data)
        } catch (error) {
          console.error('Erro ao buscar serviços do usuário:', error)
          setServices([])
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error)
        navigate('/')
      }
    }
    fetchUserData()
  }, [navigate, searchTerm])
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
              <a className='font-semibold hover:underline' href='#'>
                Home
              </a>
            </li>

            <li>
              <a className='font-semibold underline text-[#28b39c]' href='#'>
                Serviços
              </a>
            </li>
            <li>
              <a className='font-semibold hover:underline' href='#'>
                Help
              </a>
            </li>
            <li>
              <a className='font-semibold hover:underline' href='#'>
                More
              </a>
            </li>
            <li
              className='p-2 text-center text-white bg-[#28b39c] rounded-lg'
              onClick={() => {
                if (localStorage.getItem('token')) navigate('/profile')
                else navigate('/login')
              }}
            >
              <a className='font-semibold hover:underline' href='#'>
                Profile
              </a>
            </li>
          </ul>
        </header>

        <div className='py-10 '>
          <label className='border flex items-center w-full rounded-2xl border-gray-400 mb-10 h-12 p-1'>
            <FaSearch className='w-5 h-5 m-2 text-gray-400' />
            <input
              onChange={e => setSearchTerm(e.target.value)}
              type='text'
              className='w-[90%] p-1 h-full outline-none'
              placeholder='Pesquisar serviços...'
            />
          </label>
          {services.length === 0 ? (
            <div className='text-center text-gray-500 mt-20'>
              Nenhum serviço encontrado.
            </div>
          ) : null}
          <div className='flex flex-wrap gap-6 justify-center'>
            {services.map(service => (
              <CardService key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Service
