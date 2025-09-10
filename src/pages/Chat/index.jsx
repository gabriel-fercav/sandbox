import React, { useState, useMemo, useEffect } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'

import Header from '@/components/Header'
import ChatInput from '@/components/ChatInput'
import TextBubble from '@/components/TextBubble'
import ModelSelect from '@/components/ModelSelect'

import { request } from '@/services/api'
import { formatModelName } from '@/utils/format-model-name'

const Chat = () => {
  const [chatHistory, setChatHistory] = useState([])
  const [content, setContent] = useState('')
  const [model, setModel] = useState('llama-3.1-8b-instant')
  const [modelList, setModelList] = useState([])

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
      const lastMessage = data.choices[0].message
      const userMessage = { role: 'user', content: content }
      setChatHistory((prevState) => [...prevState, userMessage, lastMessage])
    },
    onError: (err) => console.error(err),
    retry: false,
  })

  const { data: models } = useQuery({
    queryFn: async () => request('/api/getModels', 'GET'),
    refetchOnWindowFocus: false,
    queryKey: ['models'],
  })

  console.log('asd', modelList)

  useEffect(() => {
    const LLMs = models?.data?.filter(
      (model) =>
        model.max_completion_tokens > 1000 &&
        !model.id.includes('whisper') &&
        !model.id.includes('guard') &&
        !model.id.includes('tts')
    )

    setModelList(
      LLMs?.map((model) => ({
        id: model.id,
        name: formatModelName(model.id),
        owned_by: model.owned_by,
      }))
    )
  }, [models])

  return (
    <>
      <Header />
      <div className="flex h-full w-full flex-row overflow-y-hidden">
        {/* Empty Mocked Side Bar */}
        <div className="w-85 h-full border-r-1 border-zinc-700"></div>
        {/* -------- */}
        <div className="w-full h-full flex flex-col overflow-y-hidden">
          <div className="items-center justify-center flex flex-col py-10 gap-10 overflow-y-scroll">
            <div className="w-1/2 h-full flex flex-col gap-15">
              {chatHistory.length > 0 ? (
                chatHistory.map((message, index) => {
                  return (
                    <TextBubble
                      key={message.content + index}
                      role={message.role}
                      message={message.content}
                    />
                  )
                })
              ) : (
                <p className="text-center text-zinc-200 text-3xl">Por onde começamos?</p>
              )}
            </div>
          </div>
          <div className="bottom-0 w-full flex flex-col items-center gap-5">
            <ChatInput
              onSend={() => sendPrompt(payload)}
              value={content}
              setValue={setContent}
              disabled={isPending}
            />
            <ModelSelect models={modelList} onChange={setModel} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat
