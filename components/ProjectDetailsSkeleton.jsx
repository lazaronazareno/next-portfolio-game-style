import React from 'react'

const ProjectDetailsSkeleton = () => {
  return (
    <div className='flex flex-col md:flex-row mt-4 p-4 gap-2 justify-center items-center'>
      <div className='md:max-w-2xl gap-2 flex flex-col w-full'>
        <div className='md:flex md:flex-1 w-full bg-slate-300 animate-pulse min-w-96 h-80 object-cover object-top mt-4' />
        <div className='flex flex-wrap w-full justify-between'>
          <div className='w-[49%] h-60 bg-slate-200 animate-pulse' />
          <div className='w-[49%] h-60 bg-slate-200 animate-pulse' />
        </div>
      </div>
      <div className='flex flex-col p-2 md:max-w-[50%]'>
        <p className='text-sm -mb-2 bg-slate-200 h-2 animate-pulse'></p>
        <h2 className={`text-5xl bg-slate-200 w-32 animate-pulse`}></h2>
        <p className='text-sm -mt-1 bg-slate-200 h-2 animate-pulse'></p>
        <div className='bg-slate-200 w-20 animate-pulse' />
        <div className='bg-slate-200 w-24 animate-pulse' />
        <div className='bg-slate-200 w-16 animate-pulse' />
        <div className='flex flex-wrap gap-4 my-2'>
          <div className='w-16 h-16 bg-slate-200 animate-pulse' />
          <div className='w-16 h-16 bg-slate-200 animate-pulse' />
          <div className='w-16 h-16 bg-slate-200 animate-pulse ' />
        </div>
        <div className='flex justify-evenly items-center my-2'>
          <button className='bg-slate-500 w-20 h-10 rounded-full animate-pulse'></button>
          <button className='bg-slate-500 w-20 h-10 rounded-full animate-pulse'></button>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsSkeleton
