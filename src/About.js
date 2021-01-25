import React from 'react'
import './About.css'
import logo from './data/raztevcav2.png';

export default function About() {
    return (
        <div>
            <div className="img-wrap">
            <img src="https://www.gannett-cdn.com/-mm-/38cc6cf02ad48c62cc1011b78dc3196234485234/c=0-270-5600-3434/local/-/media/2015/03/31/PalmSprings/PalmSprings/635634023715863505-Palms-Indian-Canyons.jpg?width=3200&height=1680&fit=crop" />
            
            <h1>Revolutionary Ideas</h1>
            <h3>We pride on ourselves on innovative ideas and designs! </h3>
            </div>
            <div className="about-box">
                <img src={logo}/>
                <h4>Razteca Goods is a small business based out of Palm Springs, CA. Our sole purpose here is to manufacture and distribute high quality products to our supporters. We specialize in tech-related goods but also like to create items designed for children.</h4>
            </div>
            </div>
    )
}
