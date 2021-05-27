import React from "react"
import { Link } from "gatsby"
import "./Card.scss"
import Carousel from "react-multi-carousel"

import cardPageData from '@util/cardPageData'

const cardItems = [
  {
    icon: '/icons/icons1.png',
    title: 'Franchise / Distribution Fees',
    desc: 'Cards featuring this trait receive a direct cut (%) paid out in ETH, of all linked sales on the tier below them. Master Brewers receive 40% from every sub-Distributor sold (up to 4) while Distributors receive 10% from every sub-Consumer sold (up to 20).'
  },
  {
    icon: '/icons/icons2.png',
    title: 'Regional Rights',
    desc: 'Cards featuring this trait receive a long-term, passive income on all "BREW Gardens" (marketplace) sales that take place under their respective country/region. All such revenue will be paid out in $BREW tokens, which powers the platform and all transactions.'
  },
  {
    icon: '/icons/icons3.png',
    title: '$BREW Tokens',
    desc: 'All card buyers will receive a number of $BREW tokens. These tokens are a utilty token, whose value shall rise as the demand for and usage of our platform service offerings does. We aim to build strong long-term value in $BREW over the coming months.'
  },
  {
    icon: '/icons/icons4.png',
    title: 'Brewing Kits',
    desc: 'All card buyers will receive a very special collection of items (NFTs) for the upcoming BREW Engine. The contents of these Kits will be exclusive to those who purchased a card during our sale and will not be available in future marketplace card packs.'
  },
  {
    icon: '/icons/icons5.png',
    title: 'On the House (1 in 50)',
    desc: 'Every Consumer card purchased has a chance to win a bonus additional Consumer card. It really is that simple! There is no limit to how many a single individual may win.'
  },
  {
    icon: '/icons/icons6.png',
    title: 'Climb the Ladder (1 in 300)',
    desc: 'Every Consumer card purchased has a chance to win a Distributor-tier card upgrade. BONUS: you\'ll also retain your original Consumer card! There is no limit to how many a single individual may win.'
  },
  {
    icon: '/icons/icons7.png',
    title: '*** Pre-Sale Bonus ***',
    desc: 'All cards, of any tier, bought during our pre-sale period will receive an additional bonus perk, giving them a LIFETIME discount on ALL platform services and fees. Thank you, early adopters!'
  },
]

