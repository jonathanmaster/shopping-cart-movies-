import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='fixed navbar bg-orange-950'>
      <div className='flex-1'>
        <Link to='/' className='inline-flex items-center p-2 mr-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-10 h-10 mr-2 text-orange-500 fill-current '
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
      </div>
      <div className='flex-none'>
        <Link
          to='/'
          className='items-center justify-center w-full px-3 py-2 text-gray-100 rounded lg:inline-flex lg:w-auto hover:bg-orange-500 hover:text-white hover:duration-500'
        >
          <span>Home</span>
        </Link>
        <Link
          to='/search'
          className='items-center justify-center w-full px-3 py-2 text-gray-100 rounded lg:inline-flex lg:w-auto hover:bg-orange-500 hover:text-white hover:duration-500'
        >
          <span>Search</span>
        </Link>
        <Link
          to='/category'
          className='items-center justify-center w-full px-3 py-2 text-gray-100 rounded lg:inline-flex lg:w-auto hover:bg-orange-500 hover:text-white hover:duration-500'
        >
          <span>Categorias</span>
        </Link>

        <Link
          to='/login'
          className='items-center justify-center w-full px-3 py-2 text-gray-100 rounded lg:inline-flex lg:w-auto hover:bg-orange-500 hover:text-white hover:duration-500'
        >
          Logout
        </Link>

        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='text-orange-500 h-9 w-9 hover:text-orange-200 hover:duration-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span className='badge badge-sm indicator-item'>8</span>
            </div>
          </div>

          {/* Lo que va adentro de la card */}
          <div
            tabIndex={0}
            className='mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow'
          >
            <div className='card-body'>
              <span className='text-lg font-bold'>8 Items</span>
              <span className='text-info'>Subtotal: $999</span>
              <div className='card-actions'>
                <button className='btn btn-primary btn-block'>View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
