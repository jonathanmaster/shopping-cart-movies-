import { Route, Routes } from 'react-router-dom'
import { LoginPages } from '../auth/pages/LoginPages'
import { MoviesRoutes } from '../Movies/routes/MoviesRoutes'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={<LoginPages />} />
        <Route path='/*' element={<MoviesRoutes />} />
      </Routes>
    </>
  )
}
