import React from "react"

import Timer from '@components/elements/Timer'
import Form from '@components/elements/Form'

import "./HomePage.scss"
import { Link } from "gatsby"

const steps = [
  {
    name: "Step 01",
    title: "Web3 Ethereum Wallet",
    link: "https://metamask.io/",
    linktext: "https://metamask.io/",
    desc:
      "If you don't already have one, please install a web3-wallet which supports Ethereum mainnet. We recommend MetaMask which can be installed in seconds from their official website:",
  },
  {
    name: "Step 02",
    title: "Buy or Deposit ETH",
    link: "",
    linktext: "",
    desc:
      "You will require enough ETH in your wallet to cover any purchases you wish to make, plus a small gas fee. Please fund your wallet in advance, to avoid missing out during our sale, as quantity will move fast!",
  },
  {
    name: "Step 03",
    title: "Connect to MasterBrews",
    link: "",
    linktext: "",
    desc:
      "Clicking CONNECT (found in our main menu), you will be prompted to select your account and confirm you wish to proceed. We recommend performing this step ASAP, so you are ready and experience no delays once the sale begins!",
  },
  {
    name: "Step 04",
    title: "Ready to Buy",
    link: "",
    linktext: "",
    desc:
      "You're all set! Once the sale begins, click the BUY button of your choice and confirm the transaction. Depending on network congestion, it may take a few moments, but you will receive a successful transaction confirmation.",
  },
  {
    name: "Step 05",
    title: "What Happens Next?",
    link: "",
    linktext: "",
    desc:
      "Sit back and relax, and smile at your wise decision! We will be posting daily updates, announcements, contests, art reveals and more throughout the entire sale period.",
  },
  {
    name: "Step 06",
    title: "Share with Friends",
    link: "",
    linktext: "",
    desc:
      "Don't keep this to yourself! We would love and appreciate all efforts which help spread our vision and project, and further build our awesome community. We shall all reap the benefits.",
  },
  {
    name: "Step 07",
    title: "Post-Sale",
    link: "",
    linktext: "",
    desc:
      "Once the sale ends, all card art, details and winners will be decided (through verifiable randomness) and revealed. All NFTs and $BREW tokens will be delivered and will be viewable on our \"My BREWs\" page - coming soon.",
  },
  {
    name: "Step 08",
    title: "Still Need Help?",
    link: "https://discord.gg/EJKBkK9UBD",
    linktext: "MasterBrews Discord",
    desc:
      "If you have any issues or need further help, please don't hesitate to reach out to us - the best way being through our Official",
  },
]
  

export default function HomePage() {

	return (
		<div className="homepage2">
      <div className="container home-banner py-10 mx-auto text-center">
        <Timer visibleTitle={true}  color={'green'}  />
        <Form visibleLink={true} authKey="fnAEItcLWeACBPEG5e6XLRgy0fYw_cD2gq2wc5CV" customStyle={{"backgroundColor": 'black'}}  />
      </div>
			<div className="container mx-auto">
				<div className="py-10 my-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <img src="/image-pre-sale.png" alt="" className="blogImage" />
            <img src="/image-brewhouse.png" alt="" className="blogImage" />
            <img src="/iamge-passive-income.png" alt="" className="blogImage" />
          </div>
        </div>
			</div>
			<div className="container mb-5 mx-auto ">
        <div className="welcomeBox pt-10">
          <div className="mb-10 outlineText text-5xl text-center font-semibold uppercase tracking-wide">
            Welcome to MasterBrews
          </div>
          <div className="flex flex-col md:flex-row gap-5 py-5 pb-10 mx-auto">
            <div className="flex justify-center md:justify-end homeImageWrapper">
              <img src="/mark.png" className="homeImage" alt="" />
            </div>
            <div className="flex flex-col">
              <div className="text-white font-medium mb-7 line-height-medium">
								MasterBrews is born of the idea that everyone, everywhere, should be allowed to create amazing things and not be limited by technological 
                barriers or knowledge gaps. We believe in diversity and fairness for all, strongly demonstrated by our &ldquo;90 artists, 60 countries&ldquo; initiative. Take a 
                look around, register for early access to our pre-sale and become part of our growing community.
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Link to="/artists">
                  <div className="h-full border-2 border-primary flex flex-col items-center justify-center rounded-lg py-10 px-10 box-shadow-primary">
                    <img src="/icon - meet-the-artists.png" className="w-28" />
                    <div className="text-white font-semibold text-xl tracking-widest text-center mt-5 lg:mt-10">
											Meet The Artists
                    </div>
                  </div>
                </Link>
                <Link to="/card">
                  <div className="h-full border-2 border-primary flex flex-col items-center justify-center rounded-lg py-10 px-5 box-shadow-primary">
                    <img src="/icon - NFTs.png" className="w-28" />
                    <div className="text-white font-semibold text-xl tracking-widest text-center mt-5 lg:mt-10">
											View Our Cards
                    </div>
                  </div>
                </Link>
                <Link to="/ecoSystem">
                  <div className="h-full border-2 border-primary flex flex-col items-center justify-center rounded-lg py-10 px-5 box-shadow-primary">
                    <img src="/icon_ecosystem.png" className="w-28" />
                    <div className="text-white font-semibold text-xl tracking-widest text-center mt-5 lg:mt-10">
											Check Out The Ecosystem
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
			<div className="container mx-auto py-10 px-10" id="how_to">
        <div className="text-primary font-bold px-4 text-2xl tracking-widest mb-10 text-center">
          Note: CONNECT button will be unlocked 72 hours prior to Pre-Sale.
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 pt-5">
          { steps.map(dt => (
            <div key={dt.name} className="flex flex-col items-center">
              <div className="outlineText text-5xl uppercase font-bold mb-5">
                {dt.name}
              </div>
              <div className="text-primary font-bold text-xl tracking-wider text-center mb-4">
                {dt.title}
              </div>
              <div className="text-center text-white font-medium line-height-medium">
                {dt.desc} <a href={dt.link} target="_blank" rel="noreferrer">{dt.linktext}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
		</div>
	)
}


