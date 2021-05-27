import { classNames } from "@util"
import React from "react"
import "./brewhouse.scss"

export default function Brewhouse() {
  return (
    <div>
      <div className="Brewhouse">
        <div className="mb-10">
          <div className="mb-5 md:mb-10 teamHeadContainer">
            <div className="uppercase text-center text-4xl px-6 md:text-5xl font-semibold outlineText ">
              THE BREWHOUSE (PLATFORM)
            </div>
          </div>
          <div className={classNames("")}>
            <div className="py-10 container mx-auto">
              <div className="grid md:grid-cols-2 gap-10 md:gap-20">
                <div className={classNames("row-start-2 md:row-start-1", "")}>
                  <div className="font-bold text-primary text-xl tracking-widest mb-4">
                    BREW Engine
                  </div>
                  <div className="font-semibold text-white">
                    Imagine if you could take a few pieces of your old clothing, 
                    throw them in a machine, and after an appropriate amount of 
                    time, boom! You have an awesome, new, one-of-a-kind outfit. 
                    This is the essence of the BREW Engine. Sometimes referred 
                    to as "Forging", our engine will let you take things a step 
                    further, adding the ability to mint and sell, or trade, your 
                    "recipes". Have a blast while creating ultra-rare NFTs, or 
                    gamify your site or app experience for your own customers! 
                    More details will be shared in the very near future.
                  </div>
                </div>
                <div className="">
                  <img src="/platform_engine.png" />
                </div>
              </div>
            </div>
          </div>
          <div className={classNames("bg-gradient-black-b pb-14")}>
            <div className="py-10 container mx-auto">
              <div className="grid md:grid-cols-2 gap-10 md:gap-20">
                <div className={classNames("row-start-2 md:row-start-1", "md:col-start-2")}>
                  <div className="font-bold text-primary text-xl tracking-widest mb-4">
                    BREW Gardens
                  </div>
                  <div className="font-semibold text-white">
                    No NFT project is complete without a marketplace on which to buy, 
                    sell and trade. MasterBrews is no different and will offer the community 
                    a cutting-edge service focused on ease of use, lightning-fast transactions 
                    and no per-transaction or royalty fees! Whether you are buying random packs of 
                    "ingredients" to use in the BREW Engine, or selling your crazy new recipe, our marketplace 
                    will also allow give you exclusive access to special artist drops, pre-sales 
                    and plenty more to come. Check back soon for more details!
                  </div>
                </div>
                <div className="">
                  <img src="/platform_gardens.png" />
                </div>
              </div>
            </div>
          </div>
          <div className={classNames("")}>
            <div className="py-10 container mx-auto">
              <div className="grid md:grid-cols-2 gap-10 md:gap-20">
                <div className={classNames("row-start-2 md:row-start-1", "")}>
                  <div className="font-bold text-primary text-xl tracking-widest mb-4">
                    $BREW Token
                  </div>
                  <div className="font-semibold text-white">
                    The life-blood of the MasterBrews economy, our $BREW utility token will 
                    continuously build value as we release new services, announce new partnerships 
                    or simply continue to gain market share with our NFT 2.0 product offerings. If 
                    you'd like to learn more regarding our $BREW token, please head on over to 
                    our <a href="/tokenomics"><u>Tokenomics</u></a> page.
                  </div>
                </div>
                <div className="">
                  <img src="/platform_token.png" />
                </div>
              </div>
            </div>
          </div>
          <div className={classNames("bg-gradient-black-b pb-14")}>
            <div className="py-10 container mx-auto">
              <div className="grid md:grid-cols-2 gap-10 md:gap-20">
                <div className={classNames("row-start-2 md:row-start-1", "md:col-start-2")}>
                  <div className="font-bold text-primary text-xl tracking-widest mb-4">
                    BREW Invent
                  </div>
                  <div className="font-semibold text-white">
                    Developers who write Smart Contracts are in HUGE demand right now. Chances 
                    are, you won't find one available; or, if you do, they may just cost you 
                    your first born. If learning Solidity or OpenZeppelin are not in your future 
                    plans, leave the heavy lifting to us. The proprietary MasterBrews Invent 
                    service, will offer a variety of Smart Contract templates you can customize, 
                    test and deploy through an intuitive UI. Smart Contracts don't have to be 
                    hard. Check back soon for more details.
                  </div>
                </div>
                <div className="">
                  <img src="/platform_invent.png" />
                </div>
              </div>
            </div>
          </div>
          <div className={classNames("")}>
            <div className="py-10 container mx-auto">
              <div className="grid md:grid-cols-2 gap-10 md:gap-20">
                <div className={classNames("row-start-2 md:row-start-1", "")}>
                  <div className="font-bold text-primary text-xl tracking-widest mb-4">
                    BREW Box
                  </div>
                  <div className="font-semibold text-white">
                    Everyone has signed up to receive a monthly package of curated goodies at 
                    one time or another, am I right? Subscription boxes are big business. Why 
                    not build a new business that takes things a step futher, into the NFT 2.0 
                    space! Let MasterBrews worry about the mechanics behind the Smart Contracts, 
                    Billing and NFT Minting, Vaulting and Dispersement. Have an awesome idea 
                    but not sure where to get the NFTs from? Let us connect you with our 
                    international artist community who will be happy to help. Check back soon for further details !
                  </div>
                </div>
                <div className="">
                  <img src="/platform_box.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
