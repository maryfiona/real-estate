import land from '../image/Ellipse 1.svg';
import '../Css/LandingPage.css'; 
const LandingPage = () => {
  return (
    <div className="container mt-5">
      <div className="row align-item-center">
        <div className="col-lg-6 text-center text-lg-start">
          <h1>
            <span>Brand-Focused Value</span> <span className="red-text">Proposition</span>
          </h1>
          <h5 className='mt-4'>Subheading going a bit more in-depth <br /> on the headline and taking advantage <br /> space,
             whereas the headline usually  <br /> needs to be a bit more concise.</h5>
             <button className='mt-4 botton fw-bold'>Check out our services</button>
        </div>
        <div className="col-lg-6 text-center mt-4 mt-lg-0">
          <img className="img-fluid" src={land} alt="Landing Page Graphic" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
