import React from 'react'

const IconButton = ({ icon, onClick }) => {
  return (
    <button
      className="flex justify-center items-center text-2xl text-gray-800 w-8 h-8 bg-gray-300 rounded-3xl"
      onClick={onClick}
    >
      {icon}
    </button>
  )
}

export default IconButton
