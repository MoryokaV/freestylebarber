import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineGoogle, AiOutlinePhone } from 'react-icons/ai'

const Contact = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 mb-8">
      <section className="border border-efAmber/40" id="contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d702.0094874526401!2d27.972257423861382!3d45.26724363795718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b72971188fe8d5%3A0x453e45916ea0d0cc!2sFreestyle%20Barber%20EF!5e0!3m2!1sen!2sro!4v1697106596415!5m2!1sen!2sro"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
          style={{
            width: '100%',
            height: '550px',
            filter: 'grayscale(80%) invert(95%) contrast(90%) hue-rotate(180deg)'
          }}
        ></iframe>
        <div className="grid sm:grid-cols-2 border-t border-t-efAmber/40">
          <div className="px-5 pt-5 pb-7 md:pb-9 max-sm:border-b border-b-efAmber/40 sm:border-r border-r-efAmber/40">
            <h5 className="uppercase text-efAmber font-extrabold text-2xl mb-5 text-center">CONATACT INFO</h5>
            <div className="grid lg:grid-cols-2 max-sm:gap-5 gap-3">
              <p className="tracking-wider text-zinc-300 sm:max-lg:text-center">
                <span className="text-efAmber">Adresă &bull; </span>
                Calea Călărașilor 30, Modulul 8, Brăila 810017, România
              </p>
              <div className="sm:max-lg:text-center">
                <p className="tracking-wider text-zinc-200 mb-1">
                  <span className="text-efAmber">
                    <AiOutlinePhone className="inline w-6 h-6" /> Elena Țocu &bull;{' '}
                  </span>
                  <Link
                    href="tel:+40730517341"
                    className="hover:underline underline-offset-2 transition hover:text-efGreenBright text-lg"
                  >
                    0730517341
                  </Link>
                </p>
                <p className="tracking-wider text-zinc-200">
                  <span className="text-efAmber">
                    <AiOutlinePhone className="inline w-6 h-6" /> Fahed Twit &bull;{' '}
                  </span>
                  <Link
                    href="tel:+40737506495"
                    className="hover:underline underline-offset-2 transition hover:text-efGreenBright text-lg"
                  >
                    0737506495
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="px-5 pt-5 pb-7 md:pb-9">
            <h5 className="uppercase text-efAmber font-extrabold text-2xl mb-5 text-center">Social Media</h5>
            <div className="grid lg:grid-cols-2 max-sm:gap-5 gap-3">
              <div className="flex items-center sm:justify-center gap-2 text-zinc-200 flex-wrap" target="_blank">
                <p className="text-efAmber">Freestyle Barber EF &bull; </p>
                <Link
                  href="https://www.instagram.com/freestyle_barber.ef"
                  target="_blank"
                  aria-label="Instagram account link"
                >
                  <AiOutlineInstagram className="transition w-7 h-7 hover:text-efGreenBright" />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61551067448122"
                  target="_blank"
                  aria-label="Facebook account link"
                >
                  <AiOutlineFacebook className="transition w-7 h-7 hover:text-efGreenBright" />
                </Link>
                <Link href="https://maps.app.goo.gl/SWh7aA76JpEzasUS6" target="_blank" aria-label="Google account link">
                  <AiOutlineGoogle className="transition w-7 h-7 hover:text-efGreenBright" />
                </Link>
              </div>
              <div className="sm:max-lg:text-center">
                <p className="text-zinc-200 mb-1">
                  <span className="text-efAmber">Elena Țocu &bull; </span>
                  <Link
                    href="https://www.instagram.com/elena_tocu_/"
                    className="hover:underline underline-offset-2 hover:text-efGreenBright transition"
                    target="_blank"
                  >
                    @elena_tocu_
                  </Link>
                </p>
                <p className="text-zinc-200">
                  <span className="text-efAmber">Fahed Twit &bull; </span>
                  <Link
                    href="https://www.instagram.com/twit_fahed/"
                    className="hover:underline underline-offset-2 hover:text-efGreenBright transition"
                    target="_blank"
                  >
                    @twit_fahed
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Contact
