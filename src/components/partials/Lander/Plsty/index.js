import React from 'react'

import Timer from '@components/elements/Timer'
import Form from '@components/elements/Form'

import { Link } from 'gatsby'

import './Lander.scss'

export default function Plsty() {
  return (
    <div className="">
      <div className="landerBanner flex justify-center items-center">
        <div className="h-full">
          <div className="flex flex-col h-full items-center justify-center">
            <div className="text-6xl md:text-8xl outlineText-secondary font-bold uppercase tracking-wide md:tracking-widest" style={{ color: 'rgba(0,0,0,0)' }}>
              PLS&amp;TY
            </div>
            <div className="text-2xl md:text-4xl font-semibold text-white text-center mt-5 tracking-wide md:tracking-widest" style={{textShadow: '0 0 20px rgba(0,0,0,0.75)'}}>
              Exclusive MasterBrews NFT Giveaway!
            </div>
            <div className="">
              <Timer visibleTitle={false} color={'white'} />
              <Form authKey="fnAEItcLWeACBPEG5e6XLRgy0fYw_cD2gq2wc5CV" visibleLink = {false} customStyle={{"backgroundColor": '#4DC081'}} />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="hidden md:flex flex-col items-center justify-evenly">
            <div className="font-20 italic text-primary uppercase tracking-wide w-max text-center">
              &ldquo;Down For Me&ldquo;
            </div>
            <div className="font-20 italic text-primary uppercase tracking-wide w-max text-center">
              &ldquo;Good Vibes&ldquo;
            </div>
          </div>
          <div className="md:col-span-2">
            <iframe 
              height="370" 
              width="308" 
              style={{ border: '1px solid #979797' }}
              src="https://www.youtube.com/embed/ujfJLoxytzA?autoplay=1&rel=0&controls=0&mediumbrand"
              className="mx-auto">
            </iframe>
          </div>
          <div className="hidden md:flex flex-col items-center justify-evenly">
            <div className="font-20 italic text-primary uppercase tracking-wide w-max text-center">
              &ldquo;Motives&ldquo;
            </div>
            <div className="font-20 italic text-primary uppercase tracking-wide w-max text-center">
              &ldquo;Rebel Love&ldquo;
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center w-max mx-auto gap-1 sm:gap-5 my-12">
        <img src="/100-mill-card.png" className="my-2 mx-2 md:my-3 md:mx-8 w-32 md:w-40" />
        <img src="/itunes-card-2.png" className="my-2 mx-2 md:my-3 md:mx-8 w-32 md:w-40" />
        <img src="/billboard-card-2.png" className="my-2 mx-2 md:my-3 md:mx-8 w-32 md:w-40" />
        <div className="font-20 italic text-primary uppercase tracking-wide w-max text-center block md:hidden my-2 mx-2 md:my-3 md:mx-8">
          &ldquo;Down For Me&ldquo; <br />
          &ldquo;Good Vibes&ldquo; <br />
          &ldquo;Motives&ldquo; <br />
          &ldquo;Rebel Love&ldquo; <br />
        </div>
      </div>
      <Link to="/" className="block py-7 bg-dark-primary text-center">
        <div className="text-2xl text-black text-center tracking-wide font-semibold">Continue To Site</div>
      </Link>
    </div>
  )
}
