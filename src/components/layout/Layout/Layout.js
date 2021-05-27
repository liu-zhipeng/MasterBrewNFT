import {
  faDiscord,
  faMediumM,
  faRedditAlien,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import "./Layout.scss"
import { footerLinks } from "./menu"
// import Button from "@elements/Button/Button"
import { Disclosure } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
// import { signUpForWallet } from "../../../api"
import { menus } from "./menu"
import { useMeasure } from "react-use"

const icons = [
  { icon: faDiscord, color: "#8867ff", link: "https://discord.gg/EJKBkK9UBD" },
  { icon: faTwitter, color: "#62b0e5", link: "https://twitter.com/GrandmasterBREW" },
  { icon: faRedditAlien, color: "#ff4300", link: "https://reddit.com/r/masterbrews" },
  { icon: faMediumM, color: "#fac045", link: "https://blog.masterbrews.cards" },
]

export default function Layout({
  title = "MasterBrews",
  children,
  contentClassName = "",
  headerClass = "",
  headerStyle = null,
  visibleClass = true,
  visibleFooter = true
}) {
  const [activeIcon, setActiveIcon] = useState("")
  const [ref, /*{ height, bottom }*/] = useMeasure()

//  const [web3, setWeb3] = useState(null)
//  const [onboard, setOnboard] = useState(null)

//  useEffect(async () => {
//    if (typeof window !== "undefined") {
//      let { default: Onboard } = await import("bnc-onboard")
//      let { default: Web3 } = await import("web3")
//      const BLOCKNATIVE_KEY = 'cd395250-b5c3-4079-a711-d5d0a5767542';
//      const NETWORK_ID = 1;
//
//      const onboard = Onboard({
//        dappId: BLOCKNATIVE_KEY,
//        networkId: NETWORK_ID,
//        darkMode: true,
//        subscriptions: {
//          wallet: wallet => {
//            setWeb3(new Web3(wallet.provider))
//          }
//        }
//      });
//
//      setOnboard(onboard);
//    }
//  }, [])

//  async function login () {
//    if (onboard != null) {
//      await onboard.walletSelect();
//      await onboard.walletCheck();
//    }
//  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="layout">
        <Disclosure
          as="nav"
          ref={ref}
          className={`header fixed z-50 w-full px-0 ${headerClass} ${ visibleClass ? "block" : "hidden"} `}
          style={headerStyle}
        >
          {({ open }) => (
            <>
              <div ref={ref}>
                <div className="container mx-auto py-4 md:py-0">
                  <div className="relative flex items-center justify-between">
                    <div className="flex-1 flex items-center justify-between sm:items-stretch min-w-full">
                      <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                          <img
                            className="block h-8 w-auto"
                            src="/LogoDark.png"
                            alt="Workflow"
                          />
                        </Link>
                      </div>
                      <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                          <div>
                            <ul className="navMenus">
                              {menus.map(dt => (
                                <li className="py-2 px-3" key={dt.name} >
                                  { dt.type == 'internal' ?

                                    <Link
                                      activeClassName="active"
                                      to={dt.path}
                                      partiallyActive={!!dt.partiallyActive}
                                      target={dt.target}
                                    >
                                      {dt.name}
                                    </Link>
                                  :
                                    <a href={dt.path} target={dt.target}>
                                      {dt.name}
                                    </a>
                                }
                              </li>
                              ))}
                              <li className="py-2 pl-3">
                                  <button className="flex justify-center gap-2 items-center bg-gray-300 hover:bg-gray-400 text-sm text-black font-bold py-2 px-4 rounded-sm tracking-wide w-full">
                                    <span className="text-secondary tracking-wider">
                                      Connect
                                    </span>
                                    <img
                                      src="/Icon - Lock - Small.png"
                                      className="w-4"
                                    />
                                  </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                      {/* Mobile menu button*/}
                      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md menuToggleIcon focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="sm:hidden bg-black">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <div>
                    <ul className="navMenus flex-col">
                      {menus.map(dt => (
                        <li className="py-2 px-3" key={dt.name}>
                          <Link
                            activeClassName="active"
                            to={dt.path}
                            target={dt.target}
                          >
                              {dt.name}
                          </Link>
                        </li>
                      ))}
                      <li className="py-2 px-3 w-full">
                        <button className="flex gap-2 justify-center items-center bg-gray-300 hover:bg-gray-400 text-sm text-black font-bold py-2 px-4 rounded-sm tracking-wide w-full">
                          <span className="text-secondary tracking-wider">
                            Connect
                          </span>
                          <img src="/Icon - Lock - Small.png" className="w-4" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure
          as="nav"
          ref={ref}
          className={`top-0 bg-black fixed z-50 w-full px-0 ${headerClass} ${ visibleClass ? "hidden" : "block"} `}
          style={headerStyle}
        >
          <>
            <div ref={ref}>
              <div className="container mx-auto py-4">
                <div className="flex items-center justify-center sm:items-stretch min-w-full">
                  <div className="flex-shrink-0 flex items-center">
                    <Link to="/">
                      <img
                        className="block h-8 w-auto"
                        src="/LogoDark.png"
                        alt="Workflow"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        </Disclosure>

        <div
          // style={{ marginTop: height }}
          className="contentWrapper flex flex-col bg-secondary relative"
        >
          <main
            className={`content container mx-auto flex-grow flex flex-col ${contentClassName} ${visibleClass ? 'pb-20' : 'pb-0'} `}
          >
            {children}
          </main>
        </div>

        <div className={`footerWrapper min-w-full ${ visibleClass && visibleFooter ? "block" : "hidden"} `}>
          <div className="footer container mx-auto w-full flex flex-col md:flex-row items-center lg:justify-between">
            <div>
              <div className="text-center followText hidden md:block">
                Follow Us
              </div>
              <div className="mt-4 flex align-middle justify-center mb-4">
                <ul className="flex justify-between flex-grow">
                  {icons.map(dt => (
                    <a href={dt.link} target="_blank" rel="noreferrer" key={dt.icon}>
                      <div
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
                </ul>
              </div>
              <div className="copyText text-gray-400 text-center mt-3 hidden md:block">
                ©2021 MasterBrews. All rights reserved.
              </div>
            </div>
            <div className="flex-col md:flex-row items-center flex justify-center lg:justify-end">
              {footerLinks.map(dt => (
                <div
                  key={dt.heading}
                  className="mx-3 footerNavItem mb-5 md:mb-0"
                >
                  <div className="footerNavHeading text-center md:text-left text-sm">
                    {dt.heading}
                  </div>
                  <ul>
                    {dt.links.map(sb => (
                      <li className="text-gray-300 text-center md:text-left my-1.5 font-semibold text-sm" key={sb.label}>
                        { sb.type == 'internal' ?
                          <Link to={sb.link}>
                            {sb.label}
                          </Link>
                        :
                          <a href={sb.link}>
                            {sb.label}
                          </a>
                        }
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="copyText text-gray-400 text-center mt-3 block md:hidden">
              ©2021 MasterBrews. All rights reserved.
            </div>
          </div>
        </div>
        <div className={`relative min-w-full ${ !visibleClass && visibleFooter ? "block" : "hidden"} `}>
          <div className="container mx-auto py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <Link to="/">
                <img 
                  src="/LogoDark.png" 
                  width="280" 
                  alt="Footer Logo" />
              </Link>
              <div className="copyright text-sm text-white opacity-60 mt-8 md:mt-0">
                &copy; 2021 MasterBrews All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
