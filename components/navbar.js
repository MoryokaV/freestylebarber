import Image from 'next/image'
import Link from 'next/link'
import { IoMenu } from 'react-icons/io5'

import logo from 'public/assets/logo.png'

const NavLink = ({ children, href }) => (
  <Link
    href={href}
    className="hidden sm:block font-thing text-slate-300 hover:text-current hover:underline underline-offset-2 decoration-2 decoration-efGreenBright"
  >
    {children}
  </Link>
)

const MenuButton = () => (
  <button className="transition inline-flex justify-center rounded-md border border-zinc-700 p-2 text-sm sm:hidden shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-efGreen">
    <IoMenu className="h-5 w-5" />
  </button>
)

const Navbar = () => {
  return (
    <header className="px-4 left-0 right-0 top-0 py-3 bg-bodyBg/50 backdrop-blur-xl sticky z-10 flex max-sm:justify-between items-center justify-center gap-6 border-b-[1px] border-b-slate-400/25 w-full">
      <NavLink href="#">Acasă</NavLink>
      <NavLink href="#about">Despre</NavLink>

      <Image src={logo} width="150" />

      <NavLink href="#services">Servicii</NavLink>
      <NavLink href="#contact">Contact</NavLink>

      <MenuButton />
    </header>
  )
}

export default Navbar
