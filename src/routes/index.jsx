import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '_/pages/Home'
import Chat from '_/pages/Chat'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  )
}

export default AppRoutes
