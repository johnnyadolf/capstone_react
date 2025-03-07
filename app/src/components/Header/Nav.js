import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaGripLines, FaRegTimesCircle } from 'react-icons/fa';

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <div className='mobile_menu' onClick={toggleMenu}>
            {isOpen ? <FaRegTimesCircle /> : <FaGripLines />}
        </div>
            <nav className={'nav ' + (isOpen ? 'open' : '')} onClick={toggleMenu}>
                <Link to="/" className="nav_link">Home</Link>
                <Link to="/" className="nav_link">About</Link>
                <Link to="/" className="nav_link">Menu</Link>
                <Link to="/reservations" className="nav_link">Reservations</Link>
                <Link to="/" className="nav_link">Order Online</Link>
                <Link to="/" className="nav_link">Login</Link>
            </nav>
        </>
    );
};

export default Nav;