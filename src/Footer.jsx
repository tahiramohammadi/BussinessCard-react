import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import React from 'react';

export default function Footer(){
return(
     <div>
       <footer className="footer"> 
       <a><FontAwesomeIcon icon={ faFacebook} /></a>
       <a><FontAwesomeIcon icon={faTwitter} /></a>
       <a><FontAwesomeIcon icon={faGithub} /></a>
      <a><FontAwesomeIcon icon={faLinkedin} /></a>
       </footer>
     </div>
)
}