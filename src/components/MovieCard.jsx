import React from 'react'

const MovieCard = () => {
  return (
    <div className='border p-5 space-y-5'>
      <img className="w-96 rounded-md" src='https://univ.sitare.org/static/media/logo.5b7a3e74824b376d41e8.png' alt='Movie poster'/>

      <h1 className='text-xl font-semibold'>Sitare university</h1>
      <button className='px-5 py-2 rounded-md text-white bg-pink-500'>Book movie ticket</button>
    </div>
  )
}
export default MovieCard;