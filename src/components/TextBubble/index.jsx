import React from 'react'
import Markdown from 'react-markdown'

const TextBubble = ({ role, message }) => {
  if (role === 'user') {
    return (
      <div className="flex w-full justify-end">
        <div className="bg-zinc-800 text-zinc-200 p-4 rounded-2xl">{message}</div>
      </div>
    )
  }

  return (
    <div className="flex w-full justify-start">
      <div className="text-zinc-200 h-fit prose prose-invert">
        <Markdown>{`${message}`}</Markdown>
      </div>
    </div>
  )
}

export default TextBubble
