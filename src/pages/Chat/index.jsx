import React from 'react'

import Header from '@/components/Header'
import ChatInput from '@/components/ChatInput'

import ModelSelect from '@/components/ModelSelect'
import TextLoader from '@/components/TextLoader'
import ChatWindow from '@/components/ChatWindow'
import NewChatButton from '@/components/NewChatButton'
import InstructionsButton from '@/components/InstructionsButton'

import { useModels } from '@/hooks/use-models'
import { useChat } from '@/hooks/use-chat'

const Chat = () => {
  const {
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
  } = useChat()

  const { modelList, isFetching } = useModels()

  return (
    <>
      <Header />
      <div className="w-full h-full flex flex-col overflow-y-hidden">
        <ChatWindow chatHistory={chatHistory} />
        <div className="bottom-0 w-full flex-center">
          <div className="w-full min-md:max-w-2xl flex flex-col gap-3 pb-4 max-md:px-3 max-md:max-w-[100vw] ">
            <TextLoader text="Pensando para dar uma boa resposta..." loading={isPending} />
            <div className="flex gap-3 flex-wrap">
              <ModelSelect
                disabled={isPending}
                models={modelList}
                selectedModel={model}
                onChange={setModel}
                isLoading={isFetching}
              />
              <NewChatButton onClick={() => resetChat()} />
              <InstructionsButton setValue={setInstructions} value={instructions} />
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
