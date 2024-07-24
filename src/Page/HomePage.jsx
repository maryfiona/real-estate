import Navbar from '../Component/Navbar';
import Home from './Home';
import About from '../Component/About';
import Services from '../Component/Services';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Contact from '../Component/Contact';
import Footer from '../Component/Footer';
const HomePage = () => {
  return (
    <div>
   <Router>
    <div>
      <Navbar/>
      <Routes>
             <Route path="/" element={<Home />} />
           <Route path="/About" element={<About />} />
             <Route path="/Services" element={<Services/>} />
              <Route path="/contact" element={<Contact />} />
               </Routes>
    <Footer/>
  </div>
</Router>
    </div>
  )
}

export default HomePage;