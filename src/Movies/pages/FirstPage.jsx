import background from '../../assets/fonde-movie.webp'

export const FirstPage = () => {
  return (
    <section
      style={{ backgroundImage: `url(${background})` }}
      className='w-full h-screen bg-center bg-no-repeat bg-cover '
    >
      <div className='pt-32 text-center text-white '>
        <h1 className='font-medium text-7xl w-[1000px] mx-auto'>
          Favorite Movies, Many Languages
        </h1>
        <p className='mt-8 text-xl font-medium '>
          Wath favourite movies voice overed in your desired language.
        </p>
      </div>

      <div className='mx-auto mt-24 w-0 h-20 border-x-[3px] border-x-orange-500'></div>
    </section>
  )
}
