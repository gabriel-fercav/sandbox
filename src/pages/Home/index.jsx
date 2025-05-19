import React from 'react'

import SandboxLogoLarge from '@/assets/logo-large-white.png'
import Header from '@/components/Header'

import { Button } from '@/components/ui/button'

import { useNavigate } from 'react-router-dom'
import { DeepSeek } from '@lobehub/icons'
import { OpenAI } from '@lobehub/icons'

import './styles.css'

const Home = () => {
  const navigate = useNavigate()

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
            modelos de IA na mesma sessão, com liberdade total para experimentar e comparar
            resultados.
          </p>
          <Button onClick={() => navigate('/chat')} className="w-80" variant="homepage" size="xl">
            Experimente agora
          </Button>
        </div>

        {/* Right column */}
        <div className="column pl-20 slide-in-right">
          <OpenAI.Combine size={76} type={'color'} className="text-zinc-300" />
          <DeepSeek.Combine size={76} type={'color'} className="text-zinc-300" />
        </div>
      </div>
    </>
  )
}

export default Home
