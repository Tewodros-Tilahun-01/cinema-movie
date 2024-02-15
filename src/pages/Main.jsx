import React from 'react'
import "./main.css"
import Schedule from './Schedule'
import Trend from './Trend'
import Hero from "./Hero";
import Blog from './Blog';

function Main() {
    return (
        <main>
            <Hero />
            <Schedule />
            <Trend />
            <Blog />
        </main>
    )
}

export default Main