import React from 'react'
import HomeButton from './HomeButton'
import { Arrow, honkFont, stacks } from '@/app/utils'

const SelectedProject = async ({
  selected,
  handleDecrement,
  handleIncrement
}) => {
  if (!selected.name) {
    return <span>Aun no ha seleccionado a ningun projecto</span>
  }

  return (
    <div className='flex flex-col md:items-start md:justify-center px-4 w-96'>
      <div className='bg-slate-200 md:rounded-lg rounded-t-lg md:rounded-bl-none p-2'>
        <h3 className={`text-5xl ${honkFont.className} `}>{selected.name}</h3>
        <p className='text-xs border-b-2 w-min border-pink-500 text-pink-500'>
          {selected._id}
        </p>
      </div>
      <div className='flex flex-wrap bg-slate-200 rounded-lg rounded-t-none justify-center gap-1 md:w-36'>
        {selected.stack.map((stack) => (
          <span className='w-16 h-16' key={stack}>
            {stacks[stack.trim()]}
          </span>
        ))}
      </div>
      <div className='relative flex justify-center md:self-end'>
        <img
          className='w-64 h-64 object-cover object-left animate-pulse hover:animate-pulse mt-8 mb-4 self-center md:self-end'
          src={selected.images[0].original}
        />
        <div className='md:hidden absolute bottom-0 md:w-full flex justify-between w-[120%]'>
          <button
            className='w-20 rotate-180 animate-pulse'
            onClick={handleDecrement}
          >
            <Arrow />
          </button>
          <button className='w-20 animate-pulse' onClick={handleIncrement}>
            <Arrow />
          </button>
        </div>
      </div>
      <div className='self-center'>
        <HomeButton text={'Ver'} url={`/projects/${selected._id}`} />
      </div>
    </div>
  )
}

export default SelectedProject
