const API_KEY = 'bd23ebc8b269d6891b9b30370c087898#'

export const fetchTrendingMovies = async (trendingType) => {
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
  }
}

export const detailsMovies = async (id) => {
  try {
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    const resp = await fetch(URL)
    const data = await resp.json()

    return data
  } catch (error) {
    console.log('Error fetching trending movies: ', error)
  }
}

export const similarMovies = async (id) => {
  // console.log(id)
  try {
    const URL = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`
    const resp = await fetch(URL)
    const { results } = await resp.json()

    // console.log(results)
    return results
  } catch (error) {
    console.log(error)
  }
}
