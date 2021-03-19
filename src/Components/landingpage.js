import React from 'react';
import './landingpage.css'
import image1 from '../images/Se-landingPage-01.png'
import image2 from '../images/Se-landingPage-02.png'
import image3 from '../images/Se-landingPage-03.png'

const LandingPage = () => {
    return ( <div >
        
        <div className="content">
        <img src={image1} alt="Logo" />
        <img src={image3} alt="Logo" />
        <img src={image2} alt="Logo" />
        
        </div>
    </div>

     );
}
 
export default LandingPage;