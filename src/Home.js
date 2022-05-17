import React from "react"
import itemData from "./ItemData.js"
import Card from "./components/Card.js"

function Home () {
    const item = itemData.map(card => <Card title={card.title} description={card.description} price={card.price} />)

    return (
        <div>
            <div className="home">
            <h2 id="sub">We are good at what we do.</h2>
            {item}
            </div>
        </div>
    )
}

export default Home