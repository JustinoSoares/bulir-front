import logo from '../assets/img/logo.png'


const Login = () => {
  return (
     <div className='px-20 py-10 w-full'>
        <div className='flex justify-start items-center  gap-2'>
          <div className='w-11 h-11'>
            <img className='rounded-2xl' src={logo} alt='Bulir Logos' />
          </div>
          <h1 className='text-black text-4xl font-bold'>Bulir</h1>
        </div>
        <h2 className='text-black text-3xl  max-w-[550px] font-bold my-10'>
          Hello, Wellcome Back! Please enter your details.
        </h2>

        <div>
          <small className='text-gray-400'>Login to manage your account</small>
          <div className='mt-4'>
            <div className='max-w-[80%] border border-gray-400 p-1 rounded-2xl'>
              <input
                type='text'
                className='w-full p-3 h-full border-none outline-none'
                placeholder='exemplo@gmail.com'
              />
            </div>
            <div className='max-w-[80%] border border-gray-400 p-1 rounded-2xl mt-4'>
              <input
                type='password'
                className='w-full p-3 h-full border-none outline-none'
                placeholder='*********'
              />
            </div>
            <div className='flex justify-between items-center max-w-[80%] mt-2'>
              <label className='text-gray-400 flex items-center gap-1 cursor-pointer'>
                <input type='checkbox' />
                <span>ver senha</span>
              </label>

              <small className='text-gray-400 hover:underline cursor-pointer'>
                Esqueceu a senha?
              </small>
            </div>
          </div>

          <div className='mt-5 max-w-[80%]'>
            <button className='bg-[#28b39c] w-full  text-white px-6 py-3 rounded-lg hover:bg-[#31ecc6]'>
              Login
            </button>
          </div>

            <div className='mt-6 max-w-[80%]'>
                <p className='text-gray-400'>
                    Não tem uma conta?{' '}
                    <span className='text-[#28b39c] hover:underline cursor-pointer'>
                      Registre-se
                    </span>
                </p>
            </div>
        </div>
      </div>
    
    );
};

export default Login;