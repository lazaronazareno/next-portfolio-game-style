import React from 'react'
import {
  Arrow,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PdfIcon,
  honkFont,
  stacks
} from '../utils'
import Link from 'next/link'
import { grandstander } from '@/components/HomeButton'

const Page = () => {
  return (
    <div
      className={`flex flex-col relative p-4 pt-8 ${grandstander.className} text-2xl gap-4 text-center h-screen justify-center`}
    >
      <Link
        className='absolute -top-1 left-1 text-2xl w-12 rotate-180 rounded-xl '
        href={'/'}
      >
        <Arrow />
      </Link>
      <h2 className={`${honkFont.className} text-6xl`}>
        Lazaro Vega Sanchez Portfolio
      </h2>
      <span>
        Web Developer with experience creating landing pages and web
        applications for different purposes. Currently Studying the Higher
        Technique in Software Development at IFTS N°16.
      </span>
      <span>Tools I have worked with:</span>
      <div className='flex flex-wrap gap-2 justify-center'>
        {Object.entries(stacks).map((item) => (
          <div key={item[0]} className='md:w-20 md:h-20 h-16 w-16'>
            {stacks[item[0]]}
          </div>
        ))}
      </div>
      <span>Contact</span>
      <div className='flex justify-evenly'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={'https://github.com/lazaronazareno'}
          className='w-20 h-20'
        >
          <GithubIcon />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={'https://www.linkedin.com/in/lazaro-vega-sanchez'}
          className='w-20 h-20'
        >
          <LinkedinIcon />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={'mailto:lazaronazareno@gmail.com'}
          className='w-20 h-20'
        >
          <MailIcon />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={
            'https://drive.google.com/file/d/1DQ1pMtE9d7KjQewZuFzKXr--kQVgporI/view'
          }
          className='w-20 h-20'
        >
          <PdfIcon />
        </a>
      </div>
    </div>
  )
}

export default Page
