import { useParams } from 'react-router-dom';
import React from 'react';
import './Details.css';
import carsData from '../data/CarsData';
import Payment from './Payment';
import Hire from './Hire';
import Footer from '../footer/Footer';


const Details = () => {
    const { slug } = useParams();
    const singleCarItem = carsData.find((item) => item.make === slug);

    return(
        <>            
            <h2 class="title">
                Hire this <span>{singleCarItem.make}{' '}{singleCarItem.model}</span>
            </h2>
            <div class="app">
                <div class="image-car">
                    <img src ={singleCarItem.image} alt="This is a screenshot" />
                </div>
                <div class="description">
                    <h3>Overview</h3>
                    <p className='desc'>The <span>{singleCarItem.make}{' '}{singleCarItem.model}</span> has a mileage of <span>{singleCarItem.mileage}</span> kpml. 
                        The <span>{singleCarItem.fuel_type}</span> car is of <span>{singleCarItem.transmission}</span><br/>transmission. 
                        and has an engine size of <span>{singleCarItem.engine_size}</span>. Enjoy this <span>{singleCarItem.year}</span><br /> manufactured car,
                        only at $<span>{singleCarItem.price}</span> per day!
                    </p>
                    <span className="hint-star star">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </span>
                    <div className="info">
                        <ul>
                            <li><strong>Make: </strong>{singleCarItem.make}</li>
                            <li><strong>Model: </strong>{singleCarItem.model}</li>
                            <li><strong>Price: {''} </strong>${singleCarItem.price}</li>
                        </ul>
                        <ul>
                            <li><strong>Mileage: </strong> {singleCarItem.mileage}</li>
                            <li><strong>Year of Manufacture: </strong>{singleCarItem.year}</li>
                        </ul>
                        <p>Total: ${singleCarItem.price}</p>
                    </div>
                </div>
		    </div>
            <Hire />
            <Payment />
            <Footer />
        </>
    )

}

export default Details;