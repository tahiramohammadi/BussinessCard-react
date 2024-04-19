import { useState } from 'react'
import React from 'react'
import profile from "./assets/images.jpg"
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Footer from './Footer';

export default function App() {
  const [count, setCount] = useState(0)
 return(
   <div className="background">
     <img src={profile} alt='img' className="profile"/>
     <h2 className="full-name">Tahira Mohammadi</h2>
     <div className="role_web">
     <strong className="role">Full stack Developer</strong>
     <span className="Website-class"><a href="">Tahira's website</a></span>
     </div>
     <div className="btn">
      <a href="" className="my-email">
      <FontAwesomeIcon icon={faEnvelope}  className="fa-envelope"/>Email</a>
      <a href="" className="my-linkdin">
       <FontAwesomeIcon icon={faLinkedin} /> Linkedin</a>
     </div>
     <div className="about-me">
     <strong>
       About
     </strong>
     <p>I am full stack developer with particular of interest in making things sample and automatic daily tasks
       I try to keep up with security, I am always looking for new rule to learning more.
        </p>
     </div>

     <div className="about-me">
     <strong>
    Interest
     </strong>
     <p>programming languages, robotics, Artificial intelligence, Eating Food, listening to music, Dancing
        </p>
     </div>

     <Footer/>
   </div>
 )
}


