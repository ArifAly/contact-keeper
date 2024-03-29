import React from 'react';  
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

 const Navbar = ({title, icon }) => {
    return (
        <div className='navbar bg-danger'>
            <h1>
                <i className={icon} /> {title}   
            </h1>
            <ul>
                 <li>
                 <Link to="/home">Home</Link>
                 </li>

                 <li>
                 <Link to="/about">About</Link>
                 </li>

            </ul>
        </div>
    )
}
Navbar.propTypes= {
    title:propTypes.string.isRequired,
    icon:propTypes.string,
}
Navbar.defaultProps = {
    title:'Contact Keeper',
    icon : 'fas fa-id-card-alt'
}

export default Navbar