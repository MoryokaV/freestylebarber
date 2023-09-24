import { SlMustache } from 'react-icons/sl'

const SectionTitle = ({ title, width }) => (
  <div className="text-center mb-8">
    <h3 className="text-xl font-medium uppercase">{title}</h3>
    <div className="flex items-center justify-center gap-2">
      <div className={'h-[1px] bg-zinc-600 ' + width}></div>
      <SlMustache className="text-efAmber" size="1.5em" />
      <div className={'h-[1px] bg-zinc-600 ' + width}></div>
    </div>
  </div>
)

export default SectionTitle
