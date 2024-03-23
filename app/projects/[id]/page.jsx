import { getProjectById } from '@/app/api/pokemon'
import { Arrow, BackArrow, honkFont, parseDate, stacks } from '@/app/utils'
import ExternalLinkButton from '@/components/ExternalLinkButton'
import { grandstander } from '@/components/HomeButton'
import ProjectDetailsSkeleton from '@/components/ProjectDetailsSkeleton'
import Link from 'next/link'
import React, { Suspense } from 'react'

const Page = async ({ params }) => {
  const id = params.id
  const data = await getProjectById(id)
  const date = new Date(data.createdAt)

  const minImages = data.images.slice(1, 3)

  return (
    <Suspense fallback={<ProjectDetailsSkeleton />}>
      <div className='flex flex-col md:flex-row mt-4 p-4 gap-2 justify-center items-center'>
        <Link
          className='absolute -top-1 left-1 text-2xl w-12 rotate-180 rounded-xl '
          href={'/projects'}
        >
          <Arrow />
        </Link>
        <div className='md:max-w-2xl gap-2 flex flex-col w-full'>
          <img
            className='md:flex md:flex-1 w-full min-w-96 h-80 object-cover object-top mt-4'
            src={data.images[0].original}
            alt={data.images[0].originalAlt}
          />
          {data.images.length > 1 && (
            <div className='flex flex-wrap w-full justify-between'>
              {minImages.map((image) => (
                <img
                  key={image.original}
                  className='w-[49%] h-60 object-cover object-top'
                  src={image.original}
                  alt={image.originalAlt}
                />
              ))}
            </div>
          )}
        </div>
        <div className='flex flex-col p-2 md:max-w-[50%]'>
          <p className='text-sm -mb-2'>#{data._id}</p>
          <h2 className={`text-5xl ${honkFont.className} `}>{data.name}</h2>
          <p className='text-sm -mt-1'>Ult. Mod. {parseDate(date)}</p>
          <p className={`my-2 ${grandstander.className}`}>
            {data.descriptionEs}
          </p>
          <div className='flex flex-wrap gap-4 my-2'>
            {data.stack.map((stack) => (
              <span className='w-16 h-16' key={stack}>
                {stacks[stack.trim()]}
              </span>
            ))}
          </div>
          <div className='flex justify-evenly items-center my-2'>
            {data.deploy && (
              <ExternalLinkButton
                href={data.deploy}
                text={'Visitar'}
                title={data.name}
              />
            )}
            {data.repo && (
              <ExternalLinkButton
                href={data.repo}
                text={'GitHub'}
                title={data.name}
              />
            )}
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default Page
