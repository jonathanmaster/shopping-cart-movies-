import { fetchTrendingMovies } from './Data'

export const getDayById = async (idss) => {
  const idNumber = Number(idss)

  const day = await fetchTrendingMovies('day')
  const result = day.find((pres) => pres.id === idNumber)

  console.log(result)
  return result
}
