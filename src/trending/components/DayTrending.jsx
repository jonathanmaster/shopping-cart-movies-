import { useState } from 'react'
import { dayTrending } from '../helpers/Data'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const DayTrending = () => {
  const [day, setDay] = useState([])

  const infoDayTrending = async () => {
    const data = await dayTrending()
    setDay(data)
  }

  useEffect(() => {
    infoDayTrending()
  }, [])

  return (
    <section>
      <h3 className='p-2 text-3xl font-medium ml-28'>Today</h3>
      <div className='gap-2 p-2 carousel ml-28 bg-blue'>
        {day.map((info) => (
          <Link
            className='transition-transform transform carousel-item hover:scale-105'
            key={info.id}
          >
            <img
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${info.image}`}
              alt={info.title}
              className='rounded-2xl'
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
