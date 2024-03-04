/* eslint-disable react/prop-types */
import { Raiting, Similar } from '../../globalComponents/components'
import '../../index.css'

export const DataMovie = ({ info }) => {
  return (
    <main
      style={{
        backgroundImage: `url(${`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${info.backdrop_path}`})`,
      }}
      className='relative w-full min-h-screen bg-center bg-no-repeat fondo-daycard'
    >
      <aside className='relative flex p-5 text-white gap-x-10'>
        <div>
          <img
            src={`https://media.themoviedb.org/t/p/w220_and_h330_face${info.poster_path}`}
            alt={info.title}
            className='rounded h-96 w-[450px]'
          />
          <div className='flex justify-center mt-3 gap-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='text-orange-500 h-9 w-9 hover:text-orange-200 hover:duration-500'
              stroke='currentColor'
            >
              <path
                fill='current-color'
                d='M11.98 19.094q-.292 0-.577-.106t-.503-.323L9.752 17.63q-2.67-2.425-4.71-4.717Q3 10.622 3 8.15q0-1.908 1.296-3.204Q5.592 3.65 7.5 3.65q1.094 0 2.279.553q1.184.553 2.221 2.085q1.037-1.532 2.221-2.085q1.185-.553 2.279-.553q1.908 0 3.204 1.296Q21 6.242 21 8.15q0 2.529-2.125 4.862q-2.125 2.332-4.652 4.623l-1.142 1.03q-.218.218-.513.323t-.587.106m-.47-11.767q-.898-1.448-1.867-2.063Q8.675 4.65 7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 1.108.627 2.272q.627 1.165 1.684 2.386q1.056 1.22 2.428 2.498q1.373 1.277 2.857 2.629q.173.153.404.153t.404-.153q1.484-1.352 2.857-2.63q1.372-1.276 2.428-2.497q1.057-1.221 1.684-2.386Q20 9.258 20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.144.614q-.97.615-1.868 2.063q-.078.135-.213.202T12 7.596t-.275-.067q-.135-.067-.213-.202M12 11.398'
              />
            </svg>
            |
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
          </div>
        </div>
        <div className='font-medium'>
          <h2 className='text-5xl'>{info.title}</h2>
          <div className='flex mt-3 gap-x-3'>
            <p>{info.release_date} +</p>
            <p>time {info.runtime}m</p>
          </div>
          <h3 className='mt-5 opacity-65'>{info.tagline}</h3>
          <div className='mt-5 w-[400px]'>
            <h3 className='text-2xl'>Overview</h3>
            <p>{info.overview}</p>
          </div>
          <Raiting raiting={info.vote_average} />
        </div>

        <section className='ml-10'>
          <h1 className='mb-2 ml-5 text-5xl font-medium text-center'>
            Similar
          </h1>
          <Similar id={info.id} />
        </section>
      </aside>
    </main>
  )
}
