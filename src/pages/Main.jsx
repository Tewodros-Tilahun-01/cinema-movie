import React from 'react'
import "./main.css"
import Schedule from './Schedule'
import Trend from './Trend'
import Hero from "./Hero";

function Main() {
    return (
        <main>
            <Hero />
            <Schedule />
            <Trend />
        </main>
    )
}

export default Main