import React, { useState } from "react"
import './Form.scss'
import { signUpForWallet } from "../../../api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faDiscord,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const icons = [
  { icon: faDiscord, color: "#8867ff", link: "https://discord.gg/EJKBkK9UBD" },
  { icon: faTwitter, color: "#62b0e5", link: "https://twitter.com/GrandmasterBREW" },
]

export default function Form(props) {
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
      signUpForWallet(walletId, props.authKey)
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
    <>
      <div className="form-box-container mt-20 sm:mt-24 mx-auto sm:border-2 sm:border-primary rounded-xl">
        <div className="font-20 text-white uppercase tracking-wide -mt-5 w-max mx-auto rounded-xl px-8 py-1" style={props.customStyle}>
          { !succeed ? 'Get 1-Hour Early Access' : 'You’ve made the list!' }
        </div>
        <div className="form-box pt-4 sm:pt-6 pb-1 sm:pb-5 px-6">
          { !succeed ? 
            <div>
              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center py-2">
                  <input 
                    className="sm:col-span-2 form-input focus:outline-none" 
                    type="text" 
                    placeholder="Please enter your Ethereum Wallet ID" 
                    value={walletId}
                    onChange={e => setWalletId(e.target.value)}
                    aria-label="Wallet ID" />
                  <button 
                    className="btn btn-signup w-max sm:w-auto px-6 mt-3 sm:mt-0" 
                    type="submit"
                    disabled={submitting} >
                    Yes, Sign Me Up!
                  </button>
                </div>
              </form>
              <p className="hidden sm:block text-red-500 text-sm h-6 items-center text-center">
                {error}
              </p>
            </div>
            : 
            <div className="sm:flex justify-center items-center">
              <div className="font-16 text-white uppercase tracking-wide">Never miss an announcement! Follow us: </div>
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
      <div className={`font-14 text-primary uppercase tracking-wide mt-5 text-center ${props.visibleLink ? 'block' : 'hidden'}`}>
        <a href="/#how_to">How Do I Connect My Wallet?</a>
      </div>
    </>
  )
}