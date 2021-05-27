import Button from "@elements/Button/Button"
import { classNames, getCountryImgUrl } from "@util"
import { Link } from "gatsby"
import React from "react"

export default function ArtistCard(props) {
  return (
    <div
      className={classNames(
        "flex flex-col rounded-md overflow-hidden relative",
        props.title ? "border-primary border-2" : "",
        props.className
      )}
    >
      <div className="uppercase font-semibold text-sm py-1 px-4 absolute top-5 left-0 text-black bg-primary">
        {props.label}
      </div>
      <img
        onClick={() => props.onClickImg && props.onClickImg()}
        src={props.portFolioImg}
        alt=""
        className="artistCardImg"
      />
      {props.title && (
        <div className="p-5 md:p-3 bg-black">
          <div className="flex justify-between mb-3">
            <div className="text-primary font-semibold text-lg">
              {props.title}
            </div>
            <img
              src={getCountryImgUrl(props.countryCode)}
              className="countryImg"
            />
          </div>
          <Link to={props.username}>
            <Button>View Profile</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
