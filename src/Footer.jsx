import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import React from 'react';
const Footer = () => {
    return(
        <div>
        <footer  className="footer">
        <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
       <a href=""> <FontAwesomeIcon icon={faTwitter} />  </a>
        <a href=""><FontAwesomeIcon icon={ faGithub} /> </a>
        <a href=""><FontAwesomeIcon icon={faLinkedin} /> </a>
        </footer> 
        </div>
    );
};

export default Footer;