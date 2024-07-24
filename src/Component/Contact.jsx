import '../Css/Contact.css';
import tele from '../image/phone.svg';

const Contact = () => {
  return (
    <div className='container-fluid  contact-container'>
      <div className='contact'>
        <div className='contact-content'>
          <h1>Contact Us</h1>
          <p className='mt-5'>Get in touch with us</p>
          <p className='mt-4'>Phone number:</p>
          <p className='mt-4'>Email:</p>
        </div>
      </div>
      <div className='img-container'>
        <img className='tele' src={tele} alt='contact img' />
      </div>
    </div>
  );
};

export default Contact;
