import React from "react";
import { useEffect, useState  } from "react";
import Footer from "../footer/Footer";
import CarItem from "./CarItem";
import './Hire.css';


function CarListing(){
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://carreview-production.up.railway.app/cars')
            .then(response => response.json())
            .then(response => setCars(response));
},[]);

console.log(cars)


    return(
        <main>
            <h1 className="hire-cars-header">Our Cars</h1>
            <div className="cars_display">
                {cars.map((car) => ( <CarItem key={car.id} car={car} 
            /> ))} 
            </div>
            <Footer />
        </main>
    )
}

export default CarListing;