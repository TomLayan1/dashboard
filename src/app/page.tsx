import BoldStatement from "./components/Home/BoldStatement";
import Hero from "./components/Home/Hero";
import WhyTovah from "./components/Home/WhyTovah";
import Navbar from "./components/Navbar";
import StackCards from "./svg/StackCards";

  export default function Home() {
    return(
      <main>
        <Navbar />
        <div className="container w-[98%] mx-auto">
          <Hero />
        </div>
        <BoldStatement />
        <div className="container w-[98%] mx-auto">
          <WhyTovah />
        </div>
      </main>
    )
  }