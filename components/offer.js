import SectionTitle from './section_title'

const Item = ({ title, price, description }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1 text-lg">
      <h6 className="font-semibold">{title}</h6>
      <span className="text-efAmber font-bold">{price} RON</span>
    </div>
    <p className="opacity-50 mb-4">{description}</p>
    <hr className="opacity-20" />
  </div>
)

const Offer = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 py-6">
      <SectionTitle title="Oferte" width="w-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <Item title="Tuns bărbați" price="50.00" description="Stilul tău marcat de atenție la detalii" />
          <Item title="Tuns copii" price="40.00" description="În pas cu ultimele tendințe" />
          <Item title="Pensat" price="25.00" description="Recapătăți forma sprăncenelor" />
          <Item title="Spălat capilar" price="15.00" description="Întreținerea unui scalp sănătos" />
        </div>
        <div>
          <Item title="Tuns barbă" price="20.00" description="Redă contur feței" />
          <Item title="Vopsit barbă" price="20.00" description="Cu produse de cea mai înaltă calitate" />
          <Item title="Șuvițe" price="80.00" description="Materiale premium și proceduri de top" />
          <Item title="Tuns damă" price="45.00" description="Volum, formă, stil" />
        </div>
        <div>
          <Item title="Spălat damă" price="40.00" description="Pentru îngrijirea atentă a părului tău" />
          <Item title="Aranjat" price="40.00" description="Periat si uscat cu feon" />
          <Item title="Vopsit balayage" price="200/250" description="Păr damă mediu/lung" />
          <Item title="Coafat" price="100/150/200" description="Păr damă scurt/mediu/lung" />
        </div>
      </div>
    </section>
  )
}

export default Offer
