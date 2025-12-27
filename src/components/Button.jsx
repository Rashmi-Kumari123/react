import React from 'react'

const Button = ({buttonName}) => {
  return (
    <button className='px-5 py-2 rounded-md text-white bg-pink-500'>
      {buttonName}
    </button>
  )
}

export default Button