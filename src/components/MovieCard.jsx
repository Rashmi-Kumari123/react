import React from 'react'
import Button from './Button';

const MovieCard = ({title}) => {
  return (
    <div className='border p-5 space-y-5'>
      <img className="w-96 rounded-md" src='https://univ.sitare.org/static/media/logo.5b7a3e74824b376d41e8.png' alt='Movie poster'/>

      <h1 className='text-xl font-semibold'>{title}</h1>
      <Button buttonName = {"Book Movie Ticket"}/>
    </div>
  )
}
export default MovieCard;