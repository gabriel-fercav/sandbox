import React from 'react'
import './styles.css'

import { FiLoader } from 'react-icons/fi'

const TextLoader = ({ loading, text = 'Pensando' }) => {
  if (!loading) return null

  return (
    <div className="text-wrapper animate-gradient-text">
      <FiLoader className="inline text-amber-50 mr-1 slow-spin" />
      {text}
    </div>
  )
}

export default TextLoader
