import { DayTrending, WeekTrending } from '../components'

export const TrendingPages = () => {
  return (
    <section className='h-screen bg-orange-50'>
      <h2 className='p-5 text-5xl font-medium text-center'>Trending</h2>
      <DayTrending />
      <WeekTrending />
    </section>
  )
}
