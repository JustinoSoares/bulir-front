import logo from '../assets/img/logo.png'
import Select from './Select'



const Register = () => {
  return (
    <div className='px-20 py-10 w-full max-h-dvh'>
      <div className='flex justify-start items-center  gap-2'>
        <div className='w-11 h-11'>
          <img className='rounded-2xl' src={logo} alt='Bulir Logos' />
        </div>
        <h1 className='text-black text-4xl font-bold'>Bulir</h1>
      </div>

      <div className='flex-wrap mt-4'>
        <small className='text-gray-400'>Register to create your account</small>
        <div className='mt-4'>
          <div className='max-w-[80%] border border-gray-400 p-1 rounded-2xl'>
            <input
              type='text'
              className='w-full p-3 h-full border-none outline-none'
              placeholder='Nome Completo'
            />
          </div>
          <div className='max-w-[80%] border border-gray-400 p-1 rounded-2xl mt-4'>
            <input
              type='email'
              className='w-full p-3 h-full border-none outline-none'
              placeholder='Email'
            />
          </div>
          <div className='max-w-[80%] border border-gray-400 p-1 rounded-2xl mt-4'>
            <input
              type='text'
              className='w-full p-3 h-full border-none outline-none'
              placeholder='Nif'
            />
          </div>
          <div className='max-w-[80%] border border-gray-400 p-1 rounded-2xl mt-4'>
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

        <div className='mt-5 max-w-[80%]'>
          <button className='bg-[#28b39c] w-full  text-white px-6 py-3 rounded-lg hover:bg-[#31ecc6]'>
            Registrar-se
          </button>
        </div>

        <div className='mt-6 max-w-[80%]'>
          <p className='text-gray-400'>
            Já tem uma conta?{' '}
            <span className='text-[#28b39c] hover:underline cursor-pointer'>
              Faça login
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
