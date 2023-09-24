import Image from 'next/image'
import Link from 'next/link'

import hero_bg1 from '../public/assets/hero-img1.jpg'
import hero_bg2 from '../public/assets/hero-img2.jpg'
import hero_bg3 from '../public/assets/hero-img3.jpg'

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
  return (
    <section className="mx-auto max-w-7xl flex flex-col md:flex-row px-6 py-12">
      <div className="flex flex-col items-start justify-center w-1/2">
        <h1 className="font-bold text-5xl uppercase mb-4 leading-tight">CREEAZĂ-ȚI PROPRIUL STIL ALĂTURI DE NOI</h1>
        <p className="mb-8">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English.
        </p>
        <div className="flex justify-between gap-4">
          <Link href="tel:+40736743002">
            <button className="bg-efGreenBright border-2 border-efGreenBright hover:border-efGreen hover:bg-efGreen transition rounded px-5 py-2 font-medium">
              Programează-te acum
            </button>
          </Link>
          <button className="border-2 border-slate-300 hover:bg-slate-300 transition hover:text-black rounded px-5 py-2 font-medium">
            Află mai multe
          </button>
        </div>
      </div>
      <div className="w-1/2 relative" style={{ height: '512px' }}>
        <StackedImage src={hero_bg1} />
        <StackedImage src={hero_bg2} className="rotate-[10deg] brightness-75 -z-10" />
        <StackedImage src={hero_bg3} className="rotate-[20deg] brightness-50 -z-20" />
      </div>
    </section>
  )
}
