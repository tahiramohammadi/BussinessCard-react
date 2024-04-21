import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
export default function Journal(props) {
    
    return (
        <main className="Main--content">
        <div className="journal">
             <img src={props.img} className="journal--image" />
             </div>
             <div class="full-content">
             <div className="lo-map">
             <FontAwesomeIcon icon={faLocationDot} className="dot--location" />
             <span className="location">{props.location}</span>
            <a href="{props.googleMap}" className="google--map">View On GoogleMaps</a>
             </div>
             <div className="title--description">
              <h2 className="title-country">{props.title}</h2>
              <div className="startd--endd">
              <strong>{props.startDate}</strong>
                 <strong>-{props.endDate}</strong>
              </div>
            
             <p className="description--p">{props.description}</p> 
             </div>
             </div>
    </main>
    )
}