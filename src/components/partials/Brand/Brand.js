import React from "react"
import SpotlightLarge from "@images/spotlight-large.png"
import "./Brand.scss"

export default function Brand() {
    return (
        <div className="Brand">
            <div className="brandHead">THIS PAGE IS COMING SOON</div>
            <img
                className="spotlightLarge"
                src={SpotlightLarge}
                width="auto"
                alt=""
            />
        </div>
    )
}
