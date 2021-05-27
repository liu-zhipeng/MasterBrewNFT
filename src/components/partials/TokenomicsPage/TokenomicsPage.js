import React from "react"
import "./TokenomicsPage.scss"

export default function TokenomicsPage() {
  return (
    <div className="TokenomicsPage mt-16">
      <div className="pb-12 px-5">
        <div className="uppercase text-center text-4xl md:text-5xl font-semibold outlineText ">
          What is tokenomics?
        </div>
        <div className="mt-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="p-1.5 bg-primary rounded-full" />
              <div className="h-14 w-0.5 bg-primary" />
            </div>
            <div className="px-4 sm:px-7 md:px-12 py-8 font-semibold text-white border-2 border-primary rounded-md">
              Tokenomics deals with the science and understanding of all related 
              aspects involved in creating and maintaining a token economy. It 
              all starts with the team. When it comes to token economies and 
              blockchain in general, two things are paramount: trust and 
              transparency. Here at MasterBrews, our team and advisors are 
              all real people, with real successes and failures behind them and 
              there is no shroud of mystery. What else are considered factors? 
              Token Allocation, PR & Branding, Real World Utility and the Business 
              Model; to name a few.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black bg-gradient-black-b pt-8 md:pt-16 pb-2">
        <div className="container mx-auto">
          <div className="grid grid-cols-none md:grid-cols-10 gap-8">
            <div className="row-start-2 md:row-start-1 md:col-span-6 pr-5">
              <div className="font-bold text-primary text-xl tracking-widest mb-4">
                Utility Coin
              </div>
              <div className="text-white font-semibold">
                Unlike many popular cryptocurrencies, utility tokens avoid being 
                labeled a security and while their value is also tied to the rules 
                of supply and demand, they distinguish themselves by having a 
                function or purpose. At MasterBrews, our entire ecosystem will be 
                powered by the $BREW token as will future partnerships. With a 
                FixedSupply / TotalSupply of 1 Billion (100% pre-minted, no future 
                  mint function), as our services and offerings grow in demand, 
                so too, shall the value of our token for both ourselves and our 
                community. Check back soon for further details on the upcoming 
                $BREW token deployment.
              </div>
            </div>
            <div className="md:col-span-4">
              <img
                src="/tokenomics_coin.png"
                className="max-w-full object-cover"
                alt="Coin Graphic"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pb-10 pt-0 md:pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-100">
          <div className="relative">
            <center>
              <img
                src="/tokenomics_locked.png"
                className="max-w-full object-cover"
                alt="Locked Graphic"
              />
            </center>
          </div>
          <div>
            <div className="grid grid-cols-none md:grid-cols-3 gap-8 mb-10 mt-10">
              <div className="col-span-2">
                <div className="flex items-center mb-3 md:mb-0">
                  <div className="mb-2 text-primary text-xl font-bold tracking-widest">
                    Investor Wallets
                  </div>
                </div>
                <div className="text-white font-semibold text-sm">
                  We plan to cap allocation for external investors at roughly 10%-15% of 
                  TotalSupply. This will ensure the health and long-term viability of our token.
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-center mb-3 md:mb-0">
                  <div className="mb-2 text-primary text-xl font-bold tracking-widest">
                    Founder Wallets
                  </div>
                </div>
                <div className="text-white font-semibold text-sm">
                  We plan to cap allocation for co-founders, team members and advisory board 
                  members at less than half of the TotalSupply. 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
