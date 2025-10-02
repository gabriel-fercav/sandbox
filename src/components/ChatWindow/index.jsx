import React from 'react'

import TextBubble from '@/components/TextBubble'

const ChatWindow = ({ chatHistory }) => {
  const emptyChat = chatHistory.length === 0

  if (emptyChat) {
    return (
      <div className="w-full h-full flex-center">
        <p className="text-center text-zinc-200 text-3xl">Por onde começamos?</p>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col items-center gap-10 overflow-y-scroll p-5">
      {chatHistory.map((message, index) => {
        return (
          <TextBubble key={message.content + index} role={message.role} message={message.content} />
        )
      })}
    </div>
  )
}

export default ChatWindow
