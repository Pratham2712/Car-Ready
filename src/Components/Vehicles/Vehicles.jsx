import React from 'react'
import cars from '../../Assets/car 2.jpg';
import van from '../../Assets/van.jpg';
//css
import './Vehicles.css'
const Vehicles = () => {
    return (
        <section className="vehicles-section section__padding">
            <h2>Wide range of vehicles that suits your journey and ease your trip</h2>
          
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat.
                Lorem ipsum dolor sit.
            </p>
            <div className="cars">
                <div>
                    <h2>Cars</h2>
                    <img src={cars} alt="" />
                </div>
                <div>
                    <h2>Cars</h2>
                    <img src={cars} alt="" />
                </div>
                <div>
                    <h2>Cars</h2>
                    <img src={cars} alt="" />
                </div>
            </div>
            <div className="button">
                <button>Search cars</button>
            </div>
        </section>
    )
}

export default Vehicles
