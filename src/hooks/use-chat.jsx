import { useState, useMemo } from 'react'
import { useMutation } from '@tanstack/react-query'
import { request } from '@/services/api'
import { cleanThinkTags } from '@/utils/clean-think-tags'

export const useChat = (defaultModel = 'qwen/qwen3-32b') => {
  const [chatHistory, setChatHistory] = useState([])
  const [content, setContent] = useState('')
  const [model, setModel] = useState(defaultModel)

  const resetChat = () => setChatHistory([])

  const payload = useMemo(() => {
    return {
      model,
      input: [
        ...chatHistory,
        {
          role: 'user',
          content: content,
        },
      ],
    }
  }, [model, chatHistory, content])

  const { mutate: sendPrompt, isPending } = useMutation({
    mutationFn: async (payload) => {
      if (!isPending) {
        const response = await request('/api/sendMessage', 'POST', payload)
        setContent('')
        return response
      }
    },
    onSuccess: (data) => {
      const lastMessage = {
        role: 'assistant',
        content: cleanThinkTags(data.output[1].content[0].text),
      }

      const userMessage = { role: 'user', content }

      setChatHistory((prev) => [...prev, userMessage, lastMessage])
    },
    onError: (err) => console.error(err),
    retry: false,
  })

  return {
    chatHistory,
    content,
    setContent,
    model,
    setModel,
    sendPrompt,
    isPending,
    payload,
    resetChat,
  }
}
