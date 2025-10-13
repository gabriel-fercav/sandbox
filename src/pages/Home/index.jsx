import React from 'react'

import SandboxLogoLarge from '@/assets/logo-large-white.png'
import Header from '@/components/Header'

import { Button } from '@/components/ui/button'

import { useNavigate } from 'react-router-dom'
import { useIsMobile } from '@/hooks/use-mobile'
import { DeepSeek, OpenAI, Meta, Moonshot, AlibabaCloud } from '@lobehub/icons'

import './styles.css'

const Home = () => {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const iconSize = isMobile ? 42 : 64

  return (
    <>
      <Header />
      <div className="wrapper">
        {/* Left column */}
        <div className="column min-md:border-r-1 max-md:border-0 border-zinc-700 min-md:pr-20 max-md:w-full">
          <h2 className="font-bold font-sans green min-md:text-[min(5vw,96px)] max-md:text-4xl">
            Bem-vindo ao
          </h2>
          <img className="w-150 h-auto" src={SandboxLogoLarge} alt="Logo" />
          <p className="max-md:text-xl min-md:text-2xl text-white min-md:mb-8 max-md:mb-4">
            Um espaço para aprender, criar histórias e explorar novas formas de interação com
            inteligência artificial — tudo em um só lugar. No Sandbox, você alterna entre diferentes
            modelos de IA na mesma sessão, com liberdade total para experimentar e comparar
            resultados.
          </p>
          <Button
            onClick={() => navigate('/chat')}
            className="w-80 max-md:w-full"
            variant="homepage"
            size="xl"
          >
            Experimente agora
          </Button>
        </div>

        {/* Right column */}
        <div className="column min-md:pl-20 max-md:pt-10 slide-in-right">
          <AlibabaCloud.Combine size={iconSize} type={'color'} className="text-zinc-300" />
          <Meta.Combine size={iconSize} type={'color'} className="text-zinc-300" />
          <Moonshot.Combine size={iconSize} type={'white'} className="text-zinc-300" />
          <OpenAI.Combine size={iconSize} type={'color'} className="text-zinc-300" />
          <DeepSeek.Combine size={iconSize} type={'color'} className="text-zinc-300" />
        </div>
      </div>
    </>
  )
}

export default Home
