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
              Dedicat atât pentru "el" cât și pentru "ea". Căutăm să fim mereu în pas cu ultimele tendințe prin gama noastră largă de servicii. Te așteptăm în salonul nostru modern pentru orice tip de tunosare. Chiar dacă suntem un <em>barber shop</em>, satisfacem toate cerințele doamnelor și domnișoarelor. 
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
        text="Am 25 de ani și lucrez în domeniul înfrumusețării de 5 ani, prestând servicii atat pentru bărbați cât și pentru femei. Am participat de-a lungul carierei mele la numeroase seminarii, punând calitatea pe primul loc în fața clienților. Devotamentul și pasiunea sunt cele care m-au adus în punctul în care sunt astăzi."
      />
      <BarberCard
        profile_img={avatar1}
        signature_img={signature1}
        name="Fahed Twit"
        pos={2}
        text="24 de ani, dintre care 3 dedicați 100% meseriei mele. Am parcurs un drum lung în care am evoluat, învățat și autodepasit, dar călătoria cunoașterii nu se va opri prea curând. Îmi propun sa aduc un nou stil in domeniu, sa dau o notă de originalite muncii mele."
      />
    </section>
  )
}

export default About
