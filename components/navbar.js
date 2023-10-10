import Image from 'next/image'
import Link from 'next/link'
import { IoMenu } from 'react-icons/io5'

import logo from 'public/assets/logo.png'
import { useEffect, useState } from 'react'

const NavLink = ({ children, href }) => (
  <Link
    href={href}
    className="hidden sm:block font-thing text-slate-300 hover:text-current hover:underline underline-offset-2 decoration-2 decoration-efGreenBright"
  >
    {children}
  </Link>
)


const MenuButton = ({action, active}) => (
  <button 
    onClick={() => action(!active)}
    className="transition inline-flex justify-center rounded-md border border-zinc-700 p-2 text-sm sm:hidden shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-efGreen" id="menu-button" aria-expanded="true" aria-haspopup="true"
  >
    <IoMenu className="h-5 w-5" />
  </button>
)

const Menu = ({active}) => (
  <div className={`${active ? "opacity-1 scale-100" : "opacity-0 scale-50"} transition absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-bodyBgAccent shadow-lg border border-zinc-700 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
    <div className="py-1" role="none">
      <div className="px-3 py-2 uppercase font-bold text-xs">
        Secțiuni
      </div>
      <MenuLink href="#">Acasă</MenuLink>
      <MenuLink href="#about">Despre</MenuLink>
      <MenuLink href="#services">Servicii</MenuLink>
      <MenuLink href="#contact">Contact</MenuLink>
    </div>
  </div>
)

const MenuLink = ({children, href}) => (
  <Link href={href} className="hover:bg-zinc-700 text-gray-300 block px-4 py-2 text-sm">{children}</Link>
)

const Navbar = () => {
  const [active, setMenuActive] = useState(false)

  const handleWindowResize = () => {
    if(window.innerWidth > 640 && active === true){
        setMenuActive(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)

    return () => window.removeEventListener("resize", handleWindowResize)
  }, [active]);

  return (
    <header className="px-4 left-0 right-0 top-0 py-3 bg-bodyBg/50 backdrop-blur-xl sticky z-10 flex max-sm:justify-between items-center justify-center gap-6 border-b-[1px] border-b-slate-400/25 w-full">
      <NavLink href="#">Acasă</NavLink>
      <NavLink href="#about">Despre</NavLink>

      <Image src={logo} width="150" />

      <NavLink href="#services">Servicii</NavLink>
      <NavLink href="#contact">Contact</NavLink>

      <div className="relative">
        <MenuButton action={setMenuActive} active={active} />
        <Menu active={active}/>
      </div>
    </header>
  )
}

export default Navbar
