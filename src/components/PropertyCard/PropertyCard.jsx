import React from 'react'
import './PropertyCard.css'
import { truncate } from 'lodash'
import { useNavigate } from 'react-router-dom'
const PropertyCard = ({ card }) => {
    const navigate = useNavigate();
    return (
        <div className="flexColStart r-card " onClick={()=>navigate(`../properties/${card.id}`)}>
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

// import React from 'react'
// import './PropertyCard.css'
// import { truncate } from 'lodash'
// import { useNavigate } from 'react-router-dom'
// import { IoLocationSharp, IoBedOutline } from "react-icons/io5";
// import { TbBath } from "react-icons/tb";
// const PropertyCard = ({ card }) => {
//     const navigate = useNavigate();
//     return (
//         <div className="r-card">
//             <span></span>
//             <img src={card.image[0]} alt="home" className='r-img' />
//             <div className="content">
//                 <div className="title">
//                     <span className="titleText">{truncate(card.title, { length: 15 })}</span>
//                 </div>
//                 <div className="location">
//                     <IoLocationSharp color='green' size={20} />
//                     <span className="locationText">{card.address + " " + card.city + " " + card.country}
//                     </span>
//                 </div>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//                 <div className="facilities">
//                     <div className="fac1">
//                         <IoBedOutline color='' size={20} />
//                         <span className="bedroom">{card.facilities.bedrooms + " "+ "bedrooms"}
//                     </span>
//                         <TbBath color='' size={20} />
//                         <span className="bedroom">{card.facilities.bathrooms + " "+ "bedrooms"}</span>
//                     </div>
//                     <div className="fac2">
//                     <IoBedOutline color='' size={20} />
//                         <span className="bedroom">{card.facilities.bedrooms + " "+ "bedrooms"}
//                     </span>
//                         <TbBath color='' size={20} />
//                         <span className="bedroom">{card.facilities.bathrooms + " "+ "bedrooms"}</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PropertyCard



