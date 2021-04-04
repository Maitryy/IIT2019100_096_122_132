import React from 'react';
import '../bootstrap/bootstrap.css'
import './footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (  
       
    <footer className="footer bg-light text-center text-lg-start   foot-color">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Grp-60 </span>
        </div>
        <div className="col-md-4">
          
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks foot-links">
            <li className="list-inline-item">
              <Link className="foot-text" href="#something">Privacy Policy</Link>
            </li>
            <li className="list-inline-item">
              <Link className="foot-text" href="#something">Terms of Use</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    )

}
 
export default Footer;