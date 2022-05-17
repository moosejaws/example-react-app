import React from "react"

function Card (props) {
    const {title, description, price} = props
    return (
        <div id="card">
            <p>{title}</p>
            <p>{description}</p>
            <p>Price: {price}</p>
            
        </div>
    )
}

export default Card