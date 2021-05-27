// Core React
import Layout from "@components/layout/Layout/Layout"
import Brave from "@components/partials/Lander/Brave"
import React from "react"

// Render
const BravePage = () => (
  <Layout
    title="Brave x MasterBrews NFT 2.0 Pre-Sale"
    contentClassName="homePageContent px-0 max-w-full"
    visibleFooter={false}
    visibleClass={false}
  >
    <Brave />
  </Layout>
)
export default BravePage
