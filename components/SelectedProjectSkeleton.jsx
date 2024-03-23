import React from 'react'

const SelectedProjectSkeleton = () => {
  return (
    <div className='flex flex-col md:items-start md:justify-center px-4 w-96'>
      <div className='bg-slate-200 w-90 h-20 rounded-lg rounded-bl-none p-2'>
        <h3 className='bg-black w-80 h-8 animate-pulse my-2'></h3>
        <p className='bg-black w-60 h-4 text-xs border-b-2 border-pink-500 text-pink-500 animate-pulse'></p>
      </div>
      <div className='flex flex-wrap gap-2 md:w-36 bg-slate-200 rounded-lg rounded-t-none justify-center'>
        <div className='w-16 h-16 bg-slate-400 rounded-lg animate-pulse' />
        <div className='w-16 h-16 bg-slate-400 rounded-lg animate-pulse' />
        <div className='w-16 h-16 bg-slate-400 rounded-lg animate-pulse' />
      </div>
      <div className='relative flex justify-center md:self-end'>
        <div className='w-40 h-40 rounded-2xl bg-slate-500 animate-pulse mt-8 self-center md:self-end' />
        <div className='md:hidden absolute bottom-0 md:w-full flex justify-between w-[120%]'>
          <button className='bg-slate-500 w-20 h-10 rounded-full animate-pulse'></button>
          <button className='bg-slate-500 w-20 h-10 rounded-full animate-pulse'></button>
        </div>
      </div>
      <div className='self-center bg-slate-500 w-40 h-20 animate-pulse rounded-lg' />
    </div>
  )
}

export default SelectedProjectSkeleton
