import './AllPayment.css';
import { Link } from 'react-router-dom';
import carsData from '../../data/CarsData';
import { useParams } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

const AllPayment = () => {
    const { slug } = useParams();
    const singleCarItem = carsData.find((item) => item.make === slug);

    return(
        <>
            <Navbar />
            <div className='mn-container'>
                <div className='btn-container'>
                <Link to={`/cars/${singleCarItem.make}/payment/mpesa`}>
                    <a className='btn-links' href={`/cars/${singleCarItem.make}/payment/mpesa`}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Pay Via M-Pesa
                    </a>
                </Link>
                   
                    <Link to={`/cars/${singleCarItem.make}/payment/card`}>
                        <a className= 'btn-links' href={`/cars/${singleCarItem.make}/payment/card`}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Pay Via Card
                        </a>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AllPayment;