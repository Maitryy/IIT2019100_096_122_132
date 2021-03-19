import React from 'react';
import '../bootstrap/bootstrap.css'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (  
       
        <footer className="footer bg-light text-center text-lg-start sticky-footer fixed-bottom">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Classroom </span>
        </div>
        <div className="col-md-4">
          
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <Link href="#something">Privacy Policy</Link>
            </li>
            <li className="list-inline-item">
              <Link href="#something">Terms of Use</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    )

}
 
export default Footer;