import React,{useState} from 'react';
import './Stats.css';
//for animation of number counter
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
//animation
import Slide from 'react-reveal/Slide';


const Stats = () => {
    const [animate, setAnimate] = useState(false);
    return (
        <section className="stats-section section__padding">
            <div>
                <CountUp start={animate ? 100.000 : null} end={200.000} duration={0.8} separator=" " decimals={3}
                decimal="," redraw={true}>
            {({ countUpRef }) => (
                        <div>
                <span ref={countUpRef} className="number" />
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setAnimate(true);
                    } 
                  }}
                >
                  <span className="subtext" > members</span>
                </VisibilitySensor>
              </div>
            )}
                </CountUp>
                <Slide left>
                <div className="bar"></div>
                </Slide>
            </div>
            <div>
                <CountUp start={animate ? 0 : null} end={30} duration={0.8} redraw={true}>
            {({ countUpRef }) => (
                <div>
                <span ref={countUpRef} className="number" />
                <span className="number"> million</span>
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setAnimate(true);
                    } 
                  }}
                >
                  <span className="subtext" > paid to owners</span>
                            </VisibilitySensor>
              </div>
            )}
          </CountUp>
            <Slide left>
                <div className="bar"></div>
                </Slide>
            
            </div>
            <div>
                <CountUp start={animate ? 300.000 : null} end={420.000} duration={0.8} separator=" " decimals={3}
                decimal=","    redraw={true}>
            {({ countUpRef }) => (
                <div>
                
                <span ref={countUpRef} className="number" />
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setAnimate(true);
                    } 
                  }}
                >
                  <span className="subtext" > trips taken</span>
                </VisibilitySensor>
              </div>
            )}
          </CountUp>
            <Slide left>
                <div className="bar"></div>
                </Slide>
            </div>
        </section>
    )
}

export default Stats
