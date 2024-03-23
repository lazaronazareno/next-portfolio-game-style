import React from 'react'
import { grandstander } from './HomeButton'

const ExternalLinkButton = async ({ text, title, href }) => {
  return (
    <a
      className={`w-40 flex justify-center rounded-tr-lg rounded-bl-lg border-2 px-8 py-2 border-white hover:bg-white hover:text-black ${grandstander.className}`}
      title={title}
      target='_blank'
      rel='noopener noreferrer'
      href={href}
    >
      {text}
    </a>
  )
}

export default ExternalLinkButton
