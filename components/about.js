import { SlMustache } from 'react-icons/sl'
import Image from 'next/image'

import hero_bg1 from '../public/assets/hero-img2.jpg'
import hero_bg2 from '../public/assets/hero-img3.jpg'

const About = () => {
  return (
    <section id="about" className="w-100 bg-[#1a1a1a] px-8 py-6 h-[500px]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-xl font-medium uppercase">Despre noi</h3>
          <div class="flex items-center justify-center gap-2">
            <div className="h-[1px] bg-zinc-600 w-14"></div>
            <SlMustache className="text-amber-600" size="1.5em" />
            <div className="h-[1px] bg-zinc-600 w-14"></div>
          </div>
        </div>
        <div class="flex items-start justify-start gap-8">
          <div class="w-1/3">
            <h6 class="text-efGreenBright tracking-widest font-medium text-lg mb-1">Bine ai venit!</h6>
            <h4 class="tracking-wide font-bold text-xl uppercase mb-4">Noi suntem Freestyle Barber E/F</h4>
            <p class="opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla massa, eleifend quis laoreet vitae,
              euismod quis sem. Vestibulum ac dapibus orci. Phasellus eu pretium neque. Quisque varius mi sed convallis
              dapibus. Nam sed lectus tincidunt, lacinia massa quis, gravida ligula. Aliquam erat volutpat.
            </p>
          </div>
          <div class="w-1/3 flex gap-2">
            <Image src={hero_bg1} class="w-1/2" />
            <Image src={hero_bg2} class="w-1/2" />
          </div>
          <div class="w-1/3">
            <h6 class="text-efGreenBright tracking-widest font-medium text-lg mb-1">Te așteptăm</h6>
            <h4 class="tracking-wide font-bold text-xl uppercase mb-4">Program de lurcu</h4>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <p className="opacity-70">Luni</p>
                <p className="text-amber-600">09.00 - 19.00</p>
              </div>
              <div className="flex justify-between">
                <p className="opacity-70">Marți</p>
                <p className="text-amber-600">09.00 - 19.00</p>
              </div>
              <div className="flex justify-between">
                <p className="opacity-70">Miercuri</p>
                <p className="text-amber-600">09.00 - 19.00</p>
              </div>
              <div className="flex justify-between">
                <p className="opacity-70">Joi</p>
                <p className="text-amber-600">09.00 - 19.00</p>
              </div>
              <div className="flex justify-between">
                <p className="opacity-70">Vineri</p>
                <p className="text-amber-600">09.00 - 18.00</p>
              </div>
              <div className="flex justify-between">
                <p className="opacity-70">Sâmbătă</p>
                <p className="text-amber-600">09.00 - 14.00</p>
              </div>
              <div className="flex justify-between">
                <p className="opacity-70">Dumincă</p>
                <p className="text-amber-600">Închis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
