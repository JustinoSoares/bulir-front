import bgLogin from '../assets/img/bg2.jpg'
import Login from '../components/Login'
import { useState } from 'react'

//import Login from '../components/Login'
import Register from '../components/Register'

const Sign = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <div className='flex'>
        <div className='hidden md:block'>
          <img
            className='h-screen max-w-[50vw] object-cover'
            src={bgLogin}
            alt='Background Login'
          />
        </div>
        {isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />}
      </div>
    </div>
  )
}

export default Sign
