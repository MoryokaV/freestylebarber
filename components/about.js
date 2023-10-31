import Image from 'next/image'
import SectionTitle from './section_title'

import hero_bg1 from '../public/assets/hero-img3.jpg'
import hero_bg2 from '../public/assets/hero-img6.jpg'
import avatar1 from '../public/assets/fahed.jpg'
import avatar2 from '../public/assets/elena.jpg'
import signature1 from '../public/assets/signature1.png'
import signature2 from '../public/assets/signature2.png'
import { PhotoProvider, PhotoView } from 'react-photo-view'

const SignatureImage = ({ img }) => <Image src={img} alt="barber signature" width="75" className="opacity-80" />

const ProfilePicture = ({ img }) => (
  <Image src={img} alt="barber profile picture" className="rounded-full flex-grow-0" height="300" />
)

const About = () => {
  return (
    <section id="about" className="w-100 bg-bodyBgAccent px-6 py-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Despre noi" width="w-14" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 w-full items-start justify-start gap-4 mb-12">
          <div className="col-span-2">
            <h3 className="text-efGreenBright tracking-widest font-medium text-lg mb-1">Bine ai venit!</h3>
            <h4 className="tracking-wide font-bold text-xl uppercase mb-4">Noi suntem Freestyle Barber E/F</h4>
            <p className="opacity-70">
              Dedicat atât pentru <em>&quot;el&quot;</em> cât și pentru <em>&quot;ea&quot;</em>. Căutăm să fim mereu în
              pas cu ultimele tendințe prin gama noastră largă de servicii. Te așteptăm în salonul nostru modern pentru
              orice tip de tunosare. Chiar dacă suntem un <em>barber shop</em>, satisfacem toate cerințele doamnelor și
              domnișoarelor.
            </p>
          </div>
          <PhotoProvider>
            <PhotoView src={hero_bg1.src} key={1}>
              <Image src={hero_bg1} key={1} className="col-span-1" alt="about-img" />
            </PhotoView>
            <PhotoView src={hero_bg2.src} key={2}>
              <Image src={hero_bg2} key={2} className="col-span-1" alt="about-img" />
            </PhotoView>
          </PhotoProvider>
          <div className="col-span-2">
            <h3 className="text-efGreenBright tracking-widest font-medium text-lg mb-1">Te așteptăm</h3>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 mx-auto justify-items-center">
        <div className="max-sm:max-w-[400px] col-span-1 md:col-span-2 p-3 shadow max-w-3xl flex max-md:flex-col max-md:items-center bg-white/5 rounded-full gap-6 max-md:rounded-bl-none rounded-br-none">
          <ProfilePicture img={avatar2} />
          <div className="max-sm:px-6 max-md:mb-2 md:pr-14">
            <h3 className="text-efGreenBright font-bold mb-2 tracking-wider text-xl">Elena Țocu</h3>
            <p className="opacity-60 mb-4">
              &quot;Am 25 de ani și lucrez în domeniul înfrumusețării de 5 ani, prestând servicii atat pentru bărbați
              cât și pentru femei. Am participat de-a lungul carierei mele la numeroase seminarii, punând calitatea pe
              primul loc în fața clienților. Devotamentul și pasiunea sunt cele care m-au adus în punctul în care sunt
              astăzi.&quot;
            </p>
            <SignatureImage img={signature2} />
          </div>
        </div>

        <div className="max-sm:max-w-[400px] col-span-1 md:col-span-2 p-3 shadow max-w-3xl flex max-md:flex-col sm:max-md:justify-end max-md:items-center bg-white/5 rounded-full gap-6 max-md:rounded-tr-none rounded-tl-none">
          <div className="max-md:px-6 max-md:mt-2 md:pl-14">
            <h3 className="text-efGreenBright font-bold mb-2 tracking-wider text-xl">Fahed Twit</h3>
            <p className="opacity-60 mb-4">
              &quot;25 de ani, dintre care 3 dedicați 100% meseriei mele. Am parcurs un drum lung în care am evoluat,
              învățat și m-am autodepasit, dar călătoria cunoașterii nu se va opri prea curând. Îmi propun sa aduc un
              nou stil in domeniu, sa dau o notă de originalite muncii mele.&quot;
            </p>
            <SignatureImage img={signature1} />
          </div>
          <ProfilePicture img={avatar1} />
        </div>
      </div>
    </section>
  )
}

export default About
