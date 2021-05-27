import ArtistCard from "@elements/ArtistCard/ArtistCard"
import Button from "@elements/Button/Button"
import ImageGallary from "@elements/ImageGallary/ImageGallary"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"
import {
  getAllPortfoliosOfArtist,
  getArtistHeroImageUrl,
  getCountryImgUrl,
} from "@util"
import artData from "@util/artData"
import { Link } from "gatsby"
import React, { useMemo, useState } from "react"
import "./ArtistProfilePage.scss"

const socialLinks = [
  { img: "/social_icons/fb.png", key: "fb" },
  { img: "/social_icons/foundation.png", key: "foundation" },
  { img: "/social_icons/hicetnunc.png", key: "hicetnunc" },
  { img: "/social_icons/ig.png", key: "ig" },
  { img: "/social_icons/knownorigin.png", key: "knownorigin" },
  { img: "/social_icons/makers.png", key: "makers" },
  { img: "/social_icons/opensea.png", key: "opensea" },
  { img: "/social_icons/rarible.png", key: "rarible" },
  { img: "/social_icons/superare.png", key: "superare" },
  { img: "/social_icons/showtime.png", key: "showtime" },
  { img: "/social_icons/twitter.png", key: "twitter" },
  { img: "/social_icons/web.png", key: "web" },
  { img: "/social_icons/web.png", key: "web2" },
  { img: "/social_icons/web.png", key: "web3" },
]

export default function ArtistProfilePage(props) {
  const [showGallary, setShowGallary] = useState(false)
  const [galIndex, setGalIndex] = useState(0)
  const userData = useMemo(
    () => artData.artists.find(dt => dt.username === props.params?.username),
    [props.params?.username]
  )

  const portfolios = useMemo(() => getAllPortfoliosOfArtist(userData), [
    userData,
  ])

  const prevArtist = useMemo(() => {
    const i = artData.artists.findIndex(
      dt => dt.username === userData?.username
    )
    return artData.artists[i - 1]
  }, [userData])

  const nextArtist = useMemo(() => {
    const i = artData.artists.findIndex(
      dt => dt.username === userData?.username
    )
    return artData.artists[i + 1]
  }, [userData])

  if (!userData) {
    return null
  }

  return (
    <div className="ArtistProfilePage px-5 md:px-0">
      <div
        className="imgCoverContainer"
        style={{
          backgroundImage: `linear-gradient(
          90deg,
          rgba(0, 18, 8, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        ),
        url("${getArtistHeroImageUrl(userData)}")`,
        }}
      >
        <div className="container mx-auto">
          <div className="teamProfileBox">
            <div className="flex items-center  bg-secondary rounded-md ">
              <div className="border-primary border-2 rounded-md justify-between bioBox">
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex mb-1 justify-between items-start flex-grow">
                      <div className="text-primary font-semibold text-2xl tracking-widest">
                        {userData.name?.split(dt => (
                          <div key={dt}>{dt}</div>
                        ))}
                      </div>
                      <img
                        src={getCountryImgUrl(userData?.countryCode)}
                        className="countryImg"
                      />
                    </div>
                    <div className="text-white font-semibold" style={{ "overflow": "hidden", "textOverflow": 'ellipsis', 'maxHeight': '290px' }}>
                      {userData?.bio}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative md:mt-8 z-10 bioSocial">
        <div className="flex items-center justify-center md:justify-end">
          {socialLinks
            .filter(dt => !!userData.links?.[0]?.[dt.key])
            .map((dt, idx) => (
              <a
                target="_blank"
                rel="noreferrer"
                key={idx}
                href={userData.links[0][dt.key]}
              >
                <img
                  className="mx-1 socialIcon"
                  src={dt.img}
                  alt="Social Link"
                />
              </a>
            ))}
        </div>

        <div className="mt-5 md:mt-3 bioGallery">
          <div>
            <div className="section-heading mb-6 text-center md:text-left">
              Artist Portfolio
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 artistPortfolioGrid">
            {portfolios.map((dt, idx) => (
              <ArtistCard
                onClickImg={() => {
                  setShowGallary(true)
                  setGalIndex(idx)
                }}
                key={dt.id}
                {...dt}
              />
            ))}
          </div>
          <div className="flex gap-7 flex-col md:flex-row justify-between md:items-center mt-10">
            {prevArtist ? (
              <Link to={`/artists/${prevArtist.username}`}>
                <Button
                  block={false}
                  variant="outline"
                  className="flex justify-center md:justify-between items-center w-full md:w-auto"
                >
                  <ChevronLeftIcon className="-ml-2 mr-2 md:mr-0" width={22} />
                  <span style={{ lineHeight: "22px" }}>Previous Artist</span>
                </Button>
              </Link>
            ) : (
              <div />
            )}
            {nextArtist ? (
              <Link to={`/artists/${nextArtist.username}`}>
                <Button
                  block={false}
                  variant="outline"
                  className="flex justify-center md:justify-between items-center w-full md:w-auto"
                >
                  <span style={{ lineHeight: "22px" }}>Next Artist</span>
                  <ChevronRightIcon className="-mr-2 ml-2 md:ml-0" width={22} />
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
      <ImageGallary
        open={showGallary}
        startIndex={galIndex}
        setOpen={setShowGallary}
        images={portfolios.map(dt => ({
          original: dt.portFolioImg,
          thumbnail: dt.portFolioImg,
          originalTitle: dt.label,
          thumbnailTitle: dt.label,
          description: dt.label,
        }))}
      />
    </div>
  )
}
