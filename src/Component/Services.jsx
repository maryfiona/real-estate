import '../Css/Services.css'
import invest from '../image/invest.svg'
import money from '../image/money.svg'
import train from '../image/Train.svg'
import real from '../image/home.svg'

const Services = () => {
  return (
    <div className='container'>
        <div className="row">
            <h1 className='service-head'>Our Services</h1>
            <div className='service-body'>
            <div className="col-md-3 box-shadow">
                <img className='mt-4' src={invest} alt="investment" />
                <p className='mt-4 fw-bold'>Investment</p>
            </div>
            <div className="col-md-3 box-shadow">
                <img className='mt-4' src={money} alt="money" />
                <p className='mt-4 fw-bold'>Finance</p>
            </div>
            <div className="col-md-3 box-shadow">
                <img className='mt-4' src={train} alt="training" />
                <p className='mt-4 fw-bold'>Training</p>
            </div>
            <div className="col-md-3 box-shadow">
                <img className='mt-4' src={real} alt="real estate" />
                <p className='mt-4 fw-bold'>Real Estate</p>
            </div>
            </div>
            </div> 

    </div>
  )
}

export default Services