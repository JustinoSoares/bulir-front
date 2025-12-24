import logo from '../assets/img/logo.png'
import Select from './Select'
import { useNavigate } from 'react-router-dom'

type Props = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const Register = ({ setIsLogin }: Props) => {
    const navigate = useNavigate();
  return (
    <div className='px-20 py-10 w-full max-h-dvh'>
      <div className='flex justify-start items-center cursor-pointer  gap-2'
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
              className='w-full p-3 h-full border-none outline-none'
              placeholder='Nome Completo'
            />
          </div>
          <div className='max-w-[100%] border border-gray-400 p-1 rounded-2xl mt-4'>
            <input
              type='email'
              className='w-full p-3 h-full border-none outline-none'
              placeholder='Email'
            />
          </div>
          <div className='max-w-[100%] border border-gray-400 p-1 rounded-2xl mt-4'>
            <input
              type='text'
              className='w-full p-3 h-full border-none outline-none'
              placeholder='Nif'
            />
          </div>
          <div className='max-w-[100%] border border-gray-400 p-1 rounded-2xl mt-4'>
            <input
              type='text'
              className='w-full p-3 h-full border-none outline-none'
              placeholder='password'
            />
          </div>
          <div className='mt-4'>
            <Select />
          </div>
        </div>

        <div className='mt-5 max-w-[100%]'>
          <button className='bg-[#28b39c] w-full  text-white px-6 py-3 rounded-lg hover:bg-[#31ecc6]'>
            Registrar-se
          </button>
        </div>

        <div className='mt-6 max-w-[80%]'>
         <p className='text-gray-400 text-sm'>
            Já tem uma conta?{' '}
            <span className='text-[#28b39c] hover:underline cursor-pointer'
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
