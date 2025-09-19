import HeroBlock from "./components/HeroBlock/HeroBlock";
import Navbar from "./components/Navbar/Navbar";


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900
    via-purple-900 to-slate-900">
     
      <Navbar />
      <HeroBlock />
    </div>
  );
}
