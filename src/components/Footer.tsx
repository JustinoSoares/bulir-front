import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import LogoBulir from "./LogoBulir"

const Footer = () => {
  return (
         <footer className='bg-[#0c2340] text-white px-20 py-10'>
        <div className='flex justify-between'>
          <div className='flex flex-col '>
            <LogoBulir />
            <p className='mt-4 max-w-md'>
              <span className='font-bold'>
                Bulir<span className='rounded-2xl text-[#28b39c]'>.</span>
              </span>{' '}
              Aonde as necessidades são atendidas e as habilidades
              transformam-se em oportunidades.
            </p>
          </div>
          <div className='flex space-x-4'>
            <FaFacebook className='w-6 h-6 ' />
            <FaTwitter className='w-6 h-6 ' />
            <FaInstagram className='w-6 h-6 ' />
          </div>
        </div>
        <div className='w-full bg-white h-[1px] my-8'></div>

        <div className='flex justify-between items-center'>
          <small>
            &copy; {new Date().getFullYear()} Bulir. Todos os direitos
            reservados.
          </small>
          <div className='text-[11px]'>
            <ul className='flex space-x-4'>
              <li>
                <a className='hover:underline' href='#'>
                  Termos e condições
                </a>
              </li>
              <li>
                <a className='hover:underline' href='#'>
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    )
}

export default Footer