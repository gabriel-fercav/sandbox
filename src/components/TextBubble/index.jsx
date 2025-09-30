import React from 'react'
import Markdown from 'react-markdown'

const TextBubble = ({ role, message }) => {
  if (role === 'user') {
    return (
      <div className="flex w-full justify-end !max-w-[768px]">
        <div className="bg-zinc-800 text-zinc-200 p-4 rounded-2xl break-words markdown-text">
          {message}
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-full justify-start !max-w-[768px]">
      <div className="text-zinc-200 w-fit h-fit prose prose-invert break-words markdown-text max-w-none">
        <Markdown>{`${message}`}</Markdown>
      </div>
    </div>
  )
}

export default TextBubble
