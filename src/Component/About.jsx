import '../Css/About.css'
import about from '../image/about.svg'

const About= () => {
  return (
    <div className='container-fluid  about-container'>
       <div className='img-container'>
        <img className='about-img' src={about} alt='about img' />
      </div>
      <div className='about'>
        <div className='about-content'>
        <h1>About Us</h1>
            <p className="p-tag">
              Our expertise in delivering bespoke <br /> solutions. 
              We have enabled competence.
            </p>
            <p className="p-tag">
              Our team possesses a sound understanding of <br />
              the market, ensuring we are always ahead <br />
              of the crowd when formulating strategies <br />
              and executing transactions.
            </p>
            <p className="p-tag">
              We do this by offering innovative strategies <br />
              designed to help our clients enjoy <br />
              and maintain their lifestyle.
            </p>
        </div>
      </div>
     
    </div>
  );
};

export default About;

