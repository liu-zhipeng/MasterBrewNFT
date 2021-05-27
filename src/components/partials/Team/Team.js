import React from "react"
import teamData from "@util/teamData"
import UserTeam from "@elements/UserTeam/UserTeam"
import "./Team.scss"

export default function Team() {
  return (
    <div className="Team mt-16">
      <div className="mb-10">
        <div className="mb-10 teamHeadContainer">
          <div className="teamHead">The Team</div>
          <div className="teamSubHead">Co-Founders</div>
        </div>
        <div className="users">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            {teamData.team.map((dt, idx) => (
              <div key={idx} className="userCard">
                <UserTeam team={dt} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-20">
        <div className="mb-10 teamHeadContainer">
          <div className="teamHead">The Team</div>
          <div className="teamSubHead">Advisory Council</div>
        </div>
        <div className="users">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            {teamData.board.map((dt, idx) => (
              <div className="userCard">
                <UserTeam team={dt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
