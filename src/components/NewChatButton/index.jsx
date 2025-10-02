import React from 'react'

import { Button } from '@/components/ui/button'

import { AiFillFolderAdd } from 'react-icons/ai'

const NewChatButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} variant="outline">
      <AiFillFolderAdd size={35} />
      Novo chat
    </Button>
  )
}

export default NewChatButton
