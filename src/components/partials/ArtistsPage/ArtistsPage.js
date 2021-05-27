import ArtistCard from "@elements/ArtistCard/ArtistCard"
import Button from "@elements/Button/Button"
import Filter from "@elements/Filter/Filter"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"
import {
  // getAllPortfoliosOfArtist,
  getArtistImrUrl,
  getArtistSpotlightImageUrl,
  getCountryImgUrl,
  onlyUnique,
  ucFirst,
} from "@util"
import artData from "@util/artData"
import { Link } from "gatsby"
import React, { useMemo, useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "./ArtistsPage.scss"

// const { getName } = require("country-list")

const responsive = {
  mobile: {
    breakpoint: { max: 10000, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const randomSelected = artData.artists.sort(() => 0.5 - Math.random())
let selected = randomSelected.slice(0, 5)

const artistsSpotlight = selected.map((dt, idx) => ({
  ...dt,
  title: "Artists Spotlight",
  teamName: dt.name,
  teamDesc: dt.bio,
  countryImg: getCountryImgUrl(dt.countryCode),
  img: getArtistSpotlightImageUrl(dt),
  id: idx,
}))

const countries = artData.artists
  .sort((a, b) => a.countryCode.localeCompare(b.countryCode))
  .map(dt => dt.countryCode)
  .filter(onlyUnique)
  .map(countryCode => ({
    label: ucFirst(countryCode),
    value: countryCode,
    icon: (
      <img
        src={getCountryImgUrl(countryCode)}
        className="h-full w-full object-cover countryImg-sm mr-3"
      />
    ),
  }))

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  let {
    carouselState: { currentSlide, totalItems },
  } = rest
  totalItems = Math.ceil(totalItems / 2)

  return (
    <div className="absolute left-0 bottom-8 z-30 w-full">
      <div className="text-primary flex justify-center items-center">
        <ChevronLeftIcon
          className={`mr-3 cursor-pointer`}
          onClick={() => previous()}
          width={22}
        />
        {[...Array(totalItems).keys()].map(dt => {
          if (currentSlide === 1) {
            currentSlide = totalItems
          }

          return (
            <div
              key={dt}
              onClick={() => goToSlide(dt + 2)}
              className={`rounded-full cursor-pointer mx-2 ${
                currentSlide - 1 === dt + 1
                  ? "bg-primary"
                  : "bg-secondary border-primary border"
              }`}
              style={{ height: 10, width: 10 }}
            />
          )
        })}
        <ChevronRightIcon
          className={`ml-3 cursor-pointer`}
          onClick={() => next()}
          width={22}
        />
      </div>
    </div>
  )
}

export default function ArtistsPage() {
  const [selectedArtists, setSelectedArtists] = useState([])
  const [selectedCountries, setSelectedCountries] = useState([])
  const portfolios = useMemo(
    () =>
      artData.artists.sort((a, b) => a.name.localeCompare(b.name))
        .filter(dt => {
          if (selectedArtists.length && selectedCountries.length) {
            return (
              !!selectedArtists.find(a => a.value === dt.username) &&
              !!selectedCountries.find(c => c.value === dt.countryCode)
            )
          } else if (selectedArtists.length) {
            return !!selectedArtists.find(a => a.value === dt.username)
          } else if (selectedCountries.length) {
            return !!selectedCountries.find(c => c.value === dt.countryCode)
          }
          return true
        })
        .map((dt, idx) => ({
          title: dt.name,
          id: idx,
          portFolioImg: getArtistImrUrl(dt),
          label: dt.titles[0][1],
          ...dt,
        })),
    [selectedArtists, selectedCountries]
  )

  return (
    <div className="ArtistsPage py-24">
      <h3 className="text-primary font-semibold tracking-widest text-2xl mb-4">
        Meet The Artists
      </h3>
      <div className="grid-cols-10 grid mb-12">
        <div className="text-white col-span-10 md:col-span-7 font-semibold">
          MasterBrews is extremely proud of the international artist community we have put together. 
          Without them, there is no us. The goal of our &ldquo;90 artists, 60 countries&ldquo; initiative is 
          to provide an environment which fosters creativity and diversity for everyone. All 
          MasterBrew artists are encouraged to enjoy freedom of expression and focus solely on 
          what they do best—creating something magical. Enjoy discovering the artists below, 
          and make sure you check back often as we continue to reveal amazing talents from our 
          roster every single day as we head towards our NFT 2.0 Pre-Sale!
        </div>
        <div className="col-span-10 md:col-span-3 text-right mt-5 md:mt-0">
          <div className="md:pl-28 hidden">
            <Button className="w-full mb-4 py-4" variant="outline">
              Apply
            </Button>
            <Button className="w-full py-4" variant="outline">
              FAQ
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <Carousel
          swipeable
          draggable
          responsive={responsive}
          infinite={true}
          arrows={null}
          customButtonGroup={<ButtonGroup />}
        >
          {artistsSpotlight.map(dt => (
            <div key={dt.id} className="md:mr-4 mb-20 mx-auto md:mx-0">
              <div className="section-heading mb-4">{dt.title}</div>
              <div className="border-primary grid grid-cols-10 border-2 rounded-md justify-between bioHeight">
                <div className="p-5 col-span-full row-start-2 md:row-start-1 md:col-span-3 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col gap-3 md:flex-row mb-1 justify-between items-start flex-grow">
                      <div className="text-primary flex flex-row md:flex-col font-semibold text-2xl tracking-widest">
                        {dt.teamName.split(" ").map(name => (
                          <div key={name}>{name}&nbsp;</div>
                        ))}
                      </div>
                      <img src={dt.countryImg} className="countryImg" />
                    </div>
                    <div className="text-white font-semibold">
                      {dt.teamDesc}
                    </div>
                  </div>
                  <Link to={dt.username}>
                    <Button className="mt-4">View Profile</Button>
                  </Link>
                </div>
                <div className="flex-grow col-span-full md:col-span-7">
                  <img
                    className="transform carouselImg select-none md:translate-x-4  md:-translate-y-4 mt-4 md:-mt-5 rounded-md w-full max-h-full max-w-full object-cover"
                    src={dt.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="mt-2">
        <div
          onClick={() => {
            setSelectedCountries([])
            setSelectedArtists([])
          }}
          className="text-primary font-semibold text-right cursor-pointer mb-2 hidden md:block"
        >
          Clear All
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mb-5">
          <div className="section-heading mb-3">All Artists</div>
          <div className="flex sm:items-center flex-grow sm:flex-grow-0 self-stretch sm:self-center">
            <div className="text-white hidden md:block font-semibold mr-4 tracking-wider">
              Filter
            </div>
            <div className="flex gap-3 flex-col md:flex-row sm:items-center flex-grow sm:flex-grow-0 self-stretch sm:self-center px-5 sm:px-0">
              <Filter
                placeholder="By Artist"
                value={selectedArtists}
                onChange={setSelectedArtists}
                options={artData.artists.sort((a, b) => a.name.localeCompare(b.name)).map(dt => ({
                  label: dt.name,
                  value: dt.username,
                }))}
              />
              <Filter
                placeholder="By Country"
                value={selectedCountries}
                onChange={setSelectedCountries}
                options={countries}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 -mx-container">
          {portfolios.map((dt, index) => (
            <ArtistCard className="artistCard" key={dt.id || `${index}`} {...dt} />
          ))}
        </div>
      </div>
    </div>
  )
}
