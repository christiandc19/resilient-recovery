import React from 'react'
import '../../components/services/ServicesProps.css'

function ServicesProps(props) {
  return (
        <div className="servicesCards">
            <div>
            <img className='image' src= {props.Image} alt="logo" />
            </div>
            
            <div>
            <p className="card-name">{props.CardName}</p>
            <p className='card-description'>{props.Description}</p>
            </div>
            
        </div>
  )
}

export default ServicesProps;