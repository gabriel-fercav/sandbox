import React from 'react'
import SandboxBG from '_/assets/home-image-large.jpg'

import Header from '_/components/Header'

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-between w-screen h-screen bg-gray-900 p-10">
        <div>
          <img className="rounded-2xl w-auto h-190" src={SandboxBG} />
        </div>
        <div className="flex flex-col justify-center w-full pl-10">
          <h2 className="text-9xl font-bold font-sans text-white">Sandbox</h2>
          <p className="text-2xl text-white">
            Um espaço de experimentação com IA, onde você pode aprender idiomas, conversar com bots
            e explorar novas formas de interagir com inteligência artificial.
          </p>
          <button className="w-80 h-15 mt-10 bg-yellow-600 rounded-2xl">Experimente agora</button>
        </div>
      </div>
    </>
  )
}

export default Home
