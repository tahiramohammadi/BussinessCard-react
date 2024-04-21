import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

export default function Header() {
    return (
        <div className="Header">
            <FontAwesomeIcon icon={faGlobe} className="globe-icon"/>
            <h1>my travel journal</h1>
        </div>
    )
}