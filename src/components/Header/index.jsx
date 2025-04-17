import React from 'react'

import IconButton from '_/components/IconButton'

import SandboxLogoLarge from '_/assets/logo-large-white.png'
import { FaGithub as Github } from 'react-icons/fa'
import { FaLinkedin as Linkedin } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full border-b-1 border-zinc-700 px-20 py-3">
      <div>
        <img className="w-40 h-auto" src={SandboxLogoLarge} alt="Logo" />
      </div>
      <div className="flex items-center gap-5">
        <p className="text-1xl">Sobre</p>
        <IconButton
          icon={<Github />}
          onClick={() => window.open('https://github.com/gabriel-fercav')}
        />
        <IconButton
          icon={<Linkedin />}
          onClick={() => window.open('https://www.linkedin.com/in/gabriel-fercav/')}
        />
      </div>
    </div>
  )
}

export default Header
