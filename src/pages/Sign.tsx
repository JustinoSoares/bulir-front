import bgLogin from '../assets/img/bg2.jpg'
//import Login from '../components/Login'
import Register from '../components/Register'

const Sign = () => {
  return (
    <div className='flex'>
      <div className=''>
        <img
          className='h-screen max-w-[50vw] object-cover'
          src={bgLogin}
          alt='Background Login'
        />
      </div>
     <Register />
    </div>
  )
}

export default Sign
