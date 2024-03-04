import { useEffect, useState } from 'react'
import '../../index.css'
import { Link } from 'react-router-dom'
import { fetchTrendingMovies } from '../../helpers/Data'

export const WeekTrending = () => {
  const [day, setDay] = useState([])

  const infoDayTrending = async () => {
    const data = await fetchTrendingMovies('week')
    setDay(data)
  }

  useEffect(() => {
    infoDayTrending()
  }, [])

  return (
    <section>
      <h3 className='mt-5 text-3xl font-medium ml-28'>This Week</h3>
      <div className='p-2 rounded-sm gap-x-4 scrollBar carousel ml-28'>
        {day.map((info) => (
          <Link
            className='transition-transform transform carousel-item hover:scale-105'
            key={info.id}
            to={`/trending/${info.id}`}
          >
            <img
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${info.image}`}
              alt={info.title}
              className='rounded-2xl h-60'
            />
            <button className='absolute p-2 rounded ml-28'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='35'
                height='35'
                viewBox='0 0 24 24'
                className='text-orange-500 fill-current hover:text-white'
              >
                <path
                  fill='current-color'
                  d='M12 9q-.425 0-.713-.288T11 8V6H9q-.425 0-.713-.288T8 5q0-.425.288-.713T9 4h2V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v2h2q.425 0 .713.288T16 5q0 .425-.288.713T15 6h-2v2q0 .425-.288.713T12 9ZM7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM7 17q-1.15 0-1.738-.988T5.25 14.05L6.6 11.6L3 4H2q-.425 0-.713-.288T1 3q0-.425.288-.713T2 2h1.65q.275 0 .525.15t.375.425L8.525 11h7.025l3.6-6.5q.125-.225.35-.363T20 4q.575 0 .863.488t.012.987L17.3 11.95q-.275.5-.738.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16q0 .425-.288.713T18 17H7Z'
                />
              </svg>
            </button>
          </Link>
        ))}
      </div>
    </section>
  )
}
