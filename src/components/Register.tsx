import logo from '../assets/img/logo.png'
import SelectAutoWidth from './Select'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../services/createUser'
import { useState } from 'react'
import { toast } from 'react-toastify'

type Props = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const Register = ({ setIsLogin }: Props) => {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [nif, setNif] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleRegister = async () => {
    try {
      const payload = {
        full_name: fullName,
        nif,
        email,
        user_type: userType,
        password
      }

      if (!fullName || !nif || !email || !password || !userType) {
        setError('Por favor, preencha todos os campos.')
        return
      }
      setLoading(true)
      const response = await createUser(payload)
      if ('message' in response) {
        toast.error(`Erro: ${response.message}`)
        return
      }
      toast.success('Usuário criado com sucesso!')
      navigate('/')
    } catch (error) {
      console.error('Error creating user:', error)
      setError(error.response.data.message || 'Erro ao criar usuário. Por favor, tente novamente.')
      toast.error(error.response.data.message || 'Erro ao criar usuário. Por favor, tente novamente.')
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <div className='px-20 py-10 w-full max-h-dvh'>
      <div
        className='flex justify-start items-center cursor-pointer  gap-2'
        onClick={() => navigate('/')}
      >
        <div className='w-11 h-11'>
          <img className='rounded-2xl' src={logo} alt='Bulir Logos' />
        </div>
        <h1 className='text-black text-4xl font-bold'>Bulir</h1>
      </div>

      <div className='flex-wrap mt-4'>
        <small className='text-gray-400'>Register to create your account</small>
        <div className='mt-4'>
          <div className='max-w-[100%] border border-gray-400 p-1 rounded-2xl'>
            <input
              type='text'
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              className='w-full p-3 h-full border-none outline-none'
              placeholder='Nome Completo'
            />
          </div>
          <div className='max-w-[100%] border border-gray-400 p-1 rounded-2xl mt-4'>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type='email'
              className='w-full p-3 h-full border-none outline-none'
              placeholder='Email'
            />
          </div>
          <div className='max-w-[100%] border border-gray-400 p-1 rounded-2xl mt-4'>
            <input
              type='text'
              value={nif}
              onChange={e => setNif(e.target.value)}
              className='w-full p-3 h-full border-none outline-none'
              placeholder='Nif'
            />
          </div>
          <div className='max-w-[100%] border border-gray-400 p-1 rounded-2xl mt-4'>
            <input
              type='text'
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='w-full p-3 h-full border-none outline-none'
              placeholder='password'
            />
          </div>
          <div className='mt-4'>
            <SelectAutoWidth value={userType} onChange={setUserType} />
          </div>
        </div>

        <div className='mt-5 max-w-[100%]'>
          <button
            disabled={loading}
            onClick={handleRegister}
            className='bg-[#28b39c] w-full  text-white px-6 py-3 rounded-lg hover:bg-[#31ecc6]'
          >
            {loading ? 'Registrando...' : 'Registrar-se'}
          </button>
        </div>
        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

        <div className='mt-1 max-w-[80%]'>
          <p className='text-gray-400 text-sm'>
            Já tem uma conta?{' '}
            <span
              className='text-[#28b39c] hover:underline cursor-pointer'
              onClick={() => setIsLogin(true)}
            >
              Faça login aqui
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
