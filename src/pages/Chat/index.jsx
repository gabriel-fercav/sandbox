import React from 'react'

import Header from '@/components/Header'
import ChatInput from '@/components/ChatInput'

import ModelSelect from '@/components/ModelSelect'
import TextLoader from '@/components/TextLoader'
import ChatWindow from '@/components/ChatWindow'

import { useModels } from '@/hooks/use-models'
import { useChat } from '@/hooks/use-chat'
import NewChatButton from '@/components/NewChatButton'

const Chat = () => {
  const {
    chatHistory,
    content,
    setContent,
    model,
    setModel,
    sendPrompt,
    isPending,
    payload,
    resetChat,
  } = useChat()

  const modelList = useModels()

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
              <NewChatButton onClick={() => resetChat()} />
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
