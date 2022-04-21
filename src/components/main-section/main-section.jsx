import React from 'react';
import { withRouter } from 'react-router-dom';
import chefimage from '../../assets/chefimage.jpg';
import './main-section.styled.scss';

const MainSection = ({ history }) => {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img src={chefimage} alt='chef'/>
        </div>
        <div className='ms-m-description'>
          <h2>Masterclass in Food.</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum facere tenetur consectetur beatae hic sunt quis accusantium modi, praesentium officiis non! Quas nihil perspiciatis obcaecati harum similique, culpa voluptatibus ex!
          </p>
          <button className='button is-black' id='order-now' onClick={()=> history.push('/product/1')}>
            EXPLORE  
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter (MainSection);
