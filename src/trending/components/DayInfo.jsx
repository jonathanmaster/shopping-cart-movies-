import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DayInfoCard } from './DayInfoCard'
import { detailsMovies } from '../../helpers/Data'

export const DayInfo = () => {
  const navigate = useNavigate()

  const { dayId } = useParams()
  const [day, setDay] = useState([])

  useEffect(() => {
    const fetchDay = async () => {
      const idNumber = Number(dayId)
      const result = await detailsMovies(idNumber)
      setDay(result)

      // Si result es null o undefined, redirige al usuario a la página de inicio
      if (!result) {
        navigate('/')
      }
    }

    fetchDay()
  }, [dayId, navigate])

  return (
    <>
      {/* <Navbar /> */}
      <DayInfoCard info={day} />
    </>
  )
}
