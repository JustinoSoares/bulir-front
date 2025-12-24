import {
  FaEnvelope,
  FaFingerprint,
  FaEdit,
  FaSearch
} from 'react-icons/fa'
import CardService from './CardService'
import FullScreenDialog from './FullscreenDialog'
import AddService from './Addservice'
import Requests from './Requests'

const UserProfile = () => {
  const userData = {
    owned_properties: [
      {
        id: 'prop_001',
        title: 'Appartement lumineux à Paris 11e',
        description: 'Magnifique appartement rénové avec goût',
        address: '25 Rue de la Folie Méricourt, 75011 Paris',
        monthly_price: 1500,
        area: 55,
        compartment_number: 3,
        main_image:
          'https://images.unsplash.com/photo-1560184897-3a8dd9f0f6f6?auto=format&fit=crop&w=800&q=80',
        other_images: [],
        location: ['48.8566'],
        owner_id: '7b1cbf05-d82c-434f-a94f-910d0ef25a13',
        town_id: 'paris_11',
        category_property_id: 'apartment',
        certified: false,
        status: 'free'
      },
      {
        id: 'prop_002',
        title: 'Maison familiale avec jardin',
        description: 'Spacieuse maison avec grand jardin',
        address: '4 Allée des Lilas, 69003 Lyon',
        monthly_price: 2000,
        area: 120,
        compartment_number: 5,
        main_image:
          'https://images.unsplash.com/photo-1505692794403-7be61049b66b?auto=format&fit=crop&w=800&q=80',
        other_images: [],
        location: ['45.7640'],
        owner_id: '7b1cbf05-d82c-434f-a94f-910d0ef25a13',
        town_id: 'lyon_03',
        category_property_id: 'house',
        certified: false,
        status: 'free'
      }
    ],
    active: true,
    username: 'admin',
    phone: '633554422',
    email: 'justinosoares@gmail.com',
    nif: '123456789',
    birthday: '2025-07-28',
    gender: 'M',
    role: 'user',
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=800&q=80',
    is_staff: false,
    town_id: 'f4f04501 6cd6 4e20 b442 012b3303a2de',
    town: null,
    reported_signals: [],
    offender_signals: [],
    favorites: [],
    subscriptions: []
  }

  return (
    <div className='min-h-screen bg-[#ebfefa]  py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='bg-white shadow-xl rounded-lg overflow-hidden'>
          <div
            className='bg-gradient-to-r from-[#ebfefa] to-[#28b39c] px-6 py-4'
          >
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <img
                  src={userData.image}
                  alt={userData.username}
                  className='w-20 h-20 rounded-full border-4 border-white'
                />
                <div className='ml-4 text-black'>
                  <h1 className='text-2xl font-bold'>{userData.username}</h1>
                </div>
              </div>
              <div className='flex gap-4'>
                {/* <button className='flex cursor-pointer items-center px-4 py-2 bg-white text-black rounded-lg hover:bg-blue-50 transition-colors duration-200'>
                  <FaEdit className='mr-2' />
                  Editar
                </button> */}
                <FullScreenDialog />
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
                  <span>{userData.email}</span>
                </div>
                <div className='flex items-center'>
                  <FaFingerprint className='text-gray-500 mr-2' />
                  <span>{userData.nif}</span>
                </div>
                <div>
                  <Requests />
                </div>
              </div>
            </div>
            <div>
                <AddService />
            </div>
          </div>

          <div className='border-t px-6 py-4'>
            <h2 className='text-xl font-semibold mb-4'>Meus serviços</h2>
            <div className='py-5'>
              <div className='flex items-center mb-4 '>
                <FaSearch className='mr-2 w-6 h-6 cursor-pointer' />
                <input
                  type='text'
                  className='border border-gray-300 w-[50%]  rounded-md px-2 py-1'
                />
              </div>
            </div>
            <div className='flex flex-wrap gap-4'>
              {userData.owned_properties.map(property => (
                <CardService key={property.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
