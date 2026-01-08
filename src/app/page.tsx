import Hero from "./components/Home/Hero";
import Navbar from "./components/Navbar";
import StackCards from "./svg/StackCards";

  export default function Home() {
    return(
      <main>
        <Navbar />
        <div className="container w-[98%] mx-auto">
          <Hero />
        </div>
      </main>
    )
  }