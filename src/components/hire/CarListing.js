import React from "react";
import { useEffect, useState  } from "react";
import Footer from "../footer/Footer";
import CarItem from "./CarItem";
import './Cars.css';
import PacmanLoader from "react-spinners/PacmanLoader";


function CarListing(){

    const [loading, setLoading] = useState(false);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://carreview-production.up.railway.app/cars')
            .then(response => response.json())
            .then(response => {
                setLoading(true)

                setTimeout(() =>{
                    setLoading(false)
                }, 2000)
                setCars(response)
                
            });
},[]);

console.log(cars)


    return(
        <main>
            <h1 className="hire-cars-header">Our Cars</h1>

             {
                loading ? 
              <PacmanLoader
                    color={"orange"}
                    loading={loading}
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    display="flex"
                    justify-content="center"
                    align-items="center"
                    margin-left="200px"
            />
                :

            <div>
                <div className="cars_display">
                    {cars.map((car) => ( <CarItem key={car.id} car={car} 
                /> ))} 
                </div>
                <Footer />
            </div>
             }
        </main>
    )
}

export default CarListing;