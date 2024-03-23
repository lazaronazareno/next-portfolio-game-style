import Link from 'next/link'
import React from 'react'
import { Grandstander } from 'next/font/google'

export const grandstander = Grandstander({ subsets: ['latin'] })

const HomeButton = async ({ text, url, animate }) => {
  return (
    <Link
      href={url}
      className={`text-3xl ${
        grandstander.className
      } w-40 flex justify-center rounded-tr-lg rounded-bl-lg border-2 text-center px-8 py-2 border-white hover:bg-white hover:text-black ${
        animate ? 'animate-pulse hover:animate-none' : ''
      }`}
    >
      {text}
    </Link>
  )
}

export default HomeButton
