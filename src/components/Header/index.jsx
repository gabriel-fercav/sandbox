import React from 'react'

import IconButton from '_/components/IconButton'

import { FaGithub as Github } from 'react-icons/fa'
import { FaLinkedin as Linkedin } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="flex justify-end items-center gap-3 top-0 w-full border-b-1 border-gray-800 bg-gray-900 px-15 py-5">
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
  )
}

export default Header
