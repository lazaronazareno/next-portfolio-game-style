import HomeButton from '@/components/HomeButton'
import { Luckiest_Guy } from 'next/font/google'
import { honkFont } from './utils'

const luckiestFont = Luckiest_Guy({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className='flex flex-col text-center items-center'>
        <h1 className={`text-8xl -skew-x-12 -rotate-3 ${honkFont.className}`}>
          Portfolio
        </h1>
        <h3
          className={`bg-slate-100 -mt-4 mb-4 rounded w-1/2 text-4xl skew-x-12 -rotate-6 ${honkFont.className}`}
        >
          Game Style
        </h3>
      </div>
      <div className='flex flex-col items-center p-4 gap-4'>
        <HomeButton text={'Projects'} url={'/projects'} animate />
        <HomeButton text={'About'} url={'/about'} animate />
      </div>
    </main>
  )
}
