'use client'
import React, { Suspense, useState } from 'react'
import SelectedProject from './SelectedProject'
import { Arrow, honkFont, shortProjectsName } from '@/app/utils'
import SelectedProjectSkeleton from './SelectedProjectSkeleton'

const ProjectList = ({ list }) => {
  const [selected, setSelected] = useState({ index: 0, item: list[0] })
  const handleDecrement = () => {
    const newIndex = selected.index === 0 ? list.length - 1 : selected.index - 1
    setSelected({ index: newIndex, item: list[newIndex] })
  }
  const handleIncrement = () => {
    const newIndex = selected.index === list.length - 1 ? 0 : selected.index + 1
    setSelected({ index: newIndex, item: list[newIndex] })
  }

  return (
    <div className='flex md:flex-row relative flex-col justify-center md:items-start items-center'>
      <div className='md:min-w-1/2'>
        <h2 className={`${honkFont.className} text-5xl p-2 mb-2 text-center`}>
          SELECT YOUR PROJECT
        </h2>
        <div className='md:grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 h-min hidden gap-4 justify-items-center'>
          {list.map((item) => (
            <div
              key={item.name}
              style={{ backgroundImage: `url(${item.images[0].original})` }}
              className={`animate-pulse hover:animate-none saturate-200 rounded bg-cover bg-center bg-no-repeat text-black p-6 flex justify-center w-28 h-28 overflow-hidden text-wrap hover:cursor-pointer ${
                item.name === selected.item.name
                  ? 'border-2 border-pink-500'
                  : 'opacity-80'
              }`}
              onClick={() => setSelected({ index: 0, item: item })}
            >
              <span className='text-wrap bg-yellow-400 rounded p-1 self-center'>
                {shortProjectsName(item.name)}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Suspense fallback={<SelectedProjectSkeleton />}>
        <SelectedProject
          selected={selected.item}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      </Suspense>
    </div>
  )
}

export default ProjectList
