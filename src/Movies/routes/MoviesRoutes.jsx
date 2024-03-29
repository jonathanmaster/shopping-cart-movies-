import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { DayInfo } from '../../trending/components/DayInfo'
import { Navbar } from '../../globalComponents/components/Navbar'
import { InfoMovies } from '../../moreContent/components/InfoMovies'
// import { SearchPage } from '../pages/SearchPage'

export const MoviesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* las rutas que se van a navegar */}
        <Route path='home' element={<HomePage />} />
        <Route path='trending/:dayId' element={<DayInfo />} />
        <Route path='movies/:id' element={<InfoMovies />} />

        {/* para que navegue directamente */}
        <Route path='/' element={<Navigate to='/home' />} />
      </Routes>
    </>
  )
}
