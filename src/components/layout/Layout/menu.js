export const menus = [
  {
    name: "Home",
    path: "/",
    target: "",
    type: 'internal'
  },
  {
    name: "Cards",
    path: "/card",
    partiallyActive: true,
    target: "",
    type: 'internal'
  },
  {
    name: "Art",
    path: "/artists",
    partiallyActive: true,
    target: "",
    type: 'internal'
  },
  {
    name: "EcoSystem",
    path: "/ecoSystem",
    target: "",
    type: 'internal'
  },
  {
    name: "Team",
    path: "/team",
    target: "",
    type: 'internal'
  },
  {
    name: "FAQ",
    path: "https://help.masterbrews.cards/help/faq",
    target: "_blank",
    type: 'external'
  },
]

export const footerLinks = [
  {
    heading: "Master Brews",
    links: [
      { label: "Project Roadmap", link: "/roadmap", type: 'internal' },
      { label: "The Platform", link: "/brewhouse", type: 'internal' },
      { label: "Tokenomics", link: "/tokenomics", type: 'internal' },
    ],
  },
  {
    heading: "Artistic Brews",
    links: [
      { label: "Artists", link: "/artists", type: 'internal' },
      { label: "Brands", link: "/brands", type: 'internal' },
      { label: "Explorer", link: "/gallery", type: 'internal' },
    ],
  },
  {
    heading: "Official Brews",
    links: [
      { label: "Vision", link: "/vision", type: 'internal' },
      { label: "Blog", link: "https://blog.masterbrews.cards", type: 'external' },
      { label: "Partnerships", link: "/partnerships", type: 'internal' },
    ],
  },
]
