import React from 'react'
//icons
import cover from '../../Assets/cover.png'
import free from '../../Assets/free.png'
import support from '../../Assets/support.png'
//css
import './Advantage.css'

const Advantage = () => {
    return (

        <section className="ad-section section__padding">
            <div className="content">
                <div className="parts">
                    <img src={free} alt="" />
                    <h2>Free cancellation</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolor aliquam ullam pariatur, explicabo impedit fugiat illo accusantium cul</p>
                </div>
                <div className="parts">
                    <img src={cover} alt="" />
                    <h2>Damage cover included</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolor aliquam ullam pariatur, explicabo impedit fugiat illo accusantium cul</p>
                </div>
                <div className="parts">
                    <img src={support} alt="" />
                    <h2>24/7 support</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolor aliquam ullam pariatur, explicabo impedit fugiat illo accusantium cul</p>
                </div>
            </div>
                <div className="button">
                    <button>Book a ride</button>
                    <span>Learn more</span>
                </div>
            </section>
           
    )
}

export default Advantage
