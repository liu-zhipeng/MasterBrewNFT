import Layout from "@components/layout/Layout/Layout"
import ArtistProfilePage from "@partials/ArtistProfilePage/ArtistProfilePage"
import React from "react"

export default function Artist(props) {
  return (
    <Layout title={`${props.username} Artist Profile- MasterBrews NFT 2.0`}>
      <ArtistProfilePage {...props} />
    </Layout>
  )
}
