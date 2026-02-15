import React from 'react'
import Button from './Button';
import { useState } from 'react';
import { useEffect } from 'react';
const MovieCard = ({ title, image }) => {
  const [bookingCount, setBooking] = useState(1) //setBooking is function to update the state and bookingCount is just variable
  const handleBookingClick = () => {
    setBooking(bookingCount + 1)
  }
  const handleCancelBooking = () => {
    setBooking(bookingCount - 1)
  }
  useEffect(()=>{
      console.log("booking count get updated")
    }, [bookingCount]) 
  return (
    <div className='border p-5 space-y-5'>
      <img className="w-96 rounded-md" src={image} alt='Movie poster' />

      <h1 className='text-xl font-bold'>{title}</h1>
      <h1 className='text-xl font-semibold'> Total Booking : {bookingCount}</h1>
      <button
        onClick={handleBookingClick}
        className='px-5 py-2 rounded-md text-white bg-pink-500'>
        Book Movie
        </button>
      <button
        onClick={handleCancelBooking}
        className='px-5 py-2 rounded-md text-white bg-pink-500'>
        Cancel Movie
        </button>
    </div>
  )
}
export default MovieCard;