import React, { useRef, useEffect } from 'react'

const ChatInput = ({ onSend, value, setValue, disabled }) => {
  const textareaRef = useRef(null)
  const MAX_ROWS = 5
  const LINE_HEIGHT = 24

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (value.trim()) {
        onSend(value)
        const textarea = textareaRef.current
        if (textarea) textarea.style.height = 'auto'
      }
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      const maxHeight = MAX_ROWS * LINE_HEIGHT
      textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px'
    }
  }

  useEffect(() => {
    const textarea = textareaRef.current
    if (textarea) textarea.style.height = 'auto'
  }, [])

  return (
    <div className="sticky flex flex-col items-center w-full bottom-0 max-w-[768px]">
      <div className="w-full border border-zinc-700 rounded-2xl p-5 bg-zinc-800">
        <textarea
          ref={textareaRef}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem..."
          className="w-full bg-transparent resize-none outline-none text-zinc-200 placeholder-zinc-400 overflow-y-auto"
          rows={1}
          style={{ lineHeight: `${LINE_HEIGHT}px` }}
        />
      </div>
      <p className="text-zinc-400 text-sm mt-2 text-center">
        O chat pode cometer erros. Verifique informações importantes.
      </p>
    </div>
  )
}

export default ChatInput
