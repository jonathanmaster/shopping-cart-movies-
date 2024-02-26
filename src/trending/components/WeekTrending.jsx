import { useEffect, useState } from 'react'
import { weekTrending } from '../helpers/Data'

export const WeekTrending = () => {
  const [day, setDay] = useState([])

  const infoDayTrending = async () => {
    const data = await weekTrending()
    setDay(data)
  }

  useEffect(() => {
    infoDayTrending()
  }, [])

  return (
    <section>
      <h3 className='mt-5 text-3xl font-medium ml-28'>This Week</h3>
      <div className='gap-2 p-2 rounded-sm carousel ml-28'>
        {day.map((info) => (
          <div className=' carousel-item' key={info.id}>
            <img
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${info.image}`}
              alt={info.title}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
