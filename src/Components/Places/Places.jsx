import React,{useEffect} from 'react'
//css
import './Places.css'
//images
import mumbai from '../../Assets/mumbai.jpg'
import delhi from '../../Assets/delhi.jpg'
import chennai from '../../Assets/chennai.jpg'
import jaipur from '../../Assets/jaipur.jpg'
import bangalore from '../../Assets/bangalore.jpg'
import shimla from '../../Assets/shimla.jpg'

const Places = () => {

    useEffect(() => {
        const panels = document.querySelectorAll('.panel');
        panels.forEach(panel => {
            panel.addEventListener('click', function() {
                panels.forEach(panel => {
                panel.classList.remove('active')
            })
                panel.classList.add('active')
                
            })
            
        })
    }, []);

    return (
        <section className="place-section section__padding">
            <h2>Best places to visit in India</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim? Lorem ipsum dolor sit.</p>
            <div className="container">
                <div className="panel active" style={{backgroundImage: `url(${mumbai})`}}>
                    <h2>Mumbai</h2>
                </div>
                <div className="panel" style={{backgroundImage: `url(${delhi})`}}>
                    <h2>Delhi</h2>
                </div>
                <div className="panel" style={{backgroundImage: `url(${chennai})`}}>
                    <h2>Chennai</h2>
                </div>
                <div className="panel" style={{backgroundImage: `url(${jaipur})`}}>
                    <h2>Jaipur</h2>
                </div>
                <div className="panel" style={{backgroundImage: `url(${bangalore})`}}>
                    <h2>Bangalore</h2>
                </div>
                <div className="panel" style={{backgroundImage: `url(${shimla})`}}>
                    <h2>Shimla</h2>
                </div>
            </div>
            <div className="button">
                <button>Join now for free</button>
            </div>
        </section>
    )
}

export default Places
