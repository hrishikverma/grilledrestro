import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import shoppingBag from 'src/assets/chefimage.jpg';
import { CartContext } from '../contexts/cart-context';
import './cart-icon.styles.scss';

const CartIcon = ({ history }) => {
  const { itemCount, cartItems } = useContext(CartContext);
  console.log('CartItems:', cartItems);
  return (
    <div className='cart-container' onClick={() => history.push('/cart')}>
      <img src={shoppingBag} alt='shopping-cart-icon' />
      {
        itemCount > 0 ? <span className='cart-count'> { itemCount } </span> : null
      }
      
    </div>
  );
}

export default withRouter(CartIcon);
