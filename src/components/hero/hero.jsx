import React from 'react';
import './hero.styled.scss';

const Hero = () => {
    return (
      <section className="hero is-info is-large hero-image">
        <div className="hero-body">
          <div className="container">
            <h1 className="hero-title">
              Drooling Over Indian Food?
            </h1>
            <div className='order-now-btn'>
              <button className='button is-black' id='order-now'>
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;