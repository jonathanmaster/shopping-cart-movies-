import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DataMovie } from './DataMovie'
import { detailsMovies } from '../../helpers/Data'

export const InfoMovies = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchDay = async () => {
      const idNumber = Number(id)
      const result = await detailsMovies(idNumber)
      setMovie(result)

      // Si result es null o undefined, redirige al usuario a la página de inicio
      if (!result) {
        navigate('/')
      }
    }

    fetchDay()
  }, [id, navigate])

  return <DataMovie info={movie} />
}
