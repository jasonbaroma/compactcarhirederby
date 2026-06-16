import { slugifyLocation } from "@/lib/utils"

export const mainLocationLink = {
  label: "Derby",
  href: "/",
}

const LOCATION_NAMES = [
  "Nottingham",
  "Loughborough",
  "Burton upon Trent",
  "Chesterfield",
  "Mansfield",
  "Leicester",
  "Long Eaton",
  "Ilkeston",
] as const

export const nearbyLocationLinks = LOCATION_NAMES.map((label, index) => ({
  index: index + 1,
  label,
  href: `/${slugifyLocation(label)}`,
}))

export function buildLocationLinks(currentLocationLabel?: string) {
  return [mainLocationLink, ...getNearbyLocationLinks(currentLocationLabel)]
}

export function getNearbyLocationLinks(currentLocationLabel?: string) {
  const currentSlug = currentLocationLabel
    ? slugifyLocation(currentLocationLabel)
    : ""

  return nearbyLocationLinks.filter(
    (location) => location.href !== `/${currentSlug}`,
  )
}

export const locationSlugEntries = LOCATION_NAMES.map((label, index) => ({
  index: index + 1,
  label,
  slug: slugifyLocation(label),
}))
