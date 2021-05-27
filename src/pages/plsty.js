// Core React
import Layout from "@components/layout/Layout/Layout"
import Plsty from "@components/partials/Lander/Plsty"
import React from "react"

// Render
const PlstyPage = () => (
  <Layout
    title="PLS&TY x MasterBrews Exclusive NFT 2.0 Giveaway!"
    contentClassName="homePageContent px-0 max-w-full"
    visibleClass={false}
  >
    <Plsty />
  </Layout>
)
export default PlstyPage
