import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function CourseOffered() {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className = 'dropdown'>
            <ul onClick={handleClick} className = {click? 'dropdown-inactive':'dropdown-active'}>
                <li className = 'dropdown-item'>
                    <Link to = '/' className = 'dropdown-link' onClick={() => setClick(false)}>
                        Core 
                    </Link>
                </li>
                <li className = 'dropdown-item'>
                    <Link to = '/' className = 'dropdown-link' onClick={() => setClick(false)}>
                        Non-Technical Elective
                    </Link>
                </li>
                <li className = 'dropdown-item'>
                    <Link to = '/' className = 'dropdown-link' onClick={() => setClick(false)}>
                        Technical Elective
                    </Link>
                </li>
            </ul>          
            
        </div>
    )
}

export default CourseOffered
