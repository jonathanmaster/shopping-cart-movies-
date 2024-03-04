/* eslint-disable react/prop-types */

export const Raiting = ({ raiting }) => {
  //el raiting llega de la api con un valor de

  return (
    <div className='mt-2 rating'>
      <input
        type='radio'
        name='rating-2'
        className='bg-orange-500 mask mask-star-2'
      />
      <input
        type='radio'
        name='rating-2'
        className='bg-orange-500 mask mask-star-2'
        checked
      />
      <input
        type='radio'
        name='rating-2'
        className='bg-orange-500 mask mask-star-2'
        checked
      />
      <input
        type='radio'
        name='rating-2'
        className='bg-orange-500 mask mask-star-2'
        checked
      />
      <input
        type='radio'
        name='rating-2'
        className='bg-orange-500 mask mask-star-2'
      />
      <p className='ml-2'>{raiting} </p>
    </div>
  )
}
