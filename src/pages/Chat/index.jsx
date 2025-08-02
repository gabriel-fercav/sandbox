import React, { useState, useMemo, useEffect } from 'react'
import Header from '@/components/Header'
import ChatInput from '@/components/ChatInput'
import TextBubble from '@/components/TextBubble'
import ModelSelect from '@/components/ModelSelect'
import { request } from '@/services/api'
import { useQuery, useMutation } from '@tanstack/react-query'

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

  const { data: models, isLoading } = useQuery({
    queryFn: async () => request('https://api.groq.com/openai/v1/models', 'GET'),
    refetchOnWindowFocus: false,
    queryKey: ['models'],
  })

  console.log(model)

  useEffect(() => {
    setModelList(models?.data.map((model) => ({ id: model.id, owned_by: model.owned_by })))
  }, [models])

  const { mutate: sendPrompt } = useMutation({
    mutationFn: async (payload) =>
      request('https://api.groq.com/openai/v1/chat/completions', 'POST', payload),
    onSuccess: (data) =>
      setChatHistory((prevState) => [
        ...prevState,
        data.choices[0].message,
        { role: 'user', content: content },
      ]),
    onError: (err) => console.error(err),
    retry: false,
  })

  return (
    <>
      <Header />
      <div className="flex flex-row h-screen overflow-hidden">
        <div className="w-85 h-full border-r-1 border-zinc-700"></div>
        <ModelSelect models={modelList} onChange={setModel} />
        <div className="w-full items-center flex flex-col py-10 gap-10 overflow-y-scroll">
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
            <p className="w-max text-center text-zinc-200 text-3xl">Por onde começamos?</p>
          )}
          <ChatInput onSend={() => sendPrompt(payload)} value={content} setValue={setContent} />
        </div>
      </div>
    </>
  )
}

export default Chat
