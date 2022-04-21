import React from 'react'
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon';
import './header.style.scss'; 

const Header = () => {
    return(
        <nav className='nav-menu container'>
            <div className='logo'>
                <Link to= '/'>GrilledRestro</Link>
            </div>
            <ul>
                <li>
                    <Link to= '/'>
                        Home
                    </Link>   
                </li>
                <li>
                    <Link to= '/cafe'>
                        cafe 
                    </Link>   
                </li>
            </ul>
        <CartIcon/>    
        </nav>
    );
}

export default Header;