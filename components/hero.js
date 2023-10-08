import Image from 'next/image'
import Link from 'next/link'

import hero_bg1 from '../public/assets/hero-img1.jpg'
import hero_bg2 from '../public/assets/hero-img2.jpg'
import hero_bg3 from '../public/assets/hero-img3.jpg'
import { useState, useEffect } from 'react'

const StackedImage = ({ src, className }) => {
  return (
    <Image
      src={src}
      className={`absolute max-h-[500px] left-1/2 -translate-x-1/2 mx-auto border-zinc-200 border-4 ${className}`}
      width="350"
      alt="ef image"
    />
  )
}

export default function Hero() {
  const [stackIndex, setStackIndex] = useState([
    { z: '-z-0', brightness: 'brightness-100', opacity: 'opacity-100', rotate: 'rotate-[0deg]' },
    { z: '-z-10', brightness: 'brightness-75', opacity: 'opacity-75', rotate: 'rotate-[10deg]' },
    { z: '-z-20', brightness: 'brightness-50', opacity: 'opacity-50', rotate: 'rotate-[20deg]' }
  ])

  useEffect(() => {
    const stackInterval = setInterval(() => {
      stackIndex.unshift(stackIndex[2])
      stackIndex.pop()
      setStackIndex([...stackIndex])
    }, 3000)

    return () => clearInterval(stackInterval)
  }, [stackIndex])

  return (
    <section className="mx-auto max-w-7xl flex flex-col md:flex-row px-6 py-12">
      <div className="flex flex-col items-start justify-center sm:w-5/6 md:w-1/2 mx-auto">
        <h1 className="font-bold text-5xl uppercase mb-4 leading-tight">CREEAZĂ-ȚI PROPRIUL STIL ALĂTURI DE NOI</h1>
        <p className="mb-8">
          Un barber shop <strong>diferit</strong>. Denumirea <em>"Freestyle Barber"</em> ne caracterizează perfect prin
          stilul nostru aparte de lucru. Atenția la detalii conduce către rezultate remarcabile, făcându-i pe clienții
          noștrii să iasă în evidență.
        </p>
        <div className="flex justify-between gap-4">
          <Link href="tel:+40737506495">
            <button className="bg-efGreenBright border-2 border-efGreenBright hover:border-efGreen hover:bg-efGreen transition rounded px-5 py-2 font-medium">
              Programează-te acum
            </button>
          </Link>
          <Link href="#about">
            <button className="border-2 border-slate-300 hover:bg-slate-300 transition hover:text-black rounded px-5 py-2 font-medium">
              Află mai multe
            </button>
          </Link>
        </div>
      </div>
      <div className="mx-auto max-md:mt-20 sm:w-1/2 relative" style={{ height: '512px' }}>
        <StackedImage
          src={hero_bg1}
          className={`transition-all duration-700 ${stackIndex[0].rotate} ${stackIndex[0].brightness} ${stackIndex[0].opacity} ${stackIndex[0].z}`}
        />
        <StackedImage
          src={hero_bg2}
          className={`transition-all duration-700 ${stackIndex[1].rotate} ${stackIndex[1].brightness} ${stackIndex[1].opacity} ${stackIndex[1].z}`}
        />
        <StackedImage
          src={hero_bg3}
          className={`transition-all duration-700 ${stackIndex[2].rotate} ${stackIndex[2].brightness} ${stackIndex[2].opacity} ${stackIndex[2].z}`}
        />
      </div>
    </section>
  )
}
