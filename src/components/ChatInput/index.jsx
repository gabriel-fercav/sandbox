import React, { useState, useRef, useEffect } from 'react'

const ChatInput = ({ onSend }) => {
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (value.trim()) {
        onSend(value)
        setValue('')
        resizeTextarea()
      }
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    resizeTextarea()
  }

  const resizeTextarea = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = textarea.scrollHeight + 'px'
    }
  }

  useEffect(() => {
    resizeTextarea()
  }, [])

  return (
    <div className="sticky flex flex-col items-center w-1/2 gap-2 bottom-0">
      <div className="w-full border border-zinc-700 rounded-2xl p-5 bg-zinc-800">
        <textarea
          ref={textareaRef}
          className="w-full bg-transparent resize-none outline-none text-zinc-200 placeholder-zinc-400 overflow-hidden"
          rows={1}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem..."
        />
        <p className="text-zinc-400 text-sm mt-2">
          O chat pode cometer erros. Verifique informações importantes.
        </p>
      </div>
    </div>
  )
}

export default ChatInput
