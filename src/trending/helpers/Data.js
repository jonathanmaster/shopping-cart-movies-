const API_KEY = 'bd23ebc8b269d6891b9b30370c087898#'

const fetchTrendingMovies = async (trendingType) => {
  try {
    const URL = `https://api.themoviedb.org/3/trending/movie/${trendingType}?api_key=${API_KEY}`
    const resp = await fetch(URL)
    const { results } = await resp.json()

    return results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      image: movie.poster_path,
      date: movie.release_date,
    }))
  } catch (error) {
    console.error('Error fetching trending movies:', error)
    return [] // Devuelve un array vacío en caso de error
  }
}

export const dayTrending = async () => {
  return fetchTrendingMovies('day')
}

export const weekTrending = async () => {
  return fetchTrendingMovies('week')
}
