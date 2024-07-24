import About from "../Component/About"
import Contact from "../Component/Contact"
import LandingPage from "../Component/LandingPage"
import Services from "../Component/Services"



const Home = () => {
  return (
    <div>
        <LandingPage/>
        <About/>
        <Services/>
        <Contact/>
    </div>
  )
}

export default Home;