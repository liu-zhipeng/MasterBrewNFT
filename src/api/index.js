import axios from "axios"

export const signUpForWallet = async (walletId, authKey) => {
  {console.log(authKey + " ~~~~~~~~~~~~~~~~~~~~~~~~~~~");}
  try {
    const res = await axios({
      url: "https://graphql.fauna.com/graphql",
      method: "POST",
      headers: {
        Authorization: `Bearer ${authKey}`,
      },
      data: {
        query: `
          mutation {
            createEarlyAccess(data: { wallet: "${walletId}" }) {
              _id
              wallet
            }
          }
        `,
      },
    })
    console.log(res.data, "api data")
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
