import React from 'react'
import MarqueeLib from "react-fast-marquee";
const Marquee = MarqueeLib.default

const Mbody = () => {
    return (
        <div>
            <Marquee className="text-4xl font-bold text-black mt-10 bg-orange-500 p-4" pauseOnHover speed={300}>
                <p>Official Nepal Cricket Player Jersey 🇳🇵</p>
                <p>Official Nepal Cricket Player Jersey 🇳🇵</p>
            </Marquee>
        </div>
    )
}

export default Mbody