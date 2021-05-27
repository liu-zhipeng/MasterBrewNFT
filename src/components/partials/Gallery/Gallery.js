import React from "react"
import SpotlightLarge from "@images/spotlight-large.png"
import "./Gallery.scss"

export default function Gallery() {
    return (
        <div className="Gallery mt-16">
            <div className="galleryHead">THIS PAGE IS COMING SOON</div>
            <img
                className="spotlightLarge"
                src={SpotlightLarge}
                width="auto"
                alt=""
            />
        </div>
    )
}
