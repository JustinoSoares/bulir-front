import {
  FaEnvelope,
  FaFingerprint,
  FaMoneyBillWave,
} from 'react-icons/fa'
import CardService from './CardService'
import FullScreenDialog from './FullscreenDialog'
import AddService from './Addservice'
import { useEffect } from 'react'
import { useState } from 'react'
import { api } from '../services/api'
import withOutPhoto from '../assets/img/images.jpeg'
import { useNavigate } from 'react-router-dom'
import type { TokenPayload, User, MyServivesType } from '../types'
import { jwtDecode } from 'jwt-decode'
import Dialog from './Dialog'

const UserProfile = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState<User | null>(null)
  const [services, setServices] = useState<MyServivesType[]>([])
  const [tokenPayload, setTokenPayload] = useState<TokenPayload | null>(null)
  const [dialogOutpen, setDialogOpen] = useState(false)

  const formattedBalance = (balance: number) => {
    return balance.toLocaleString('pt-AO', {
      style: 'currency',
      currency: 'AOA'
    })
  }

  const dataDialog = {
    title: 'Confirmar Logout',
    description: `Tem certeza que deseja sair da sua conta?`,
    textButton: 'Sair',
    className:
      'flex font-semibold text-red-500 cursor-pointer items-center px-4 py-2 bg-white rounded-lg hover:bg-blue-50 transition-colors duration-200',
    openDialog: dialogOutpen,
    action: async () => {
      localStorage.removeItem('token')
      navigate('/')
    },
    onClose: () => {
      setDialogOpen(false)
    }
  }
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token')

      if (token) {
        const decoded = jwtDecode<TokenPayload>(token)
        setTokenPayload(decoded)
      }
      try {
        const token = localStorage.getItem('token')
        const response = await api.get<User>('/user/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setUserData(response.data)
        try {
          const servicesResponse = await api.get<MyServivesType[]>(
            `/service/by/user/${response.data.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          )
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
  }, [navigate])
  return (
    <div className='min-h-screen bg-[#ebfefa]  py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='bg-white shadow-xl rounded-lg overflow-hidden'>
          <div className='bg-gradient-to-r from-[#ebfefa] to-[#28b39c] px-6 py-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center cursor-pointer'>
                <img
                  onClick={() => navigate('/')}
                  src={withOutPhoto}
                  alt={userData?.full_name || 'User'}
                  className='w-20 h-20 rounded-full border-4 border-white'
                />
                <div className='ml-4 text-black'>
                  <h1 className='text-2xl font-bold'>{userData?.full_name}</h1>
                </div>
              </div>

              <div className='flex gap-4'>
                <FullScreenDialog />
                <Dialog {...dataDialog} />
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center pr-10'>
            {' '}
            <div className='px-6 py-4'>
              <h2 className='text-xl font-semibold mb-4'>
                Informações Pessoais
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-1 gap-4'>
                <div className='flex items-center'>
                  <FaEnvelope className='text-gray-500 mr-2' />
                  <span>{userData?.email}</span>
                </div>
                <div className='flex items-center'>
                  <FaFingerprint className='text-gray-500 mr-2' />
                  <span>{userData?.nif}</span>
                </div>

                <div className='flex items-center'>
                  <FaMoneyBillWave className='text-gray-500 mr-2' />
                  <span>{formattedBalance(userData?.balance || 0)}</span>
                </div>
                
              </div>
            </div>
            {tokenPayload?.user_type === 'servicer' && (
              <>
                <div>
                  <AddService />
                </div>
              </>
            )}
          </div>
          {tokenPayload?.user_type === 'servicer' && (
            <div className='border-t px-6 py-4'>
              <h2 className='text-xl font-semibold mb-4 text-center'>
                Meus serviços
              </h2>

              <div className='flex flex-wrap justify-center gap-4'>
                {services.map(service => (
                  <CardService {...service} key={service.id} />
                ))}
              </div>
            </div>
          )}{' '}
          :{' '}
         
        </div>
      </div>
    </div>
  )
}

export default UserProfile
