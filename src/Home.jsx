import Navbar from './components/Navbar/Navbar'
import LandingPage from "./components/Home/LandingPage";
import About from "./components/Home/About";
import Cards from "./components/Home/Cards";
import Marquee from "./components/Home/Marquee";
import StartProject from "./components/Home/StartProject";
import Footer from "./components/Home/Footer";

function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <LandingPage />
      <About />
      <Cards/>
      <StartProject />
      <Marquee />
      <Footer />
    </div>
  )
}

export default Home