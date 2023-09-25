import { useState, useEffect } from 'react'
import SectionTitle from './section_title'
import NextImage from 'next/image'
import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

import gallery_img1 from 'public/assets/gallery/gallery1.jpg'
import gallery_img3 from 'public/assets/gallery/gallery3.JPG'
import gallery_img4 from 'public/assets/gallery/gallery4.jpg'
import gallery_img6 from 'public/assets/gallery/gallery6.JPG'
import gallery_img7 from 'public/assets/gallery/gallery7.jpg'
import gallery_img8 from 'public/assets/gallery/gallery8.jpg'
import gallery_img9 from 'public/assets/gallery/gallery9.JPG'
import gallery_img10 from 'public/assets/gallery/gallery10.jpg'
import gallery_img11 from 'public/assets/gallery/gallery11.JPG'

import 'react-photo-view/dist/react-photo-view.css'
import { PhotoProvider, PhotoView } from 'react-photo-view'

const slides = [
  gallery_img1,
  gallery_img3,
  gallery_img4,
  gallery_img6,
  gallery_img7,
  gallery_img8,
  gallery_img9,
  gallery_img10,
  gallery_img11
]

const CarouselButton = ({ children, onClick }) => {
  return (
    <button
      className="p-[0.4rem] pointer-events-auto rounded-full shadow bg-white opacity-40 hover:opacity-60 transition text-gray-800"
      onClick={onClick}
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
    <section className="max-w-xl mx-auto px-8 pb-6">
      <SectionTitle title="STILUL TĂU" width="w-16" />
      <PhotoProvider speed={() => 500} easing={type => (type === 1 ? 'cubic-bezier(0.25, 0.8, 0.25, 1)' : 'linear(0)')}>
        <Carousel>
          {slides.map((slide, index) => (
            <PhotoView src={slide.src} key={index}>
              <img src={slide.src} alt={`gallery image ${index}`} key={index} style={{ objectFit: 'contain' }} />
            </PhotoView>
          ))}
        </Carousel>
      </PhotoProvider>
      <Link href="https://www.instagram.com/freestyle_barber.ef" target="_blank">
        <button className="mx-auto flex items-center gap-2 bg-efGreenBright hover:bg-efGreen transition rounded px-4 py-2 my-4 uppercase font-medium">
          <BsInstagram />
          <span>Follow on instagram</span>
        </button>
      </Link>
    </section>
  )
}

export default Gallery
