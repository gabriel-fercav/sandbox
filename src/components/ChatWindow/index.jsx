import React, { useEffect, useRef } from 'react'

import TextBubble from '@/components/TextBubble'

const ChatWindow = ({ chatHistory }) => {
  const endRef = useRef(null)
  const emptyChat = chatHistory.length === 0

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }, [chatHistory])

  if (emptyChat) {
    return (
      <div className="w-full h-full flex-center">
        <p className="text-center text-zinc-200 text-3xl">Por onde começamos?</p>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col items-center gap-10 overflow-y-scroll p-5">
      {chatHistory.map((message) => {
        return (
          <TextBubble key={crypto.randomUUID()} role={message.role} message={message.content} />
        )
      })}
      <div ref={endRef} />
    </div>
  )
}

export default ChatWindow
