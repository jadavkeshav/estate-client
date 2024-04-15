import React from 'react'
import './PropertyCard.css'
import { truncate } from 'lodash'
import { useNavigate } from 'react-router-dom'
const PropertyCard = ({ card }) => {
    const navigate = useNavigate();
    return (
        <div className="flexColStart r-card" onClick={()=>navigate(`../properties/${card.id}`)}>
            <span></span>
            <img src={card.image[0]} alt="home" />
            <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span>
                <span>{card.price}</span>
            </span>
            <span className="primaryText">{truncate(card.title, { length: 15 })}</span>
            <span className="secondaryText">{truncate(card.description, { length: 80 })}</span>
            {/* <span className="primaryText">{card.title}</span>
            <span className="secondaryText">{card.description}</span> */}
        </div>
    )
}

export default PropertyCard