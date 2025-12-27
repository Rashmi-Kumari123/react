import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='flex justify-between px-20 py-4 border-spacing-4'>
        <h1 onClick={()=>navigate('/')} className='cursor-pointer text-xl font-semibold'>Favourite Movie</h1>
        <button onClick={()=>navigate('/login')}>Login</button>
    </div>
  )
}

export default Navbar