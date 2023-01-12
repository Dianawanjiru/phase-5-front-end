import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './Payment.css';
import carsData from '../data/CarsData';
import { useParams } from 'react-router-dom';
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useState } from 'react';

const Payment = () =>{

    const { slug } = useParams();
    const singleCarItem = carsData.find((item) => item.make === slug);

    const [data, setData] = useState({
        name: "",
        number: "",
        cvc: "",
        type: "",
        expiry: "",
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    return(
        <>
            <Navbar />
            <div class="mainscreen">
                <div class="payment-card">
                    <div class="leftside">
                        <div className='product'>
                            <Cards 
                                cvc={data.cvc}
                                expiry={data.expiry}
                                name={data.name}
                                number={data.number}
                                type={data.type}
                            />
                        </div>
                    </div>
                    <div class="rightside">
                        <form action="">
                            <h1>CheckOut</h1>
                            <h3>Total Price: <span>${singleCarItem.price}</span></h3>
                            <h2>Payment Information</h2>
                            <p>Cardholder Name</p>
                            <input 
                                type="text"
                                name="name" 
                                class="inputbox" 
                                onChange={handleChange}
                            />
                                <p>Card Number</p>
                            <input 
                                type="number"  
                                name="number"
                                class="inputbox" 
                                id="card_number" 
                                required
                                onChange={handleChange}  
                            />

                            
                            <div class="expcvv">
                                <p class="expcvv_text">Expiry</p>
                                <input 
                                    type="date"
                                    name="expiry" 
                                    class="inputbox" 
                                    id="exp_date" 
                                    required
                                    onChange={handleChange}
                                />
                                    <p class="expcvv_text2">CVC</p>
                                <input 
                                    type="password" 
                                    class="inputbox" 
                                    name="cvc" 
                                    id="cvv" 
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" class="checkout-button">CheckOut</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Payment;