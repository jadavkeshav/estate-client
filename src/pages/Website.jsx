import React from 'react'
import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
const Website = () => {
    return (
        <div className="App">
            <div>
                <div className="white-gradient" />
                <Hero/>
            </div>
            <Residencies />
            <Value />
            <Contact />

        </div>
    )
}

export default Website
