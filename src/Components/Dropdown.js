import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

function Dropdown() {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className = 'dropdown'>
            <ul onClick={handleClick} className = {click? 'dropdown-inactive':'dropdown-active'}>
                <li className = 'dropdown-item'>
                    <Link to = '/' className = 'dropdown-link' onClick={() => setClick(false)}>
                        User Profile
                    </Link>
                </li>
                <li className = 'dropdown-item'>
                    <Link to = '/' className = 'dropdown-link' onClick={() => setClick(false)}>
                        Grades
                    </Link>
                </li>
                <li className = 'dropdown-item'>
                    <Link to = '/' className = 'dropdown-link' onClick={() => setClick(false)}>
                        Calender
                    </Link>
                </li>
                <li className = 'dropdown-item'>
                    <Link to = '/' className = 'dropdown-link' onClick={() => setClick(false)}>
                        Edit Profile
                    </Link>
                </li>
            </ul>          
            
        </div>
    )
}

export default Dropdown
