import React from "react"
import "./UserTeam.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function UserTeam(props) {
  return (
    <div className="UserTeam h-full">
      <div class="octagonWrap">
        <img src="/octagon-outline-shape.svg" className="octImg" alt="" />
        <img className="avatar" src={`/team/${props.team.first}.png`} alt="avatar" />
      </div>
      <div className="md:h-96 lg:h-64 xl:h-48">
        <div className="linkedinIcon"			>
          <a href={props.team.link} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="userName">
          <div>{props.team.first}</div>
          <div>{props.team.last}</div>
        </div>
        <span className="userDetail">
          {props.team.bio}
        </span>
      </div>
      <div className="abstrac mt-5">
        <div className="abstractHeading">
          <span className="line"></span>
          <span className="text">ABSTRACT</span>
          <span className="line"></span>
        </div>
        <span className="abstractText">
          {props.team.biofact}
        </span>
      </div>
    </div>
  )
}
