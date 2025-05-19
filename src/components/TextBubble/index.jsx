import React from 'react'

const TextBubble = ({ role, message }) => {
  if (role === 'user') {
    return (
      <div className="w-1/2 flex justify-end">
        <div className="bg-zinc-800 text-zinc-200 p-4 rounded-2xl h-fit w-fit max-w-1/2">
          {message}
        </div>
      </div>
    )
  }

  return (
    <div className="w-1/2 flex justify-start">
      <div className="text-zinc-200 h-fit w-3/4">{message}</div>
    </div>
  )
}

export default TextBubble
