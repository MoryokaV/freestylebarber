import Link from 'next/link'

const NavLink = ({ children, href }) => (
  <Link
    href={href}
    className="font-bold text-slate-300 hover:text-current hover:underline underline-offset-2 decoration-2 decoration-efGreenBright"
  >
    {children}
  </Link>
)

const Navbar = () => {
  return (
    <header className="left-0 right-0 top-0 py-3 bg-bodyBg/50 backdrop-blur-xl sticky z-10 flex items-center justify-center gap-4 border-b-[1px] border-b-slate-400/25 w-full">
      <NavLink href="#">Acasă</NavLink>
      <NavLink href="#about">Despre</NavLink>

      <div className="text-center px-8 italic font-medium">Freestyle Barber E/F</div>

      <NavLink href="#services">Servicii</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </header>
  )
}

export default Navbar
