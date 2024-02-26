/* eslint-disable react/prop-types */
export const DayInfoCard = ({ info }) => {
  console.log(info)

  return (
    <section>
      <h2>{info.title}</h2>
      <img
        src={`https://media.themoviedb.org/t/p/w220_and_h330_face${info.poster_path}`}
        alt={info.title}
      />
    </section>
  )
}
