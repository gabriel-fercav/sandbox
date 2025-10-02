import React, { useState, useMemo } from 'react'
import { useMutation } from '@tanstack/react-query'

import Header from '@/components/Header'
import ChatInput from '@/components/ChatInput'

import ModelSelect from '@/components/ModelSelect'
import TextLoader from '@/components/TextLoader'
import ChatWindow from '@/components/ChatWindow'

import { request } from '@/services/api'
import { useModels } from '@/hooks/use-models'
import { cleanThinkTags } from '@/utils/clean-think-tags'
import NewChatButton from '@/components/NewChatButton'

const Chat = () => {
  const [chatHistory, setChatHistory] = useState([])
  const [content, setContent] = useState('')
  const [model, setModel] = useState('qwen/qwen3-32b')

  const modelList = useModels()

  const payload = useMemo(() => {
    return {
      model: model,
      messages: [
        // {
        //   role: 'system',
        //   content:
        //     'Você é um assistente útil. Você fala responde em português, usando gírias e com uma personalidade carioca.',
        // },
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
      const lastMessage = cleanThinkTags(data.choices[0].message)
      const userMessage = { role: 'user', content: content }
      setChatHistory((prevState) => [...prevState, userMessage, lastMessage])
    },
    onError: (err) => console.error(err),
    retry: false,
  })

  return (
    <>
      <Header />
      {/* Empty Mocked Side Bar */}
      {/* <div className="w-85 h-full border-r-1 border-zinc-700"></div> */}
      {/* -------- */}
      <div className="w-full h-full flex flex-col overflow-y-hidden">
        <ChatWindow chatHistory={chatHistory} />
        <div className="bottom-0 w-full flex-center">
          <div className="w-3xl flex flex-col gap-3 pb-4">
            <TextLoader text="Pensando para dar uma boa resposta..." loading={isPending} />
            <div className="flex gap-3 w-3xl">
              <ModelSelect
                disabled={isPending}
                models={modelList}
                selectedModel={model}
                onChange={setModel}
              />
              <NewChatButton onClick={() => setChatHistory([])} />
            </div>
            <ChatInput
              onSend={() => sendPrompt(payload)}
              value={content}
              setValue={setContent}
              disabled={isPending}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat
