import Head from 'next/head'
import Navbar from 'components/navbar'
import Hero from 'components/hero'
import About from 'components/about'
import Offer from 'components/offer'
import Gallery from 'components/gallery'
import Footer from 'components/footer'
import Contact from '@/components/contact'
import { DefaultSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Freestyle Barber EF</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <DefaultSeo 
        title="Freestyle Barber EF | Salon frizerie Brăila"
        description="Un barber shop diferit. Pentru 'el' și pentru 'ea'. Experiență de 5 stele la cele mai mici prețuri din oraș."
        canonical="freestylebarber-ef.ro"
        openGraph={{
          type: "website",
          locale: "ro-RO",
          url: "freestylebarber-ef.ro",
          siteName: "Freestyle-Barber-EF",
          title: "Freestyle Barber EF | Un nou barber shop în Brăila",
          description: "Un barber shop diferit. Pentru 'el' și pentru 'ea'.",
          images: [
            {
              url: "",
              width: 1200,
              height: 630,
              alt: "Freestyle Barber EF logo"
            }
          ]
        }}
        keywords={[
          "barber shop",
          "barber shop Brăila",
          "tuns barbă",
          "fade cut",
          "masaj capilar",
          "tuns damă",
          "coafat",
          "styling bărbați",
          "servicii de tuns si îngrijire",
          "tuns modern",
          "expert tuns",
          "programare telefonică",
          "tuns păr",
          "rating 5 stele",
          "buzz cut",
          "frizerie brăila",
          "salon tuns brăila",
        ]}
      />

      <Navbar />

      <Hero />
      <About />
      <Offer />
      <Gallery />
      <Contact />

      <Footer />
    </>
  )
}
