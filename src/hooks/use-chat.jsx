import { useState, useMemo } from 'react'
import { useMutation } from '@tanstack/react-query'
import { request } from '@/services/api'
import { cleanThinkTags } from '@/utils/clean-think-tags'

export const useChat = (defaultModel = 'qwen/qwen3-32b') => {
  const [model, setModel] = useState(defaultModel)
  const [content, setContent] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  const [instructions, setInstructions] = useState()

  const resetChat = () => setChatHistory([])

  const payload = useMemo(() => {
    return {
      model,
      instructions: instructions,
      input: [
        ...chatHistory,
        {
          role: 'user',
          content: content,
        },
      ],
    }
  }, [model, instructions, chatHistory, content])

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
    instructions,
    setInstructions,
    sendPrompt,
    isPending,
    payload,
    resetChat,
  }
}
