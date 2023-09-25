import Image from 'next/image'

import hero_bg1 from '../public/assets/hero-img2.jpg'
import hero_bg2 from '../public/assets/hero-img3.jpg'
import avatar1 from '../public/assets/avatar1.jpg'
import avatar2 from '../public/assets/elena.jpg'
import signature1 from '../public/assets/signature1.png'
import signature2 from '../public/assets/signature2.png'
import SectionTitle from './section_title'

const SignatureImage = ({ img }) => <Image src={img} alt="barber signature" width="75" />

const ProfilePicture = ({ img }) => (
  <Image src={img} alt="barber profile picture" className="rounded-full flex-grow-0" height="300" />
)

const BarberCard = ({ text, name, profile_img, signature_img, pos }) => {
  return (
    <div
      className={`mx-auto p-3 shadow max-w-3xl flex bg-white/5 rounded-full mb-4 gap-6 ${
        pos == 1 && 'rounded-br-none'
      } ${pos == 2 && 'rounded-tl-none'}`}
    >
      {pos == 1 && <ProfilePicture img={profile_img} />}
      <div className={`${pos == 1 && 'pr-14'} ${pos == 2 && 'pl-14'}`}>
        <h4 className="text-efGreenBright font-bold mb-2 tracking-wider text-xl">{name}</h4>
        <p className="opacity-60 mb-4">"{text}"</p>
        <SignatureImage img={signature_img} />
      </div>
      {pos == 2 && <ProfilePicture img={profile_img} />}
    </div>
  )
}

const About = () => {
  return (
    <section id="about" className="w-100 bg-bodyBgAccent px-8 py-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Despre noi" width="w-14" />

        <div className="flex items-start justify-start gap-8 mb-12">
          <div className="w-1/3">
            <h6 className="text-efGreenBright tracking-widest font-medium text-lg mb-1">Bine ai venit!</h6>
            <h4 className="tracking-wide font-bold text-xl uppercase mb-4">Noi suntem Freestyle Barber E/F</h4>
            <p className="opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla massa, eleifend quis laoreet vitae,
              euismod quis sem. Vestibulum ac dapibus orci. Phasellus eu pretium neque. Quisque varius mi sed convallis
              dapibus. Nam sed lectus tincidunt, lacinia massa quis, gravida ligula. Aliquam erat volutpat.
            </p>
          </div>
          <div className="w-1/3 flex gap-2">
            <Image src={hero_bg1} className="w-1/2" alt="about-img" />
            <Image src={hero_bg2} className="w-1/2" alt="about-img" />
          </div>
          <div className="w-1/3">
            <h6 className="text-efGreenBright tracking-widest font-medium text-lg mb-1">Te așteptăm</h6>
            <h4 className="tracking-wide font-bold text-xl uppercase mb-4">Program de lurcu</h4>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <p className="opacity-70">Luni</p>
                <p className="text-efAmber">09.00 - 18.00</p>
              </div>
              <div className="flex justify-between">
                <p className="opacity-70">Marți</p>
                <p className="text-efAmber">09.00 - 18.00</p>
              </div>
              <div className="flex justify-between">
                <p className="opacity-70">Miercuri</p>
                <p className="text-efAmber">09.00 - 18.00</p>
              </div>
              <div className="flex justify-between">
                <p className="opacity-70">Joi</p>
                <p className="text-efAmber">09.00 - 18.00</p>
              </div>
              <div className="flex justify-between">
                <p className="opacity-70">Vineri</p>
                <p className="text-efAmber">09.00 - 18.00</p>
              </div>
              <div className="flex justify-between">
                <p className="opacity-70">Sâmbătă</p>
                <p className="text-efAmber">09.00 - 16.00</p>
              </div>
              <div className="flex justify-between">
                <p className="opacity-70">Dumincă</p>
                <p className="text-efAmber">Închis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle title="Artiștii noștrii" width="w-20" />

      <BarberCard
        profile_img={avatar2}
        signature_img={signature2}
        pos={1}
        name="Elena Țocu"
        text="Sed non turpis non libero pulvinar efficitur. Quisque eget magna varius, dictum ex a, eleifend ipsum. Donec in gravida purus. Suspendisse eu ornare dui. Sed varius Nunc eros est, mollis et suscipit non"
      />
      <BarberCard
        profile_img={avatar1}
        signature_img={signature1}
        name="Fahed Twit"
        pos={2}
        text="Nulla aliquam turpis ut enim finibus vestibulum. Ut auctor, elit eu iaculis porttitor, nisi mauris dictum dolor, at porttitor sem enim lacinia urna. Donec ex tortor, iaculis a odio a, consequat eleifend mi. Donec lobortis, massa nec mollis ultri libero nisl "
      />
    </section>
  )
}

export default About
