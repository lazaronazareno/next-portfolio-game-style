import React, { Fragment, Suspense } from 'react'
import { getAllProjects } from '../api/pokemon'
import ProjectList from '@/components/ProjectList'
import Link from 'next/link'
import { Arrow } from '../utils'

export const metadata = {
  title: 'Proyectos | Lazaro Vega Sanchez Portfolio',
  description:
    'Proyectos de github/lazaronazareno como si fuera una seleccion de personajes de videojuego'
}

const Projects = async () => {
  const list = await getAllProjects()

  return (
    <div className='w-full max-w-screen-xl h-screen mx-auto pt-6'>
      <Link
        className='absolute -top-1 left-1 text-2xl w-12 rotate-180 rounded-xl '
        href={'/'}
      >
        <Arrow />
      </Link>
      <Suspense fallback={<span>Cargando...</span>}>
        <ProjectList list={list} />
      </Suspense>
    </div>
  )
}

export default Projects
