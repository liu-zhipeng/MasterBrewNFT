import artData from "./artData"

export function makeCopies(num, dt) {
  const arr = []
  for (let i = 0; i < num; i++) {
    if (typeof dt === "function") {
      arr.push({ id: i + 1, ...dt(i) })
    } else {
      arr.push({ id: i + 1, ...dt })
    }
  }
  return arr
}

export function getArtistImrUrl(artistData = {}, i = 1) {
  return `${artData.s3_url}${artistData.s3_folder}${i}.${artistData.img_ext}`
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}

export function ucFirst(name) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export function getCountryImgUrl(countryCode = "") {
  return `/flags/${countryCode.toLowerCase()}.png`
}

export function getArtistSpotlightImageUrl(artistData = {}) {
  return `${artData.s3_url}${artistData.s3_folder}spotlight.${artistData.img_ext}`
}

export function getArtistHeroImageUrl(artistData = {}) {
  return `${artData.s3_url}${artistData.s3_folder}hero.${artistData.img_ext}`
}

export function getArtistImgTitle(artistData = {}, i = 1) {
  return artistData.titles[0][i]
}

export function getAllPortfoliosOfArtist(artistData = {}) {
  const count = parseInt(artistData?.img_qty)
  if (count) {
    return [...Array(+artistData.img_qty)].map((_, idx) => ({
      ...artistData,
      label: getArtistImgTitle(artistData, idx + 1),
      portFolioImg: getArtistImrUrl(artistData, idx + 1),
    }))
  }
  return []
}
