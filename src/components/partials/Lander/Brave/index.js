import React, {useState, useEffect} from 'react'

import { signUpForWallet } from "../../../../api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'gatsby'

import {
  faDiscord,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const icons = [
  { icon: faDiscord, color: "#8867ff", link: "https://discord.gg/EJKBkK9UBD" },
  { icon: faTwitter, color: "#62b0e5", link: "https://twitter.com/GrandmasterBREW" },
]

import './Brave.scss'

const calculateTimeLeft = () => {

  let year = new Date().getFullYear();
  const difference = +new Date(`5/27/${year} 12:00:00`) - +new Date();
  
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
}

export default function Brave() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer=setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const [activeIcon, setActiveIcon] = useState("")

  const [walletId, setWalletId] = useState("")
  const [error, setError] = useState("")
  const [succeed, setSucceed] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = e => {
    e.preventDefault()
    if (walletId) {
      console.log(error);
      setSubmitting(true)
      signUpForWallet(walletId, 'fnAEItcLWeACBPEG5e6XLRgy0fYw_cD2gq2wc5CV')
        .then(() => {
          setSucceed(true)
        })
        .catch(() => {
          setError("Failed to submit. Please try after sometime")
        })
        .finally(() => {
          setSubmitting(false)
        })
    } else {
      setError("That doesn't look like a valid Ethereum Wallet address!")
    }
  }

  return (
    <div className="bravePage">
      <div className="imgBgbox overflow-hidden ">
        <img src="/bg-brave.png" className="mx-auto hidden md:block" />
        <img src="/bg-brave-mobile.png" className="mx-auto block md:hidden" />
      </div>
      <div className="absolute mainBox w-full">
        <div className="text-5xl md:text-6xl lg:text-7xl text-white text-center font-bold px-3 py-14 sm:py-16 ct-bg-gradient">
          <span className="mr-2">Welcome</span> <img src="/brave-lion.png" alt="brave lion" className="w-10 md:w-20 inline" /> <span className="ml-2">Brave User!</span>
        </div>
        {/* <div className=" text-2xl md:text-4xl text-white font-bold text-center ct-txt-shadow">
          NFT 2.0 Pre-Sale Begins In:
        </div> */}
        <div className="brave-timer mt-10 sm:mt-20 md:mt-2 lg:mt-10 xl:mt-32">
          <div className="timer-box-container">
            <div className={`font-34 text-white text-center font-bold uppercase tracking-wide line-height-large text-shadow-secondary`}>
              NFT 2.0 Pre-Sale Begins In
            </div>
            <div className="flex items-center justify-center font-alarm text-5xl sm:text-6xl lg:text-7xl text-pink mt-20 sm:mt-16 md:mt-16 lg:mt-28 xl:mt-28 pt-2 md:pt-0 text-shadow-primary ct-mt ">
              <span className={`timer-box days`}>{timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}</span>:
              <span className={`timer-box hours`}>{timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}</span>:
              <span className={`timer-box minutes`}>{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}</span>:
              <span className={`timer-box seconds`}>{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</span>
            </div>
          </div>
        </div>
        <div className="text-white text-center text-2xl sm:text-3xl mt-3 sm:mt-10">
          1 Hour Early Access:
        </div>
        <div className="form-box-container mx-auto">
          <div className="form-box pt-3 sm:pt-6 pb-1 sm:pb-5 px-6">
            { !succeed ? 
              <div>
                <form onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 items-center py-2">
                    <input 
                      className="sm:col-span-2 form-input focus:outline-none" 
                      type="text" 
                      placeholder="Ethereum Wallet Address" 
                      value={walletId}
                      onChange={e => setWalletId(e.target.value)}
                      aria-label="Wallet ID" />
                    <button 
                      className="btn btn-signup w-max sm:w-auto px-6 mt-3 sm:mt-0 text-2xl " 
                      type="submit"
                      disabled={submitting} >
                      Submit
                    </button>
                  </div>
                </form>
                <p className="hidden sm:block text-red-500 text-sm h-6 items-center text-center">
                  {error}
                </p>
              </div>
              : 
              <div className="sm:flex justify-center items-center">
                <div className="font-16 text-white uppercase tracking-wide py-3">Never miss an announcement! Follow us: </div>
                <div className="flex sm:flex justify-center items-center mt-3 sm:mt-0">
                  {icons.map(dt => (
                    // eslint-disable-next-line react/jsx-key
                    <a href={dt.link} target="_blank" rel="noreferrer">
                      <div
                        key={dt.color}
                        onMouseEnter={() => {
                          setActiveIcon(dt.color)
                        }}
                        onMouseLeave={() => {
                          setActiveIcon("")
                        }}
                        className="iconContainer"
                        style={{
                          boxShadow:
                            activeIcon === dt.color
                              ? `0px 0px 13px 5px ${dt.color}`
                              : "none",
                        }}
                      >
                        <FontAwesomeIcon color={dt.color} icon={dt.icon} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            }
          </div>
        </div>
        <div className="grid grid-cols-3 justify-items-center ct-width mx-auto gap-5 my-8 sm:my-20 pb-2 sm:pb-8 ct-bg-gradient-nd">
          <div>
            <Link to="/artists">
              <img src="/icon-art.png" className="w-16 md:w-28 -mt-8 md:-mt-12 mx-auto" />
              <div className="text-white text-center text-3xl mt-4">
                Art
              </div>
            </Link>
          </div>
          <div>
            <Link to="/card">
              <img src="/icon-cards.png" className="w-16 md:w-28 -mt-8 md:-mt-12 mx-auto" />
              <div className="text-white text-center text-3xl mt-4">
                Cards
              </div>
            </Link>
          </div>
          <div>
            <Link to="/ecoSystem">

              <img src="/icon-ecosystem.png" className="w-16 md:w-28 -mt-8 md:-mt-12 mx-auto" />
              <div className="text-white text-center text-3xl mt-4">
                EcoSystem
              </div>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <Link to="/" className="px-5 py-3 ct-btn-continue text-2xl font-bold text-white text-center">
            Continue To Site
          </Link>
        </div>
      </div>
    </div>
  )
}