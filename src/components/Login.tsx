import logo from '../assets/img/logo.png'
import { useNavigate } from 'react-router-dom'

type Props = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({ setIsLogin  }: Props) => {
    const navigate = useNavigate();
  return (
    <div className='w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20 py-10'>
      <div className='w-full max-w-md sm:max-w-lg lg:max-w-xl'>
        {/* Logo */}
        <div className='flex items-center gap-2 mb-8 cursor-pointer'
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
              className='w-full p-3 outline-none'
              placeholder='exemplo@gmail.com'
            />
          </div>

          <div className='border border-gray-300 p-1 rounded-2xl'>
            <input
              type='password'
              className='w-full p-3 outline-none'
              placeholder='*********'
            />
          </div>

          <div className='flex justify-between items-center text-sm'>
            <label className='text-gray-400 flex items-center gap-1 cursor-pointer'>
              <input type='checkbox' />
              <span>ver senha</span>
            </label>

            <span className='text-gray-400 hover:underline cursor-pointer'>
              Esqueceu a senha?
            </span>
          </div>

          <button className='bg-[#28b39c] w-full text-white py-3 rounded-lg hover:bg-[#31ecc6] transition'>
            Login
          </button>

          <p className='text-gray-400 text-sm'>
            Não tem uma conta?{' '}
            <span className='text-[#28b39c] hover:underline cursor-pointer'
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
