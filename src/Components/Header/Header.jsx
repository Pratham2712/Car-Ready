import React from 'react'
import car from '../../Assets/car.jpg';
import './Header.css'
const Header = () => {
    return (
        <section className="header-section section__padding">
            <div className="head-content ">
                <h1 className="gradient__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum.</h1>
                <div className="head-content_input">
                    <input type="text" placeholder="Search for cars near you" />
                    <button>Search</button>
                </div>
                <div className="features">
                    <h3> <div className="circle"/> Convenient</h3>
                    <h3> <div className="circle"/> Reliable</h3>
                    <h3> <div className="circle"/> Fast Service</h3>
                </div>
                <div className="share-button">
                    <button>Share your car</button>
                </div>
            </div>
            <div className="head-image">
                <img src={car} alt="" />
            </div>
        </section>
    )
}

export default Header
