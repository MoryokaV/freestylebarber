import { useState, useEffect } from 'react'
import SectionTitle from './section_title'
import NextImage from 'next/image'
import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { BsInstagram, BsStarFill } from 'react-icons/bs'

import gallery_img0 from 'public/assets/gallery/gallery0.jpg'
import gallery_img1 from 'public/assets/gallery/gallery1.webp'
import gallery_img3 from 'public/assets/gallery/gallery3.webp'
import gallery_img4 from 'public/assets/gallery/gallery4.webp'
import gallery_img5 from 'public/assets/gallery/gallery5.webp'
import gallery_img6 from 'public/assets/gallery/gallery6.webp'
import gallery_img7 from 'public/assets/gallery/gallery7.webp'
import gallery_img8 from 'public/assets/gallery/gallery8.webp'
import gallery_img9 from 'public/assets/gallery/gallery9.webp'
import gallery_img10 from 'public/assets/gallery/gallery10.webp'
import gallery_img11 from 'public/assets/gallery/gallery11.webp'
import gallery_img12 from 'public/assets/gallery/gallery12.webp'
import gallery_img13 from 'public/assets/gallery/gallery13.webp'

import 'react-photo-view/dist/react-photo-view.css'
import { PhotoProvider, PhotoView } from 'react-photo-view'

const reviewsUrl =
  'https://www.google.ro/maps/place/Freestyle+Barber+EF/@45.2671808,27.9696536,17z/data=!4m8!3m7!1s0x40b72971188fe8d5:0x453e45916ea0d0cc!8m2!3d45.2671808!4d27.9722285!9m1!1b1!16s%2Fg%2F11vbklgdt2?entry=ttu'

const slides = [
  gallery_img0,
  gallery_img1,
  gallery_img3,
  gallery_img4,
  gallery_img5,
  gallery_img6,
  gallery_img7,
  gallery_img8,
  gallery_img9,
  gallery_img10,
  gallery_img11,
  gallery_img12,
  gallery_img13
]

const CarouselButton = ({ children, onClick }) => {
  return (
    <button
      className="p-[0.4rem] pointer-events-auto rounded-full shadow bg-white opacity-40 hover:opacity-60 transition text-gray-800"
      onClick={onClick}
      aria-label="carousel next/prev button"
    >
      {children}
    </button>
  )
}

const Carousel = ({ children, autoplay = true, autoplayInterval = 4000 }) => {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex(index === 0 ? slides.length - 1 : index - 1)
  const next = () => setIndex(index === slides.length - 1 ? 0 : index + 1)

  useEffect(() => {
    if (!autoplay) return

    const slideInterval = setInterval(next, autoplayInterval)

    return () => clearInterval(slideInterval)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return (
    <div className="overflow-hidden relative rounded h-[490px] sm:h-[85vh] min-h-[400px] bg-bodyBgAccent">
      <div
        className="flex h-full items-center transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-between p-4">
        <CarouselButton onClick={prev}>
          <FaChevronLeft size={15} />
        </CarouselButton>
        <CarouselButton onClick={next}>
          <FaChevronRight size={15} />
        </CarouselButton>
      </div>
      <div className="absolute pointer-events-none bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 bg-white rounded-full ${i === index ? 'p-1.5' : 'bg-opacity-50'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Gallery = () => {
  return (
    <section className="max-w-xl mx-auto px-6 pb-6">
      <SectionTitle title="STILUL TĂU" width="w-16" />

      <div className="flex items-center justify-center mb-4 gap-2">
        <BsStarFill color="#fcc419" size="20" />
        <BsStarFill color="#fcc419" size="20" />
        <BsStarFill color="#fcc419" size="20" />
        <BsStarFill color="#fcc419" size="20" />
        <BsStarFill color="#fcc419" size="20" />
        <span className="opacity-60 text-md flex-shrink-0"> (5.0) pe </span>
        <Link
          href={reviewsUrl}
          target="_blank"
          className="flex-shrink-0 hover:scale-105 transition-all decoration-efAmber underline-offset-2 text-xl"
        >
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
          <span className="opacity-80"> Reviews</span>
        </Link>
      </div>
      <PhotoProvider speed={() => 500} easing={type => (type === 1 ? 'cubic-bezier(0.25, 0.8, 0.25, 1)' : 'linear(0)')}>
        <Carousel>
          {slides.map((slide, index) => (
            <PhotoView src={slide.src} key={index}>
              <NextImage
                src={slide}
                alt={`gallery image ${index}`}
                key={index}
                style={{ objectFit: 'contain' }}
                loading="eager"
              />
            </PhotoView>
          ))}
        </Carousel>
      </PhotoProvider>
      <Link href="https://www.instagram.com/freestyle_barber.ef" target="_blank" className="table mx-auto">
        <button className="flex items-center gap-2 bg-efGreenBright hover:bg-efGreen transition rounded-lg rounded-br-none rounded-tl-[1px] px-4 py-2 my-4 uppercase font-medium">
          <BsInstagram />
          <span>Follow pe Instagram</span>
        </button>
      </Link>
    </section>
  )
}

export default Gallery