const responsive = {
  mobile: {
    breakpoint: { max: 10000, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const ButtonGroup = ({ goToSlide, ...rest }) => {
  let {
    carouselState: { currentSlide, totalItems },
  } = rest
  totalItems = Math.ceil(totalItems / 2) - 1

  const buttonLabel = ['MASTER BREWER', 'DISTRIBUTOR', 'CONSUMER']

  return (
    <div className="absolute top-1 left-auto md:right-4 lg:right-20 bottom-8 z-30">
      <div className="text-primary flex justify-center items-center">
        {[...Array(totalItems).keys()].map( (dt, idx) => {
          if (currentSlide === 1) {
            currentSlide = totalItems
          }

          return (
            <button
              key={idx}
              onClick={() => goToSlide(dt + 2)}
              className={`cursor-pointer mx-2 nav-btn-cards rounded-md ${
                currentSlide - 1 === dt + 1
                  ? "active text-black"
                  : "bg-transparent border-none cl-primary"
              }`}
              style={{ 
                padding: '13px 20px', 
                fontFamily: 'Barlow',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                letterSpacing: '4px',
                lineHeight: '29px',
              }}
            >{ buttonLabel[idx] }</button>
          )
        })}
      </div>
    </div>
  )
}

export default function Team() {

  return (
    <div className="CardPage">
      <div className="container mx-auto my-10">
        <div className="carousel-wrapper">
          <div className="outlineText text-4xl md:text-5xl text-center font-semibold uppercase tracking-wide mt-5">
            NFT 2.0 Card Types
          </div>
          <div className="carousel">
            <div className="mt-20 hidden md:block">
              <Carousel
                responsive={responsive}
                infinite={true}
                arrows={true}
                className="pt-10"
                customButtonGroup={<ButtonGroup />}
              >
                {
                  cardPageData.cardPageDatas.map( dt => (
                    <div className="carousel-item pt-5 pb-3 lg:pb-0 md:pt-10 px-5" key={dt.name}>
                      <div className="grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-7 gap-4" >
                        <div className="text-white lg:col-span-2 transform -translate-y-10 lg:-translate-y-20" >
                          <img className="w-auto mx-auto rounded-xl" src={dt.img} alt={dt.title} />
                          <div className="font-14 text-primary text-center uppercase tracking-wide mt-5">
                            <Link to={dt.link}>{dt.name}</Link>
                          </div>
                        </div>
                        <div className="text-white lg:col-span-2">
                          <div className="featuredCard mt-5">
                            { dt.features.map( feature => (
                              <div className="flex items-center mb-3 md:mb-5 featuredCard-item" key={feature.name}>
                                <img src={feature.img} />
                                <div className="ml-3">
                                  <div className="text-primary-darker text-sm font-semibold">
                                    {feature.name}
                                  </div>
                                  <div className="text-white font-medium text-lg">
                                    {feature.desc}
                                  </div>
                                </div>
                              </div>
                            )) }
                          </div>
                        </div>
                        <div className="lg:col-span-2 xl:col-span-3">
                          <img className="w-auto" src={dt.prodImg} alt="CSL" />
                          <div className="text-white font-medium text-lg mt-4 md:mt-8">
                            {dt.desc}
                          </div>
                          <div className="mt-8 md:mt-10 flex items-center justify-between">
                            <div className="flex-1">
                              <div className="text-white font-medium text-2xl">
                                Starting Price
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="title font-32 text-primary xl:font-bold px-4 tracking-widest text-center">{dt.prodPrice}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Carousel>
            </div>
            <div className="mt-0 block md:hidden text-center">
              <Carousel
                responsive={responsive}
                infinite={true}
                arrows={true}
                className="pt-10"
              >
              {
                  cardPageData.cardPageDatas.map( dt => (
                    <div className="carousel-mobile-item" key={dt.name} >
                      <div className="title font-32 text-primary xl:font-bold px-4 tracking-widest text-center">{dt.title}</div>
                      <img className="w-auto mx-auto mt-5" src={dt.img} alt={dt.title} />
                      <div className="font-14 text-primary text-center uppercase tracking-wide mt-5">
                        {dt.name}
                      </div>
                      <div className="text-white font-medium text-2xl mt-8">
                        Starting Price
                      </div>
                      <div className="title font-32 text-primary xl:font-bold px-4 tracking-widest text-center">{dt.prodPrice}</div>
                      <img className="w-auto mx-auto my-8" src={dt.prodImg} alt="CSL" />
                      <div className="featuredCard mt-5 text-left">
                        { dt.features.map( feature => (
                          <div className="flex items-center mb-3 md:mb-5 featuredCard-item" key={feature.name}>
                            <img src={feature.img} />
                            <div className="ml-3">
                              <div className="text-primary-darker text-sm font-semibold">
                                {feature.name}
                              </div>
                              <div className="text-white font-medium text-lg">
                                {feature.desc}
                              </div>
                            </div>
                          </div>
                          )) 
                        }
                        <div className="text-white font-medium text-left text-lg mt-4 md:mt-8">
                          {dt.desc}
                        </div>
                      </div>
                    </div>
                  ))
                }

              </Carousel>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="title font-32 text-primary xl:font-bold px-4 tracking-widest mt-20 mb-5 text-center">Perks & Abilities</div>
          <div className="card">
            <div className="flex flex-wrap justify-center ">
              {
                cardItems.map( (dt, idx) => {
                  return (
                    <div className="card-item" key={idx}>
                      <img src={dt.icon} alt="Revnue Generation" className="mx-auto -mb-12 " />
                      <div className="card-body px-5 pt-14 pb-7">
                        <div className="text-primary font-bold text-xl tracking-wider text-center">
                          {dt.title}
                        </div>
                        <div className="text-white font-medium line-height-medium mt-6">
                          {dt.desc}
                        </div>
                      </div>
                    </div>
                  )}
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
