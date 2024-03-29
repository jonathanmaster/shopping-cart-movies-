import { PopularMovie } from '../../mostPopular/PopularMovie'
import { TrendingPages } from '../../trending/pages/TrendingPages'
import { FirstPage } from './FirstPage'

export const HomePage = () => {
  return (
    <>
      <FirstPage />
      <TrendingPages />
      <PopularMovie />
    </>
  )
}
