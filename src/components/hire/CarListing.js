import React from "react";
import { useEffect, useState  } from "react";
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
                <div className="cars_display">
                    {cars.map((car) => ( <CarItem key={car.id} car={car} 
                /> ))} 
                </div>
            
        </main>
    )
}

export default CarListing;