import React from 'react'

import Header from '_/components/Header'

import { DeepSeek } from '@lobehub/icons'
import { OpenAI } from '@lobehub/icons'

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-1 justify-between w-screen h-[70%] p-20">
        {/* Left column */}
        <div className="flex flex-col justify-center w-1/2 h-full border-r-1 border-stone-800 pr-40">
          <h2 className="text-8xl font-bold font-sans text-white mb-8">O futuro chegou!</h2>
          <p className="text-2xl text-white mb-8">
            Um espaço para aprender, criar histórias e explorar novas formas de interagir com
            inteligência artificial.
          </p>
          <button className="w-80 h-15 mt-5 bg-[#8ddd8d] rounded-2xl text-gray-900 text-2xl font-bold hover:bg-[#8ddd8d]/80 transition duration-300">
            Experimente agora
          </button>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center w-1/2 h-full pl-20 gap-10">
          <OpenAI.Combine size={86} type={'color'} />
          <DeepSeek.Combine size={86} type={'color'} />
        </div>
      </div>
    </>
  )
}

export default Home
