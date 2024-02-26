import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-3 text-xl '>
      <Link to='/' className='inline-flex items-center p-2 mr-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-10 h-10 mr-2 text-orange-500 fill-current'
          viewBox='0 0 24 24'
        >
          <path
            fill='current-color'
            d='M14.75 7.46L12 3.93l1.97-.39l2.74 3.53zm6.87-1.36l-.78-3.92l-3.93.78l2.74 3.54zM4.16 5.5l-.98.19a2.008 2.008 0 0 0-1.57 2.35L2 10l4.9-.97zm7.65 2.55L9.07 4.5l-1.97.41l2.75 3.53zM2 10v10a2 2 0 0 0 2 2h9.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V10zm15 12l5-3l-5-3z'
          />
        </svg>
        <span className='text-2xl font-bold tracking-wide text-white'>
          Movie Cover
        </span>
      </Link>

      <div className=' top-navbar' id='navigation'>
        <div className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
          <Link
            to='/'
            className='items-center justify-center w-full px-3 py-2 text-gray-100 rounded lg:inline-flex lg:w-auto hover:bg-orange-500 hover:text-white'
          >
            <span>Home</span>
          </Link>
          <Link
            to='/search'
            className='items-center justify-center w-full px-3 py-2 text-gray-100 rounded lg:inline-flex lg:w-auto hover:bg-orange-500 hover:text-white'
          >
            <span>Search</span>
          </Link>
          <Link
            to='/category'
            className='items-center justify-center w-full px-3 py-2 text-gray-100 rounded lg:inline-flex lg:w-auto hover:bg-orange-500 hover:text-white'
          >
            <span>Categorias</span>
          </Link>

          <Link
            to='/login'
            className='items-center justify-center w-full px-3 py-2 text-gray-100 rounded lg:inline-flex lg:w-auto hover:bg-orange-500 hover:text-white'
          >
            Logout
          </Link>
          <button className='items-center justify-center w-full px-3 py-2 rounded lg:inline-flex lg:w-auto'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='35'
              height='35'
              viewBox='0 0 24 24'
              className='text-orange-500 fill-current hover:text-orange-200'
            >
              <path
                fill='current-color'
                d='M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2'
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
