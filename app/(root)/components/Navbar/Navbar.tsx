import { Logo } from "@/components/shared";
import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";


export default function Navbar() {
  return (
    <nav className="w-[90%] md:w-full md:max-w-5xl mx-auto sticky top-5 z-20 flex items-center
    justify-between px-6 py-3 bg-purple-500/30 backdrop-blur-md rounded-full shadow-lg border border-purple-400/20">

      <Logo/>
      <NavbarDesktop/>
      <NavbarMobile/>
    </nav>
    
  )
}
