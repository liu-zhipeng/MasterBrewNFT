import OctagonIcon from "@assets/octagon-outline-shape.svg"
import Button from "@elements/Button/Button"
import { classNames } from "@util"
import roadmapData from "@util/roadmapData"
import React from "react"
import "./RoadMap.scss"

function TimlineItem(props) {
  return (
    <div
      className={classNames(
        "flex flex-col px-5 sm:px-0",
        props.position === "right" ? "sm:flex-row" : "sm:flex-row-reverse"
      )}
    >
      <div className="flex-grow w-full pr-3 mt-0 hidden sm:block">
        {props.infoText && (
          <div className="text-right text-primary-dark font-semibold uppercase italic">
            Currently On tap
          </div>
        )}
      </div>
      <div className="px-8 text-center flex flex-col items-center">
        <OctagonIcon
          className="timelineOctagonIcon relative z-10 hidden sm:block"
          width={27}
        />
        <div
          style={{ width: 1 }}
          className={classNames(
            "flex-grow bg-white mb-2 sm:mb-0 mt-2 sm:-mt-2 h-10 sm:h-auto",
            props.index === 0 ? "hidden sm:block" : ""
          )}
        />
      </div>
      <div
        className={classNames(
          "flex-grow w-full sm:-mt-11",
          props.position === "right" ? "sm:pl-3" : "sm:pr-3"
        )}
      >
        <div className="text-center text-white  tracking-wider flex items-center justify-center h-10 uppercase">
          {props.date}
        </div>
        <Button
          variant={
            props.events?.findIndex(e => e.complete) > -1 ? "filled" : "outline"
          }
          className="mb-4"
        >
          {props.phase}
        </Button>
        <div className="pl-4">
          {props.events.map(event => (
            <div className="flex mb-4" key={event.title}>
              <div className="flex flex-col">
                <div className="flex items-center mb-1">
                  <img
                    src={event.complete ? "/icon1.png" : "/icon2.png"}
                    className="w-6 h-6"
                    alt=""
                  />
                  <span className="font-bold text-lg ml-2 text-white">
                    {event.title}
                  </span>
                </div>
                <div className="font-semibold ml-8 text-white">
                  {event.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function RoadMap() {
  return (
    <div className="Roadmap mt-16">
      <div className="mb-10" style={{ overflow: "hidden" }}>
        <div className="mb-10 teamHeadContainer">
          <div className="text-white font-semibold tracking-widest text-center text-xl">
            MasterBrews{" "}
          </div>
          <div className="font-semibold tracking-widest text-primary text-2xl text-center">
            Project Roadmap
          </div>
        </div>

        <div className="mx-auto timeLineContainer">
          <div
            style={{ width: 1, height: 100 }}
            className="mx-auto timelineStartLine"
          />
          {roadmapData.roadmap.map((dt, idx) => (
            <TimlineItem
              position={idx % 2 == 0 ? "right" : "left"}
              key={idx}
              length={roadmapData.roadmap.length}
              index={idx}
              {...dt}
            />
          ))}
          <div
            style={{ width: 1, height: 100 }}
            className="mx-auto tiemlineLastLine"
          />
        </div>
      </div>
    </div>
  )
}
