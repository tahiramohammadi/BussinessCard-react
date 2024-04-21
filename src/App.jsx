import { useState } from 'react'
import React from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Header from "./Header"
import data from "./data"
import Journal from "./Journal"

export default function App() {

  const journals = data.map(item => {
    return (
      <Journal
             key={item.id}
          img={item.imageUrl}
           location={item.location}
          googleMap={item.googleMapsUrl}
         title={item.title}
         startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
          
      />
  )
})
 return(
   <div>
      <Header /> 
          {journals}
       </div>
 )
}


