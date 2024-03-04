/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { similarMovies } from '../../helpers/Data'

/* eslint-disable react/prop-types */
export const Similar = ({ id }) => {
  const [similar, setSimilar] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const respSimilar = async () => {
    const resp = await similarMovies(id)
    setSimilar(resp)
    setIsLoading(false)
  }

  useEffect(() => {
    if (id !== undefined) {
      respSimilar()
    }
  }, [id])

  return (
    <div className='grid h-[520px] grid-cols-3 gap-2 overflow-auto  p-3 w-[500px] scrollBar'>
      {isLoading ? (
        <span className='loading loading-ring loading-lg'></span>
      ) : (
        similar?.map((info) => (
          <Link
            key={info.id}
            className='flex flex-col font-medium text-white transition-transform transform hover:scale-105'
            to={`/movies/${info.id}`}
          >
            {/* <h2 className='text-center'>{info.title}</h2> */}
            <img
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${info.poster_path}`}
              alt={info.title}
              className='h-48 rounded'
            />
          </Link>
        ))
      )}
    </div>
  )
}
