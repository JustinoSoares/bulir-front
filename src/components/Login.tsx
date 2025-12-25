import logo from '../assets/img/logo.png'
import { useNavigate } from 'react-router-dom'
import {  useState } from 'react'
import { login } from '../services/auth'
import { api } from '../services/api'
import { useEffect } from 'react'

type Props = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({ setIsLogin }: Props) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/profile')
    }
  }, [navigate])

  async function handleLogin () {

    try {
      setLoading(true)
      setError(null)

      const data = await login({ username, password })
      // 🔐 salvar no localStorage
      localStorage.setItem('token', data.token)
      // opcional: setar token no axios
      api.defaults.headers.common.Authorization = `Bearer ${data.token}`
      navigate('/profile')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao fazer login')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20 py-10'>
      <div className='w-full max-w-md sm:max-w-lg lg:max-w-xl'>
        {/* Logo */}
        <div
          className='flex items-center gap-2 mb-8 cursor-pointer'
          onClick={() => navigate('/')}
        >
          <div className='w-10 h-10 sm:w-11 sm:h-11'>
            <img className='rounded-2xl' src={logo} alt='Bulir Logos' />
          </div>
          <h1 className='text-2xl sm:text-3xl font-bold'>Bulir</h1>
        </div>

        {/* Title */}
        <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-6'>
          Hello, Welcome Back!
        </h2>

        <small className='text-gray-400 block mb-4'>
          Login to manage your account
        </small>

        {/* Form */}
        <div className='space-y-4'>
          <div className='border border-gray-300 p-1 rounded-2xl'>
            <input
              type='text'
              value={username}
              className='w-full p-3 outline-none'
              onChange={(e) => {setUsername(e.target.value)}}
              placeholder='exemplo@gmail.com'
            />
          </div>

          <div className='border border-gray-300 p-1 rounded-2xl'>
            <input
              type={visible ? 'text' : 'password'}
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
              className='w-full p-3 outline-none'
              placeholder='*********'
            />
          </div>

          <div className='flex justify-between items-center text-sm'>
            <label className='text-gray-400 flex items-center gap-1 cursor-pointer'>
              <input 
              type='checkbox'
              checked={visible}
              onChange={() => setVisible(!visible)}
              />
              <span>ver senha</span>
            </label>

            <span className='text-gray-400 hover:underline cursor-pointer'>
              Esqueceu a senha?
            </span>
          </div>

          <button 
            onClick={handleLogin}
            disabled={loading}
          className='bg-[#28b39c] w-full text-white py-3 rounded-lg hover:bg-[#31ecc6] transition'>
            {loading ? 'Entrando...' : 'Login'}
          </button>

          {error && <p className='text-red-500 text-sm'>{error}</p>}
          <p className='text-gray-400 text-sm'>
            Não tem uma conta?{' '}
            <span
              className='text-[#28b39c] hover:underline cursor-pointer'
              onClick={() => setIsLogin(false)}
            >
              Registre-se
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
