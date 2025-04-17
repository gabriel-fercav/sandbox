import React from 'react'

import SandboxLogoLarge from '_/assets/logo-large-white.png'
import Header from '_/components/Header'

import { DeepSeek } from '@lobehub/icons'
import { OpenAI } from '@lobehub/icons'

import './styles.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        {/* Left column */}
        <div className="column border-r-1 border-zinc-700 pr-20">
          <div>
            <h2 className="font-bold font-sans green text-[min(5vw,96px)]">Bem-vindo ao</h2>
            <img className="w-150 h-auto" src={SandboxLogoLarge} alt="Logo" />
          </div>
          <p className="text-2xl text-white mb-8">
            Um espaço para aprender, criar histórias e explorar novas formas de interação com
            inteligência artificial — tudo em um só lugar. No Sandbox, você alterna entre diferentes
            modelos de IA na mesma sessão, com liberdade total para experimentar.
          </p>
          <button className="w-80 h-15 mt-5 bg-[#8ddd8d] rounded-2xl text-gray-900 text-2xl font-bold hover:bg-[#8ddd8d]/80 transition duration-300">
            Experimente agora
          </button>
        </div>

        {/* Right column */}
        <div className="column pl-20 slide-in-right">
          <OpenAI.Combine size={76} type={'color'} />
          <DeepSeek.Combine size={76} type={'color'} />
        </div>
      </div>
    </>
  )
}

export default Home
