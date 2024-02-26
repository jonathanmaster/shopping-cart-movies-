import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
// import { SearchPage } from '../pages/SearchPage'

export const MoviesRoutes = () => {
  return (
    <>
      <Routes>
        {/* las rutas que se van a navegar */}
        <Route path='home' element={<HomePage />} />
        {/* <Route path='search' element={<SearchPage />} /> */}

        {/* para que navegue directamente */}
        <Route path='/' element={<Navigate to='/home' />} />
      </Routes>
    </>
  )
}
