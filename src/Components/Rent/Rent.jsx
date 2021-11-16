import React from 'react'
//image
import rent from '../../Assets/rent.png'
//css
import './Rent.css'

const Rent = () => {
    return (
        <section className="rent-section section__padding">
            <div className="container">
                <div className="content">
                    <h2>Rent your car and offset its costs</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur excepturi pariatur doloremque veritatis eaque optio accusamus saepe sit aliquid sapiente voluptatibus, laudantium iusto facilis repellat voluptate velit quam perspiciatis distinctio quaerat quod, dicta atque corrupti.</p>
            <div className="button">
                <button>Rent your car</button>
            </div>
                </div>
                <div className="image">
                    <img src={rent} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Rent
