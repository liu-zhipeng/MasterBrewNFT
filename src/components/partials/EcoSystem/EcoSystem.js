import React from "react"
import { Link } from "gatsby"
import "./EcoSystem.scss"
import Button from "@elements/Button/Button"

export default function EcoSystem() {
  return (
    <div className="EcoSystem mt-16">
      <div className="uppercase text-center text-5xl font-semibold outlineText ">
        Ecosystem
      </div>
      <div className="ecosystem-warp">
        <div className="ecosystem-card">
          <div className="image-wrper">
            <img src="/ecosystem_roadmap.png" width="auto" alt="" />
          </div>
          <h3>Project Road Map</h3>
          <p>
            In a world where changes take place in the blink of an eye, 
            having a defined and well-laid plan is imperative.{" "}
          </p>
          <Link to={"/roadmap"}>
            <Button>Learn More</Button>
          </Link>
        </div>
        <div className="ecosystem-card">
          <div className="image-wrper">
            <img src="/ecosystem_platform.png" width="auto" alt="" />
          </div>
          <h3>The Platform</h3>
          <p>
            Affectionately nicknamed "The BREWHOUSE", find out what the heart 
            and soul of MasterBrews' is really about.{" "}
          </p>
          <Link to={"/brewhouse"}>
            <Button>Learn More</Button>
          </Link>
        </div>
        <div className="ecosystem-card">
          <div className="image-wrper">
            <img src="/ecosystem_tokenomics.png" width="auto" alt="" />
          </div>
          <h3>$BREW Tokenomics</h3>
          <p>
            You can't run a well-oiled machine without the oil. Our utility 
            token focuses on convenience and long-term value.{" "}
          </p>
          <Link to={"/tokenomics"}>
            <Button>Learn More</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
