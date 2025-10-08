import React from 'react'
import Markdown from 'react-markdown'

const TextBubble = ({ role, message }) => {
  if (role === 'user') {
    return (
      <div className="flex w-full justify-end !max-w-2xl">
        <div className="bg-zinc-800 text-zinc-200  prose prose-invert break-words p-4 rounded-2xl markdown-text">
          {message}
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-full justify-start !max-w-2xl min-md:ml-4">
      <div className="text-zinc-200  prose prose-invert break-words markdown-text max-w-none">
        <Markdown>{`${message}`}</Markdown>
      </div>
    </div>
  )
}

export default TextBubble
