import "./Page.css"

function CarItem({ car }){
    const {id, price, make, model, fuel_type, transmission, mileage, engine_size, year, image } = car;
    return(
            <li className="card">
                <div className="card_components">
                    <img src={image} alt={model} />
                    <div className="details">
                        <p><strong>{make}, {model}</strong></p>
                        <p>
                            <strong>Price: </strong>US ${price}
                        </p>
                        <p>
                            <strong>Fuel-Type:</strong>{fuel_type}
                        </p>
                        <p>
                            <strong>Transmission:</strong>{transmission}
                        </p>
                        <p>
                            <strong>Mileage:</strong>{mileage}
                        </p>
                        <p>
                            <strong>Engine-Size:</strong> {engine_size}
                        </p>
                        <p>
                            <strong>Year:</strong>{year}
                        </p>
                        <button onClick={handleDeleteClick}> Remove</button>
                    </div>
                </div>
        </li>
    )

}

export default CarItem;
