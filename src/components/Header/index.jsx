import React from 'react'

import IconButton from '@/components/IconButton'

import SandboxLogoLarge from '@/assets/logo-large-white.png'
import { FaGithub as Github } from 'react-icons/fa'
import { FaLinkedin as Linkedin } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full border-b-1 border-zinc-700 min-md:px-20 max-md:px-4 py-3">
      <div>
        <img className="max-md:w-30 w-40 h-auto" src={SandboxLogoLarge} alt="Logo" />
      </div>
      <div className="flex items-center gap-5">
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
