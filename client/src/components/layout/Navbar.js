import React from 'react';  
import propTypes from 'prop-types';

 const Navbar = ({title, icon }) => {
    return (
        <div className='navbar bg-danger'>
            <h1>
                <i className={icon} /> {title}
            </h1>
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