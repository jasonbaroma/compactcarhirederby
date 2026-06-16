export type Vehicle = {
  title: string
  body: string
  image: string
  alt: string
}

export type Faq = {
  question: string
  answer: string
}

export type WhyChooseItem = {
  title: string
  body: string
}

export type LocalRelevanceBlock = {
  title: string
  body: string
}

export type ServicePageContent = {
  metadata: {
    title: string
    description: string
  }
  currentLocationName?: string
  heroImage: string
  heroAlt: string
  heroTitle: string
  heroDescription: string
  heroSecondaryActionLabel?: string
  inventorySectionId?: string
  mainServiceKicker?: string
  mainServiceTitle: string
  mainServiceDescription: string
  mainVehicles: Vehicle[]
  mainVehicleAction: boolean
  whyChooseKicker?: string
  whyChooseTitle: string
  whyChooseDescription: string
  whyChooseItems: WhyChooseItem[]
  additionalServicesKicker?: string
  additionalServicesTitle?: string
  additionalServicesDescription?: string
  additionalVehicles?: Vehicle[]
  featureCtaTitle: string
  featureCtaDescription: string
  serviceAreasKicker?: string
  serviceAreasTitle?: string
  serviceAreasDescription?: string
  localRelevanceKicker?: string
  localRelevanceTitle: string
  localRelevanceDescription: string
  localRelevanceBlocks: LocalRelevanceBlock[]
  bottomCtaTitle: string
  bottomCtaDescription: string
  faqKicker?: string
  faqTitle?: string
  faqs: Faq[]
}

type VehicleText = {
  body: string
  alt: string
}

type WhyChooseText = {
  title: string
  body: string
}

type LocalBlockText = {
  title: string
  body: string
}

type FaqText = {
  question: string
  answer: string
}

type ContentTokenSet = {
  metadata: {
    title: string
    description: string
  }
  heroImage: string
  heroAlt: string
  heroTitle: string
  heroDescription: string
  heroSecondaryActionLabel: string
  mainServiceKicker: string
  mainServiceTitle: string
  mainServiceDescription: string
  mainVehicles: VehicleText[]
  whyChooseKicker: string
  whyChooseTitle: string
  whyChooseDescription: string
  whyChooseItems: WhyChooseText[]
  additionalServicesKicker?: string
  additionalServicesTitle?: string
  additionalServicesDescription?: string
  additionalVehicles?: VehicleText[]
  featureCtaTitle: string
  featureCtaDescription: string
  serviceAreasKicker: string
  serviceAreasTitle: string
  serviceAreasDescription: string
  localRelevanceKicker: string
  localRelevanceTitle: string
  localRelevanceDescription: string
  localRelevanceBlocks: LocalBlockText[]
  bottomCtaTitle: string
  bottomCtaDescription: string
  faqKicker: string
  faqTitle: string
  faqs: FaqText[]
}

export type ServiceSlug =
  | "compact-car"
  | "van-hire"
  | "truck-hire"
  | "minibus-hire"

function isTemplateToken(value: string) {
  return value.startsWith("{{") && value.endsWith("}}")
}

const compactCarMainImages = [
  "/compact-car/Fiat500.png",
  "/compact-car/Hyundai-i10Auto.png",
  "/compact-car/VWGolf.png",
  "/compact-car/FocusAuto.png",
] as const

const compactCarAdditionalImages = [
  "/compact-car/FocusEstate.png",
  "/compact-car/Mondeo.png",
  "/compact-car/MondeoAuto.png",
  "/compact-car/MondeoEstate.png",
  "/compact-car/RAV4Auto.png",
  "/compact-car/CClassAuto.png",
  "/compact-car/EClassAuto.png",
  "/compact-car/RangeRover.png",
] as const

const vanMainImages = [
  "/van/CaddyVan.png",
  "/van/FordTransitSWB.png",
  "/van/VWTransporterAutomatic.png",
  "/van/FordTransitMWB.png",
  "/van/FordTransitLWB.png",
  "/van/4MTRSprinter.png",
  "/van/FordLutonBoxTailLift.png",
  "/van/FordTransitDropsideVan.png",
  "/van/3.5TonneTipperTransit.png",
  "/van/RecoveryVanTruck.png",
  "/van/VWCampervan.png",
  "/van/12.5MCherryPicker3.5T.png",
] as const

const minibusMainImages = [
  "/minibus/VauxhallZafira5plus2.png",
  "/minibus/Galaxy7SeaterManual.png",
  "/minibus/Galaxy7SeaterAutomatic.png",
  "/minibus/9SeaterManual.png",
  "/minibus/9SeaterAutomatic.png",
  "/minibus/FordMinibus12Seater.png",
  "/minibus/FordMinibus15Seater.png",
  "/minibus/FordMinibusLITE 17Seater(no D1).png",
  "/minibus/FordMinibus17Seater.png",
] as const

const truckMainImages = [
  "/truck/FordLuton3.5TonTailBoxLiftTruck.png",
  "/truck/3.5TonneTipperTransitTruck.png",
  "/truck/3.5TonneRecoveryTruck.png",
  "/truck/7.5TonneBoxTruckWithTailLift.png",
  "/truck/7.5TonneCurtainSideTruck.png",
  "/truck/7.5TonneDropsideTruck.png",
  "/truck/7.5TonneTipperTruck.png",
  "/truck/7.5TonneSleeperTailLiftTruck.png",
  "/truck/18TonneBoxTruck.png",
  "/truck/18TonneCurtainsideTruck.png",
  "/truck/26TonneCurtainSideTruck.png",
  "/truck/44TonneSleeperTruck.png",
] as const

const compactCarMainNames = [
  "Fiat 500",
  "Hyundai i10 Auto",
  "VW Golf",
  "Focus Auto",
] as const

const compactCarAdditionalNames = [
  "Focus Estate",
  "Mondeo",
  "Mondeo Auto",
  "Mondeo Estate",
  "RAV4 Auto",
  "C Class Auto",
  "E Class Auto",
  "Range Rover",
] as const

const vanMainNames = [
  "Caddy Van",
  "Ford Transit SWB",
  "VW Transporter Automatic",
  "Ford Transit MWB",
  "Ford Transit LWB",
  "4 MTR Sprinter",
  "Ford Luton Box Tail Lift",
  "Ford Transit Dropside Van",
  "3.5 Tonne Tipper Transit",
  "Recovery Van",
  "VW Campervan",
  "12.5M Cherry Picker 3.5T",
] as const

const minibusMainNames = [
  "Vauxhall Zafira 5 + 2",
  "Galaxy 7 Seater Manual",
  "Galaxy 7 Seater Automatic",
  "9 Seater Manual",
  "9 Seater Automatic",
  "Ford Minibus 12 Seater",
  "Ford Minibus 15 Seater",
  "Ford Minibus LITE 17 Seater (no D1)",
  "Ford Minibus 17 Seater",
] as const

const truckMainNames = [
  "Ford Luton 3.5 ton Tail Box Lift Truck",
  "3.5 Tonne Tipper Transit Truck",
  "3.5 Tonne Recovery Truck",
  "7.5 Tonne Box Truck With Tail Lift",
  "7.5 Tonne Curtain Side Truck",
  "7.5 Tonne Dropside Truck",
  "7.5 Tonne Tipper Truck",
  "7.5 Tonne Sleeper Tail Lift Truck",
  "18 Tonne Box Truck",
  "18 Tonne Curtain Side Truck",
  "26 Tonne Curtain Side Truck",
  "44 Tonne Sleeper Truck",
] as const

export const siteConfig = {
  businessName: "Compact Car Hire Derby",
  companyTagline: "Practical self-drive hire across Derby and the wider Derbyshire and East Midlands road network",
  legalBusinessName: "Compact Car Hire Derby",
  locationName: "Derby",
  siteUrl: "https://compactcarhirederby.co.uk",
  phone: "0203 909 9745",
  displayPhone: "0203 909 9745",
  ui: {
    navLocationsLabel: "Locations",
    navServicesLabel: "Services",
    navCallToBookLabel: "Call to Book",
    navCallShortLabel: "Call",
    bookNowLabel: "Call to Book",
    footerCopyrightLabel: "© 2026 Compact Car Hire Derby. All rights reserved.",
  },
} as const

export function getMetadataBase() {
  const rawSiteUrl = siteConfig.siteUrl

  if (isTemplateToken(rawSiteUrl)) {
    return new URL("https://example.com")
  }

  return new URL(rawSiteUrl)
}

export function withCanonicalPath(
  metadata: ServicePageContent["metadata"],
  canonicalPath: string,
) {
  return {
    ...metadata,
    alternates: {
      canonical: canonicalPath,
    },
  }
}

export const serviceNavigation: Array<{
  label: string
  route: string
}> = [
  { label: "Compact Car Hire", route: "/" },
  { label: "Van Hire", route: "/van-hire" },
  { label: "Minibus Hire", route: "/minibus-hire" },
  { label: "Truck Hire", route: "/truck-hire" },
]

function createVehicles(
  names: readonly string[],
  images: readonly string[],
  vehicleText: VehicleText[],
): Vehicle[] {
  return names.map((name, index) => ({
    title: name,
    body: vehicleText[index].body,
    image: images[index],
    alt: vehicleText[index].alt,
  }))
}

function createContentSet(args: {
  tokens: ContentTokenSet
  mainVehicleNames: readonly string[]
  mainVehicleImages: readonly string[]
  inventorySectionId: string
  currentLocationName?: string
  mainVehicleAction?: boolean
  additionalVehicleNames?: readonly string[]
  additionalVehicleImages?: readonly string[]
}): ServicePageContent {
  const {
    tokens,
    mainVehicleNames,
    mainVehicleImages,
    inventorySectionId,
    currentLocationName,
    mainVehicleAction = false,
    additionalVehicleNames,
    additionalVehicleImages,
  } = args

  return {
    metadata: {
      title: tokens.metadata.title,
      description: tokens.metadata.description,
    },
    currentLocationName,
    heroImage: tokens.heroImage,
    heroAlt: tokens.heroAlt,
    heroTitle: tokens.heroTitle,
    heroDescription: tokens.heroDescription,
    heroSecondaryActionLabel: tokens.heroSecondaryActionLabel,
    inventorySectionId,
    mainServiceKicker: tokens.mainServiceKicker,
    mainServiceTitle: tokens.mainServiceTitle,
    mainServiceDescription: tokens.mainServiceDescription,
    mainVehicles: createVehicles(
      mainVehicleNames,
      mainVehicleImages,
      tokens.mainVehicles,
    ),
    mainVehicleAction,
    whyChooseKicker: tokens.whyChooseKicker,
    whyChooseTitle: tokens.whyChooseTitle,
    whyChooseDescription: tokens.whyChooseDescription,
    whyChooseItems: tokens.whyChooseItems,
    additionalServicesKicker: tokens.additionalServicesKicker,
    additionalServicesTitle: tokens.additionalServicesTitle,
    additionalServicesDescription: tokens.additionalServicesDescription,
    additionalVehicles:
      additionalVehicleNames &&
      additionalVehicleImages &&
      tokens.additionalVehicles
        ? createVehicles(
            additionalVehicleNames,
            additionalVehicleImages,
            tokens.additionalVehicles,
          )
        : undefined,
    featureCtaTitle: tokens.featureCtaTitle,
    featureCtaDescription: tokens.featureCtaDescription,
    serviceAreasKicker: tokens.serviceAreasKicker,
    serviceAreasTitle: tokens.serviceAreasTitle,
    serviceAreasDescription: tokens.serviceAreasDescription,
    localRelevanceKicker: tokens.localRelevanceKicker,
    localRelevanceTitle: tokens.localRelevanceTitle,
    localRelevanceDescription: tokens.localRelevanceDescription,
    localRelevanceBlocks: tokens.localRelevanceBlocks,
    bottomCtaTitle: tokens.bottomCtaTitle,
    bottomCtaDescription: tokens.bottomCtaDescription,
    faqKicker: tokens.faqKicker,
    faqTitle: tokens.faqTitle,
    faqs: tokens.faqs,
  }
}

function createCompactMainVehicleTexts(location: string): VehicleText[] {
  return [
    {
      body: `The Fiat 500 is ideal for short ${location} trips where easy parking, simple handling and a small footprint matter most.`,
      alt: `Fiat 500 compact hire car for easy local driving in ${location}`,
    },
    {
      body: `The Hyundai i10 Auto suits drivers who want relaxed automatic driving for errands, station collections and everyday travel around ${location}.`,
      alt: `Hyundai i10 automatic compact hire car in ${location}`,
    },
    {
      body: `The VW Golf adds extra comfort and luggage space while keeping the practical feel that works well for mixed local and regional mileage from ${location}.`,
      alt: `Volkswagen Golf hatchback available for hire in ${location}`,
    },
    {
      body: `The Focus Auto is a useful all-rounder when your ${location} journey mixes town driving with longer runs on faster roads.`,
      alt: `Ford Focus automatic available for self-drive hire in ${location}`,
    },
  ]
}

function createCompactAdditionalVehicleTexts(location: string): VehicleText[] {
  return [
    {
      body: `The Focus Estate gives ${location} drivers extra boot space without stepping too far away from the feel of a normal everyday car.`,
      alt: `Ford Focus Estate available for practical luggage space in ${location}`,
    },
    {
      body: `The Mondeo is a sensible step up when comfort matters more, especially for longer journeys starting or ending in ${location}.`,
      alt: `Ford Mondeo saloon for longer road journeys from ${location}`,
    },
    {
      body: `The Mondeo Auto suits ${location} customers who want easier traffic driving while keeping the cabin comfort of a larger saloon.`,
      alt: `Ford Mondeo automatic for comfortable self-drive hire in ${location}`,
    },
    {
      body: `The Mondeo Estate works well when ${location} travel needs more luggage room for family visits, airport runs or longer stays away.`,
      alt: `Ford Mondeo Estate with extended luggage room for ${location} hires`,
    },
    {
      body: `The RAV4 Auto is a practical SUV option for ${location} journeys that need extra cabin flexibility and a higher driving position.`,
      alt: `Toyota RAV4 automatic SUV for flexible travel around ${location}`,
    },
    {
      body: `The C Class Auto gives ${location} customers a more refined option for business travel, client meetings and longer personal trips.`,
      alt: `Mercedes C Class automatic for executive car hire in ${location}`,
    },
    {
      body: `The E Class Auto is well suited to longer mileage from ${location} where extra cabin space and motorway comfort make a difference.`,
      alt: `Mercedes E Class automatic executive vehicle hire in ${location}`,
    },
    {
      body: `The Range Rover is there when a ${location} booking needs premium comfort, stronger road presence and more flexible luggage space.`,
      alt: `Range Rover SUV hire for premium travel in ${location}`,
    },
  ]
}

function createNearbyWhyChooseItems(location: string): WhyChooseText[] {
  return [
    {
      title: "Useful compact fleet",
      body: `Our compact line-up suits ${location} travel that calls for easy parking, light everyday driving and sensible motorway comfort.`,
    },
    {
      title: "Manual and automatic options",
      body: `Whether you want a simple city car or an automatic hatchback for ${location} traffic, we keep the choice practical.`,
    },
    {
      title: "Straightforward booking support",
      body: `We focus on helping ${location} customers choose a vehicle that fits the actual trip rather than overcomplicating the booking.`,
    },
    {
      title: "Good fit for mixed routes",
      body: `A compact car is often the most practical option when ${location} driving mixes residential roads, station access and quicker regional links.`,
    },
    {
      title: "Wider fleet available",
      body: `If your ${location} journey needs more than a compact car, we can also help with larger cars, vans, minibuses and trucks.`,
    },
    {
      title: "Built around real local use",
      body: `Our service is shaped around the kind of everyday driving ${location} customers actually need to do.`,
    },
  ]
}

type NearbyLocationProfile = {
  location: string
  heroImage: string
  heroAlt: string
  metadataDescription: string
  heroDescription: string
  serviceDescription: string
  whyChooseDescription: string
  serviceAreasDescription: string
  localRelevanceDescription: string
  localBlocks: LocalBlockText[]
  faqs: FaqText[]
}

function createNearbyLocationTokens(profile: NearbyLocationProfile): ContentTokenSet {
  return {
    metadata: {
      title: `Compact Car Hire ${profile.location} | Self-Drive Small Cars`,
      description: profile.metadataDescription,
    },
    heroImage: profile.heroImage,
    heroAlt: profile.heroAlt,
    heroTitle: `Compact Car Hire in ${profile.location}`,
    heroDescription: profile.heroDescription,
    heroSecondaryActionLabel: "View vehicle options",
    mainServiceKicker: `${profile.location} compact car hire`,
    mainServiceTitle: `Easy self-drive compact car hire in ${profile.location}`,
    mainServiceDescription: profile.serviceDescription,
    mainVehicles: createCompactMainVehicleTexts(profile.location),
    whyChooseKicker: "Why choose us",
    whyChooseTitle: `Why compact car hire works well for ${profile.location} drivers`,
    whyChooseDescription: profile.whyChooseDescription,
    whyChooseItems: createNearbyWhyChooseItems(profile.location),
    additionalServicesKicker: "More vehicle options",
    additionalServicesTitle: `Need more than a compact car in ${profile.location}?`,
    additionalServicesDescription: `Alongside compact car hire in ${profile.location}, we can also help with estates, larger saloons, SUVs and the wider fleet of vans, minibuses and trucks when the journey needs more room.`,
    additionalVehicles: createCompactAdditionalVehicleTexts(profile.location),
    featureCtaTitle: `Check compact car availability in ${profile.location}`,
    featureCtaDescription: `Tell us what sort of ${profile.location} driving you have planned and we will help you line up a practical compact car quickly.`,
    serviceAreasKicker: "Areas we cover",
    serviceAreasTitle: `Vehicle hire for ${profile.location} and nearby routes`,
    serviceAreasDescription: profile.serviceAreasDescription,
    localRelevanceKicker: "Local driving guide",
    localRelevanceTitle: `Why compact car hire makes sense in ${profile.location}`,
    localRelevanceDescription: profile.localRelevanceDescription,
    localRelevanceBlocks: profile.localBlocks,
    bottomCtaTitle: `Book compact car hire in ${profile.location}`,
    bottomCtaDescription: `If you need a small self-drive car in ${profile.location} for local travel, work appointments or a wider regional journey, get in touch and we will help you choose the right vehicle.`,
    faqKicker: `${profile.location} hire FAQs`,
    faqTitle: `Common questions about compact car hire in ${profile.location}`,
    faqs: profile.faqs,
  }
}

            const homepageTokens: ContentTokenSet = {
      metadata: {
        title: "Compact Car Hire Derby | Self-Drive Vehicle Hire",
        description: "Compact car hire in Derby for city driving, station access and East Midlands travel, with vans, minibuses and trucks also available when extra room is needed.",
      },
      heroImage: "/images/compactcarhirederby-co-uk-homepage-compact-car-fleet.png",
      heroAlt: "Compact hire cars set up for everyday driving in Derby",
      heroTitle: "Compact car hire in Derby made easy to live with",
      heroDescription: "Compact car hire in Derby for city journeys, business mileage, station pickups and wider East Midlands trips using the A52, A38, A6 and A50 links, with larger vehicles available when plans expand.",
      heroSecondaryActionLabel: "View vehicle options",
      mainServiceKicker: "Compact car hire",
      mainServiceTitle: "Self-drive compact cars for practical Derby journeys",
      mainServiceDescription: `Our Derby compact car hire service is shaped around the way people actually move through the city and out onto wider East Midlands roads. Some bookings stay close to central Derby, Pride Park, station access or ordinary residential driving, where a smaller hatchback makes parking and repeated stops much easier. Others widen into appointments, family visits or business mileage using the A52, A38, A6 or A50, where the car still needs to feel settled enough for a longer road section.

That balance is why compact car hire works so well in Derby. A practical hatchback keeps local driving straightforward without feeling too slight once the route opens out. It is a useful fit for replacement transport, day-to-day business use, city errands, train-station runs and mixed trips across Derbyshire and the wider East Midlands. If the booking later needs more space, the wider self-drive fleet also includes larger cars, vans, minibuses and trucks.`,
      mainVehicles: createCompactMainVehicleTexts("Derby"),
      whyChooseKicker: "Why choose us",
      whyChooseTitle: "A practical approach to self-drive hire in Derby",
      whyChooseDescription: "We keep compact car hire straightforward for Derby customers by focusing on usable vehicles, clear booking support and cars that work both in the city and on wider East Midlands mileage.",
      whyChooseItems: [
        { title: "Cars that suit mixed routes", body: "Our compact range is chosen around the sort of Derby journeys that blend city driving, station access and wider regional mileage." },
        { title: "Easy local usability", body: "Smaller hatchbacks stay simpler around parking, traffic and repeated stops than vehicles with more bulk than the journey really needs." },
        { title: "Good fit for wider mileage", body: "Derby bookings often spread onto the A52, A38, A6 and A50, so the compact range is chosen to remain comfortable beyond the shortest city run." },
        { title: "Straightforward booking help", body: "We focus on what the car needs to do in practice, not on overcomplicated booking language or unclear vehicle categories." },
        { title: "Wider fleet available", body: "If the plan grows beyond what a compact car should reasonably handle, we can also help with larger cars, vans, minibuses and trucks." },
        { title: "Useful for ordinary life", body: "Replacement transport, appointments, station pickups, work visits and family mileage are all common Derby uses for compact hire." },
      ],
      additionalServicesKicker: "Wider fleet options",
      additionalServicesTitle: "More vehicle choice when your Derby booking needs extra room",
      additionalServicesDescription: "If a compact hatchback is not the right fit, we can also help with larger cars, estates, SUVs and executive automatics. The wider self-drive fleet also includes vans, minibuses and trucks for bigger transport jobs.",
      additionalVehicles: createCompactAdditionalVehicleTexts("Derby"),
      featureCtaTitle: "Looking for the right vehicle in Derby?",
      featureCtaDescription: "Tell us what kind of driving you have planned and we will help you choose a compact car or a larger vehicle that makes practical sense.",
      serviceAreasKicker: "Areas we cover",
      serviceAreasTitle: "Vehicle hire across Derby and surrounding routes",
      serviceAreasDescription: "We support customers in Derby and across nearby Derbyshire, Nottinghamshire and Leicestershire routes, with compact car hire backed by the wider self-drive fleet when extra space is needed.",
      localRelevanceKicker: "Driving in Derby",
      localRelevanceTitle: "Why compact car hire works well in Derby",
      localRelevanceDescription: `Derby is a strong city for compact car hire because so many journeys combine urban driving with quick access to larger roads. A booking might start with city-centre movement, station access or visits near Pride Park, then widen onto the A52, A38, A6 or A50 later the same day. A smaller hatchback keeps the city part easier to manage without feeling out of place once the route grows.

That matters for customers who need a car for more than one kind of job in the same booking. Compact cars suit business appointments, local errands, replacement transport and family visits because they are easier to place in ordinary parking while still remaining comfortable enough for broader Derbyshire and East Midlands mileage.`,
      localRelevanceBlocks: [
        {
          title: "A sensible fit for Derby city driving",
          body: `Compact cars make sense in Derby because many bookings involve ordinary city movement, regular parking decisions and short repeated stops rather than one uninterrupted motorway drive.

That local usability is one of the clearest benefits of a smaller hatchback. It feels easier to place, easier to park and easier to live with through the day.`,
        },
        {
          title: "Still useful once the route widens",
          body: `Derby trips often move quickly from city roads onto larger links such as the A52, A38, A6 and A50. Compact cars are useful here because they still remain comfortable enough for that wider mileage without carrying unnecessary bulk.

For many customers, that middle ground is exactly what they want: simple locally, but not underdone once the booking stretches further out.`,
        },
        {
          title: "Good for station access and everyday bookings",
          body: `Derby station runs, business visits, family travel and temporary replacement transport all reward a car that feels manageable from the first mile. Compact cars cover those ordinary needs well.

If the plan later needs more carrying room or more passengers, the wider fleet is there as the next step rather than forcing a separate booking elsewhere.`,
        },
      ],
      bottomCtaTitle: "Book compact car hire in Derby with practical support",
      bottomCtaDescription: "If you need a compact car in Derby for city driving, station access or wider regional mileage, get in touch and we will help you line up a suitable vehicle.",
      faqKicker: "Common questions",
      faqTitle: "Compact car hire FAQs for Derby",
      faqs: [
        { question: "Why choose compact car hire in Derby?", answer: "Compact cars make sense in Derby because they are easier for city driving and parking while still being comfortable enough for wider East Midlands routes." },
        { question: "Can I arrange compact car hire in Derby at short notice?", answer: "Yes, subject to availability. If you need a compact car quickly in Derby, call us and we will talk through what is ready for the timing you need." },
        { question: "Do you only offer small cars in Derby?", answer: "No. Compact cars are the focus on this page, but we also provide larger cars, estates, SUVs, vans, minibuses and trucks when the booking needs more space." },
        { question: "What are compact hire cars in Derby commonly used for?", answer: "Common uses include city travel, station runs, business visits, family mileage, replacement transport and mixed local-regional journeys." },
        { question: "Are automatic compact cars available in Derby?", answer: "Yes, subject to availability. If you prefer an automatic for Derby traffic or wider East Midlands travel, ask when you book." },
        { question: "What should I tell you when booking in Derby?", answer: "The most useful details are the dates, expected route, whether you want manual or automatic driving, and whether there is any chance you will need more room than a compact hatchback offers." },
      ],
    }

    const vanHireTokens: ContentTokenSet = {
      metadata: {
        title: "Van Hire Derby | Practical Vans for Moves, Deliveries and Trade",
        description: "Van hire in Derby for house moves, deliveries, trade jobs and specialist transport, with compact vans, Transits, Lutons and more available.",
      },
      heroImage: "/images/compactcarhirederby-co-uk-van-hire-main-fleet.png",
      heroAlt: "Modern self-drive rental van ready for loading in Derby",
      heroTitle: "Van hire in Derby for moves, work and collections",
      heroDescription: "Practical van hire in Derby for home moves, trade jobs, stock collections, deliveries and specialist transport when a standard car is not enough.",
      heroSecondaryActionLabel: "View van options",
      mainServiceKicker: "Derby van fleet",
      mainServiceTitle: "Van hire for practical transport across Derby and beyond",
      mainServiceDescription: `Our Derby van hire service is built for customers who need a vehicle that suits the real job in front of them. Some bookings stay local and involve furniture collections, stock runs or straightforward house-move loads, while others widen into site work, trade mileage or regional deliveries using the A52, A38, A50 and M1-connected network. That means the right answer is not one generic van size. It helps to have a proper spread, from compact enclosed load space to larger working vans and tail-lift options.

Derby also works well as a base for mixed local and regional van use. A job may begin with a city collection, continue to a residential address and then widen into a run towards Nottingham, Leicester, Burton or further across the Midlands. Keeping the fleet practical lets us support that variety without forcing customers into more vehicle than the load actually needs.`,
      mainVehicles: [
        { body: "A compact option for smaller Derby jobs where you need enclosed load space without driving something oversized.", alt: "Caddy van for compact load carrying in Derby" },
        { body: "Useful for everyday trade work, deliveries and light moving jobs around Derby and nearby routes.", alt: "Ford Transit SWB van for local Derby hire" },
        { body: "A practical automatic van for Derby customers who want easier driving in city traffic and on longer road sections.", alt: "VW Transporter automatic van hire in Derby" },
        { body: "A solid fit for medium loads, site equipment and move-related jobs across Derby.", alt: "Ford Transit MWB van ready for practical Derby jobs" },
        { body: "A strong choice for longer items, fuller loads and larger one-vehicle jobs starting in Derby.", alt: "Ford Transit LWB van for larger Derby loads" },
        { body: "Useful when extra cargo length matters more than keeping the van compact, especially for commercial or event loads.", alt: "4 metre Sprinter van available for Derby hire" },
        { body: "Ideal when the Derby booking involves bulky furniture, appliances or stacked loads that need tail-lift help.", alt: "Luton box van with tail lift for moves in Derby" },
        { body: "A practical pick for open-load work, site materials and jobs where quick side access matters.", alt: "Dropside transit van for trade and site use in Derby" },
        { body: "Useful for rubble, green waste and site clearances where tipping capability saves time on the job.", alt: "3.5 tonne tipper van hire in Derby" },
        { body: "A specialist option for vehicle recovery and transport jobs that need the right platform rather than an ordinary van.", alt: "Recovery vehicle available from the Derby fleet" },
        { body: "Suitable for customers who need a flexible transport option with camper layout practicality for longer personal travel.", alt: "VW campervan available for Derby self-drive hire" },
        { body: "A specialist access vehicle for external maintenance, facilities work and higher-reach jobs around Derby.", alt: "12.5 metre cherry picker vehicle hire in Derby" },
      ],
      whyChooseKicker: "Why choose us",
      whyChooseTitle: "A practical van-hire range for Derby jobs",
      whyChooseDescription: "We focus on vans that make sense for the work in front of you, whether that means a compact load carrier, a Luton for moving day or a specialist vehicle for a more specific job.",
      whyChooseItems: [
        { title: "Useful size spread", body: "The fleet covers everything from compact vans to larger load-space options, helping Derby customers avoid booking more vehicle than they need." },
        { title: "Good fit for mixed work", body: "Trade runs, house moves, site jobs, collections and regional deliveries all place different demands on a van, and the range is set up around that." },
        { title: "Straightforward support", body: "We keep the conversation focused on the load, route and job type so the vehicle choice stays practical." },
        { title: "Specialist options available", body: "When a booking needs tail-lift support, open-load access, tipping or recovery capability, the wider fleet can cover that too." },
        { title: "Useful beyond Derby", body: "The van fleet works well for local jobs and for wider Midlands mileage starting from Derby." },
        { title: "Flexible self-drive choice", body: "Customers can move from a simple working van to something more specialist without having to switch providers." },
      ],
      featureCtaTitle: "Need the right van in Derby?",
      featureCtaDescription: "Tell us the job, load type and route, and we will help you choose a van that actually suits the work.",
      serviceAreasKicker: "Where van hire helps",
      serviceAreasTitle: "Van hire across Derby and surrounding routes",
      serviceAreasDescription: "We support van hire in Derby for home moves, site work, stock collections and regional transport across Derbyshire and the wider Midlands.",
      localRelevanceKicker: "Van-hire guide",
      localRelevanceTitle: "Why van hire is useful in Derby",
      localRelevanceDescription: `Van hire works well in Derby because local jobs are often mixed and practical. One booking may involve furniture collections, another trade materials, another a day of stock runs or equipment movement. It is common for that same booking to widen from city roads onto the A52, A38 or A50 later in the day, so the van still needs to remain comfortable and useful beyond the shortest urban section.

That is why a practical size range matters. Derby customers do not all need the same van, and the right fit can save both wasted space and wasted time. A compact van may be perfect for city-centre collections, while a Luton or larger Transit becomes the sensible option once the job grows.`,
      localRelevanceBlocks: [
        {
          title: "Useful around city driving and local loading",
          body: `Derby van bookings often start with local collections, residential access or short commercial runs, where it helps if the vehicle still feels manageable in ordinary traffic and parking conditions.

That is one reason smaller and mid-sized vans remain such useful options. They cover a wide range of practical jobs without turning simple local access into extra hassle.`,
        },
        {
          title: "Still practical on wider Midlands mileage",
          body: `A lot of Derby van jobs quickly widen beyond the city. Routes towards Nottingham, Leicester, Burton or the motorway network need a van that remains useful once the job moves out onto faster or longer roads.

Choosing the right load space and shape at the start makes that wider run simpler, especially when the day includes more than one drop or collection.`,
        },
        {
          title: "Easy to step up for larger loads",
          body: `Some Derby bookings start with a simple carrying job and then turn into something bulkier. That is why it helps to have access to Lutons, dropsides, tippers and other specialist options from the same fleet.

You can begin with the practical van for the job and still scale up cleanly if the load or route changes.`,
        },
      ],
      bottomCtaTitle: "Book van hire in Derby with the right load-space support",
      bottomCtaDescription: "If you need a van in Derby for moving, trade work, deliveries or specialist transport, get in touch and we will help you line up a practical option.",
      faqKicker: "Common questions",
      faqTitle: "Van hire FAQs for Derby",
      faqs: [
        { question: "What sort of van hire do you offer in Derby?", answer: "We offer compact vans, short- and long-wheelbase Transits, Lutons, dropsides, tippers and specialist options for a wide spread of Derby jobs." },
        { question: "Can I hire a van in Derby for moving house?", answer: "Yes. Derby van hire is often used for local and regional house moves, especially when customers need enclosed load space or tail-lift support." },
        { question: "Do you provide vans for trade and business use in Derby?", answer: "Yes. Trade work, equipment transport, stock movement and commercial collections are all common Derby van-hire uses." },
        { question: "Is Derby van hire useful for longer regional routes too?", answer: "Yes. Many Derby bookings extend onto larger roads across the Midlands, so the van fleet is chosen to stay practical beyond the shortest local run." },
        { question: "Can I ask for help choosing the right van size?", answer: "Yes. Tell us what you are carrying, where it is going and any access issues, and we will help you choose the right type of van." },
        { question: "Do you only offer standard vans in Derby?", answer: "No. Alongside standard enclosed vans, the wider fleet also includes Lutons, dropsides, tippers, recovery vehicles, campervans and cherry pickers." },
      ],
    }

    const minibusHireTokens: ContentTokenSet = {
      metadata: {
        title: "Minibus Hire Derby | Self-Drive Minibuses for Group Travel",
        description: "Minibus hire in Derby for family groups, events, airport runs and organised travel, with flexible seat layouts and practical self-drive options.",
      },
      heroImage: "/images/compactcarhirederby-co-uk-minibus-hire-main-fleet.png",
      heroAlt: "Self-drive minibus available for group travel in Derby",
      heroTitle: "Minibus hire in Derby for practical group journeys",
      heroDescription: "Self-drive minibus hire in Derby for airport runs, event transport, family travel, business groups and organised trips when one car is not enough.",
      heroSecondaryActionLabel: "View minibus options",
      mainServiceKicker: "Derby minibus fleet",
      mainServiceTitle: "Minibus hire for group travel across Derby and the wider Midlands",
      mainServiceDescription: `Our Derby minibus hire service is designed for the sort of journeys that are awkward in multiple cars but do not call for a coach. Family groups, event travel, airport runs, team transport and organised day trips all become easier when everyone can stay in one vehicle. Derby works particularly well for that kind of booking because local pick-ups can quickly widen into A52, A38 and A50 mileage towards the rest of the Midlands.

That means the right minibus is not only about seat count. It also needs to stay practical for luggage, comfort and the kind of route the group is actually covering. Keeping the fleet focused on usable self-drive options makes it easier to line up a vehicle that works for the people, bags and distance involved.`,
      mainVehicles: [
        { body: "A practical smaller-group option when you need more flexibility than a standard car but not a full-size minibus.", alt: "5 plus 2 seat people carrier for Derby group travel" },
        { body: "A useful minibus for family groups, sports travel and event trips starting in Derby.", alt: "9 seat minibus ready for Derby hire" },
        { body: "An efficient option for group transport where luggage and passenger comfort both matter.", alt: "Ford Tourneo minibus available in Derby" },
        { body: "A larger-capacity option for organised travel, airport journeys and wider Derbyshire group mileage.", alt: "14 seat minibus for self-drive hire in Derby" },
        { body: "Suitable for larger group bookings where keeping everyone together is more practical than using several cars.", alt: "17 seat minibus ready for Derby group trips" },
        { body: "Useful for extra luggage flexibility on larger trips or where the route involves a full passenger load.", alt: "Minibus with wider luggage capacity for Derby travel" },
        { body: "A practical choice for longer group journeys that need a comfortable self-drive setup from Derby.", alt: "Modern self-drive minibus for longer journeys from Derby" },
        { body: "Helpful for event transport, airport runs and coordinated day travel where one vehicle keeps the plan simple.", alt: "Derby minibus prepared for event and airport transport" },
        { body: "A flexible option for community, club and family bookings that need practical shared transport.", alt: "Shared group minibus available from the Derby fleet" },
      ],
      whyChooseKicker: "Why choose us",
      whyChooseTitle: "A practical self-drive minibus option for Derby groups",
      whyChooseDescription: "We focus on minibuses that make shared travel easier, with practical seating layouts and useful support for the sort of routes groups actually cover from Derby.",
      whyChooseItems: [
        { title: "Useful for shared travel", body: "Minibus hire keeps families, work groups and event travellers together instead of splitting plans across several smaller vehicles." },
        { title: "Good fit for airport and event runs", body: "Derby bookings often involve group travel to airports, celebrations, venues and sports fixtures, where one self-drive minibus is easier to manage." },
        { title: "Practical seating choices", body: "The fleet is designed to cover smaller and larger groups without forcing more capacity than the booking needs." },
        { title: "Wider-road ready", body: "A lot of Derby group travel widens quickly beyond local roads, so the minibuses are chosen to remain practical on longer Midlands mileage too." },
        { title: "Straightforward booking support", body: "We keep the conversation focused on passengers, luggage and the route rather than on vague vehicle descriptions." },
        { title: "Part of a wider self-drive fleet", body: "If the group plan changes or extra transport is needed, the wider fleet of cars, vans and larger vehicles is available too." },
      ],
      featureCtaTitle: "Need the right minibus in Derby?",
      featureCtaDescription: "Tell us how many people are travelling, the luggage involved and the route you are covering, and we will help you choose a practical self-drive minibus.",
      serviceAreasKicker: "Where minibus hire helps",
      serviceAreasTitle: "Minibus hire across Derby and nearby routes",
      serviceAreasDescription: "We support minibus hire in Derby for airport travel, events, family transport, sports groups and wider Midlands journeys.",
      localRelevanceKicker: "Minibus-hire guide",
      localRelevanceTitle: "Why minibus hire is useful in Derby",
      localRelevanceDescription: `Minibus hire works well in Derby because group travel often starts with several pick-ups and then widens quickly into longer mileage. A family trip, airport transfer, sports fixture or event journey can become awkward when split across several cars, especially once luggage and timing start to matter. One minibus keeps the route simpler and the group together.

Derby also sits well for travel in several directions across the Midlands, so a self-drive minibus can be useful for both local organisation and wider road mileage. The key is matching the seating and luggage space to the trip rather than simply booking the biggest option available.`,
      localRelevanceBlocks: [
        {
          title: "Better than splitting into several cars",
          body: `A lot of Derby group bookings are easier when everyone travels together. One vehicle simplifies pick-up points, arrival timing and luggage planning in a way that several separate cars often do not.

That is especially helpful for event travel, family trips and organised outings where keeping the group coordinated matters.`,
        },
        {
          title: "Useful on wider Midlands routes",
          body: `Many Derby minibus journeys do not stay local. Airport runs, fixtures, celebrations and organised day trips often widen quickly onto larger roads across the region.

That is why the minibus choice needs to stay practical for distance as well as passenger count.`,
        },
        {
          title: "A more flexible group-travel option",
          body: `Self-drive minibus hire gives Derby customers a practical middle ground between several cars and a larger organised coach setup.

It keeps the trip flexible while still making shared travel easier to manage from the start.`,
        },
      ],
      bottomCtaTitle: "Book minibus hire in Derby with practical group-travel support",
      bottomCtaDescription: "If you need a minibus in Derby for an airport run, event, family trip or organised group journey, get in touch and we will help you line up the right option.",
      faqKicker: "Common questions",
      faqTitle: "Minibus hire FAQs for Derby",
      faqs: [
        { question: "What sort of minibus hire do you offer in Derby?", answer: "We offer self-drive minibuses for smaller and larger groups, covering family travel, airport runs, event trips, sports bookings and organised journeys." },
        { question: "Is Derby minibus hire useful for airport travel?", answer: "Yes. Minibus hire is a practical option for airport runs because it keeps passengers and luggage together in one vehicle." },
        { question: "Can I hire a minibus in Derby for family and event travel?", answer: "Yes. Family groups, weddings, celebrations and organised outings are all common Derby minibus-hire uses." },
        { question: "Do Derby minibuses only suit local journeys?", answer: "No. Many Derby minibus bookings widen into longer Midlands routes, so the fleet is chosen with that broader mileage in mind." },
        { question: "Can you help me choose the right size minibus?", answer: "Yes. Tell us how many passengers are travelling, what luggage is involved and the route you are taking, and we will help you choose a suitable option." },
        { question: "What if we need different vehicle types for the same trip?", answer: "We can also help with cars, vans and other self-drive options if the group plan needs a wider mix of vehicles." },
      ],
    }

    const truckHireTokens: ContentTokenSet = {
      metadata: {
        title: "Truck Hire Derby | Self-Drive Trucks for Heavy Loads and Commercial Use",
        description: "Truck hire in Derby for heavier transport, site work, removals and commercial jobs, with practical self-drive truck options available.",
      },
      heroImage: "/images/compactcarhirederby-co-uk-truck-hire-main-fleet.png",
      heroAlt: "Self-drive truck available for heavier transport in Derby",
      heroTitle: "Truck hire in Derby for heavier work and bigger loads",
      heroDescription: "Self-drive truck hire in Derby for removals, commercial carrying, site deliveries and specialist transport when a van is not enough.",
      heroSecondaryActionLabel: "View truck options",
      mainServiceKicker: "Derby truck fleet",
      mainServiceTitle: "Truck hire for practical heavy-load jobs across Derby",
      mainServiceDescription: `Our Derby truck hire service is built around jobs that go beyond ordinary van carrying. Some bookings involve removals, heavier stock movement or site materials, while others need a more specialist vehicle for commercial transport that starts in Derby and then spreads onto larger roads across the Midlands. What matters is having the right type of truck for the actual load and route rather than forcing a heavy job into a vehicle that is too limited.

Derby is a practical base for that kind of work because local commercial access quickly links into the A52, A38 and A50 corridors. A self-drive truck can therefore be useful both for city-linked loading and for broader regional movement. The right vehicle makes a clear difference to how efficiently the day runs, especially once heavier items, bulkier loads or repeated drops are involved.`,
      mainVehicles: [
        { body: "Useful for larger removals and commercial carrying where a van is too limited for the size of the load.", alt: "Luton tail-lift truck for practical Derby removals and transport" },
        { body: "A practical option for open-load carrying, equipment movement and jobs where easier side access helps.", alt: "Dropside truck ready for Derby commercial use" },
        { body: "Helpful for site materials, waste movement and heavier work that benefits from tipping capability.", alt: "Tipper truck available for heavier Derby jobs" },
        { body: "A specialist option for plant, machinery or vehicle movement when the job needs a more specific transport setup.", alt: "Recovery-style truck available from the Derby fleet" },
        { body: "Useful for larger commercial carrying and wider regional movement where a more substantial vehicle is the sensible choice.", alt: "Self-drive truck prepared for wider Derbyshire and Midlands mileage" },
        { body: "A practical option for heavier one-vehicle transport when the booking needs more carrying capability than a standard van offers.", alt: "Commercial truck hire option for Derby transport work" },
        { body: "Suitable for repeat drop work and planned commercial transport where load handling needs to stay efficient.", alt: "Derby truck available for structured commercial routes" },
        { body: "Helpful for move-related jobs where bulky items and load weight call for a more substantial vehicle format.", alt: "Heavier-duty self-drive vehicle for Derby move and load work" },
        { body: "A specialist support option for customers whose load shape or site access makes a standard enclosed van the wrong fit.", alt: "Practical heavy-load transport option available in Derby" },
        { body: "Useful when the route, load and job type all point clearly to a truck rather than a smaller self-drive vehicle.", alt: "Truck fleet option prepared for larger Derby transport demands" },
        { body: "A practical choice for heavier carrying where planning the right vehicle at the start helps keep the day efficient.", alt: "Self-drive truck option for heavier Derbyshire transport work" },
        { body: "Suitable for customers who need straightforward access to heavier-load transport without stepping into a managed haulage arrangement.", alt: "Derby truck ready for practical self-drive use" },
      ],
      whyChooseKicker: "Why choose us",
      whyChooseTitle: "A practical self-drive truck option for Derby jobs",
      whyChooseDescription: "We keep Derby truck hire focused on real carrying requirements, with useful vehicle options for heavier work, site transport and larger move-related jobs.",
      whyChooseItems: [
        { title: "Useful for heavier loads", body: "Truck hire is there for Derby jobs that clearly need more carrying capability than a van should reasonably handle." },
        { title: "Good fit for commercial work", body: "Site support, stock movement, heavier removals and specialist carrying are all common Derby truck-hire uses." },
        { title: "Wider-road practical", body: "Many Derby truck jobs widen quickly onto larger Midlands routes, so the fleet is selected around that kind of use." },
        { title: "Straightforward vehicle guidance", body: "We focus on the shape of the load, job type and route so the vehicle choice stays practical." },
        { title: "Part of a broader transport fleet", body: "If the job later turns out to suit a van, Luton, dropside or another vehicle type better, the wider self-drive fleet is there." },
        { title: "Flexible for one-off and repeat jobs", body: "Truck hire can work for both isolated bigger transport tasks and regular heavier-use requirements." },
      ],
      featureCtaTitle: "Need the right truck in Derby?",
      featureCtaDescription: "Tell us what needs to be moved, the route involved and any access considerations, and we will help you line up a practical truck option.",
      serviceAreasKicker: "Where truck hire helps",
      serviceAreasTitle: "Truck hire across Derby and surrounding routes",
      serviceAreasDescription: "We support truck hire in Derby for heavier transport, removals, commercial movement and site-related jobs across Derbyshire and the wider Midlands.",
      localRelevanceKicker: "Truck-hire guide",
      localRelevanceTitle: "Why truck hire is useful in Derby",
      localRelevanceDescription: `Truck hire is useful in Derby because some jobs quickly outgrow ordinary van carrying. Heavier move-related loads, larger commercial consignments, site materials or specialist bulky items all benefit from using the right type of vehicle from the start. That is often the difference between a job that runs smoothly and one that becomes awkward because the vehicle is working at the edge of what it should do.

Derby also provides strong access onto larger roads, so a truck booking can serve both local loading points and wider Midlands transport in the same day. A self-drive truck gives customers a practical route into heavier carrying without needing to step into a full haulage setup when the job can be handled directly.`,
      localRelevanceBlocks: [
        {
          title: "Useful when a van is not the right fit",
          body: `Some Derby transport jobs simply move beyond what a standard van should reasonably carry. That can be because of load size, load weight or the way the items need to be handled during the day.

Choosing a truck early helps keep the booking efficient instead of forcing the job into the wrong vehicle class.`,
        },
        {
          title: "Practical for city access and wider movement",
          body: `Derby truck bookings often blend local commercial access with wider road mileage across the Midlands. That makes a practical self-drive truck useful for both the loading point and the day’s broader route.

The key is matching the truck to the carrying job rather than choosing by size alone.`,
        },
        {
          title: "Helpful for site, removal and commercial tasks",
          body: `Truck hire in Derby is often tied to removals, site support, stock movement or heavier one-off transport needs. Those are all situations where the right vehicle can make loading and route planning much more straightforward.

Having access to different truck formats helps keep that choice practical rather than overly rigid.`,
        },
      ],
      bottomCtaTitle: "Book truck hire in Derby with practical heavy-load support",
      bottomCtaDescription: "If you need a truck in Derby for heavier carrying, removals, site work or commercial transport, get in touch and we will help you line up a suitable option.",
      faqKicker: "Common questions",
      faqTitle: "Truck hire FAQs for Derby",
      faqs: [
        { question: "What sort of truck hire do you offer in Derby?", answer: "We offer self-drive truck options for heavier transport, removals, site support and larger commercial carrying where a standard van is not the right fit." },
        { question: "When is truck hire in Derby better than van hire?", answer: "Truck hire is the better option when the load size, carrying demand or job type clearly goes beyond what a normal van should reasonably handle." },
        { question: "Can I use Derby truck hire for removals and commercial jobs?", answer: "Yes. Derby truck hire is commonly used for heavier removals, commercial transport, stock movement and site-related work." },
        { question: "Do Derby truck bookings only stay local?", answer: "No. Many Derby truck jobs extend onto larger roads across the Midlands, so the fleet is selected with wider mileage in mind as well." },
        { question: "Can you help me choose the right truck?", answer: "Yes. Tell us what is being moved, how it needs to be loaded and where it is going, and we will help you choose a practical option." },
        { question: "What if I actually need a different vehicle type?", answer: "If the job turns out to suit a van, Luton, dropside or another vehicle better, the wider self-drive fleet gives you that flexibility." },
      ],
    }

        const location1Tokens = createNearbyLocationTokens({
          location: "Nottingham",
          heroImage: "/images/compactcarhirederby-co-uk-nearby-location-fleet-a.png",
          heroAlt: "Compact hire car prepared for practical driving around Nottingham",
          metadataDescription: "Compact car hire in Nottingham for city driving, station access and practical East Midlands mileage.",
          heroDescription: "Compact car hire in Nottingham for everyday city routes, business visits and wider mileage where a smaller hatchback keeps things practical.",
          serviceDescription: `Compact car hire in Nottingham works well because many bookings combine city driving, regular parking and repeated local stops with wider East Midlands mileage later in the day. A smaller hatchback is easier to live with in that kind of local movement while still remaining comfortable enough for broader routes.

That practicality suits business travel, replacement transport, family visits and mixed-use journeys around Nottingham. You get a self-drive car that feels sensible in the city without becoming restrictive once the route opens out.`,
          whyChooseDescription: "We keep Nottingham compact car hire practical for city use while making sure the vehicle still works well once the booking widens onto larger roads.",
          serviceAreasDescription: "We support compact car hire in Nottingham and nearby East Midlands routes, including city driving, station travel and onward regional mileage.",
          localRelevanceDescription: `Nottingham is a strong fit for compact car hire because so many journeys combine local city movement with wider road travel later on. A smaller vehicle is useful for ordinary parking, busy local traffic and repeated short stops, while still remaining comfortable enough once the booking heads out beyond the city.

That balance matters on bookings that mix shopping, appointments, business visits and regional mileage in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for city driving", body: `Compact cars are useful in Nottingham because they keep local manoeuvring, ordinary parking and short city-centre trips simpler. That is often the clearest advantage for customers who need a sensible self-drive car rather than something larger.

A smaller hatchback also feels less awkward on repeated local stops than a bulkier vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Nottingham trips often widen beyond city roads into larger East Midlands mileage, so the car still needs to remain practical after the local section.

A compact hatchback gives you that balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Nottingham bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Nottingham?", answer: "Compact cars are a practical option in Nottingham because they stay easy for city driving and parking while remaining comfortable enough for wider East Midlands mileage." },
            { question: "Is compact car hire in Nottingham useful for city and station travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary station-linked travel that make up many Nottingham journeys." },
            { question: "Do you offer automatic compact cars in Nottingham?", answer: "Yes, subject to availability. If you prefer automatic driving for Nottingham traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Nottingham?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Nottingham." },
            { question: "Can Nottingham compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Nottingham booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location2Tokens = createNearbyLocationTokens({
          location: "Loughborough",
          heroImage: "/images/compactcarhirederby-co-uk-nearby-location-fleet-b.png",
          heroAlt: "Compact hire car ready for practical travel around Loughborough",
          metadataDescription: "Compact car hire in Loughborough for local driving, station access and practical East Midlands travel.",
          heroDescription: "Compact car hire in Loughborough for everyday travel, station runs and wider mileage where a smaller hatchback stays easy to manage.",
          serviceDescription: `Compact car hire in Loughborough works well because local bookings often mix everyday town movement with quick access to larger East Midlands roads. A smaller hatchback is easier for ordinary parking and repeated local stops, while still remaining comfortable enough for broader regional mileage.

That practicality suits replacement transport, work appointments, family visits and mixed-use travel around Loughborough. You get a self-drive car that stays manageable locally without feeling underdone once the route expands.`,
          whyChooseDescription: "We keep Loughborough compact car hire practical for ordinary local use while making sure the vehicle also works well on wider routes.",
          serviceAreasDescription: "We support compact car hire in Loughborough and nearby East Midlands routes, including town driving, station access and onward regional mileage.",
          localRelevanceDescription: `Loughborough is a strong fit for compact car hire because many journeys here combine local driving with quick access to wider roads. A smaller vehicle is useful for ordinary parking, shorter local trips and repeated stops, while still remaining comfortable enough once the booking heads beyond town.

That balance matters on bookings that mix shopping, appointments, family visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Loughborough driving", body: `Compact cars are useful in Loughborough because they keep local manoeuvring, regular parking and short town-centre trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Loughborough trips can quickly widen beyond local roads into larger East Midlands mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Loughborough bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Loughborough?", answer: "Compact cars are a practical option in Loughborough because they stay easy for local driving and parking while remaining comfortable enough for wider East Midlands mileage." },
            { question: "Is compact car hire in Loughborough useful for station and town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary station-linked travel that make up many Loughborough journeys." },
            { question: "Do you offer automatic compact cars in Loughborough?", answer: "Yes, subject to availability. If you prefer automatic driving for Loughborough traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Loughborough?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Loughborough." },
            { question: "Can Loughborough compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Loughborough booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location3Tokens = createNearbyLocationTokens({
          location: "Burton upon Trent",
          heroImage: "/images/compactcarhirederby-co-uk-nearby-location-fleet-a.png",
          heroAlt: "Compact hire car ready for practical travel around Burton upon Trent",
          metadataDescription: "Compact car hire in Burton upon Trent for local driving, work trips and practical regional mileage.",
          heroDescription: "Compact car hire in Burton upon Trent for everyday travel, business visits and wider mileage where a smaller hatchback stays easy to manage.",
          serviceDescription: `Compact car hire in Burton upon Trent works well because local bookings often mix everyday town travel with wider A-road mileage across Staffordshire and the Midlands. A smaller hatchback is easier for ordinary parking and repeated local stops, while still remaining comfortable enough for broader regional routes.

That practicality suits replacement transport, work visits, family mileage and mixed-use travel around Burton upon Trent. You get a self-drive car that stays straightforward locally without feeling limited when the route widens.`,
          whyChooseDescription: "We keep Burton upon Trent compact car hire practical for local use while making sure the vehicle still works well once the journey opens onto wider roads.",
          serviceAreasDescription: "We support compact car hire in Burton upon Trent and nearby Midlands routes, including local travel, business mileage and onward regional journeys.",
          localRelevanceDescription: `Burton upon Trent is a strong fit for compact car hire because many journeys here combine ordinary town movement with wider regional road use. A smaller vehicle is useful for local parking, shorter daily trips and repeated stops, while still remaining comfortable enough once the booking heads beyond town.

That balance matters on bookings that mix appointments, shopping, work visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Burton travel", body: `Compact cars are useful in Burton upon Trent because they keep local manoeuvring, regular parking and short town trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less awkward on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Burton upon Trent trips can quickly widen beyond local roads into larger Midlands mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Burton upon Trent bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Burton upon Trent?", answer: "Compact cars are a practical option in Burton upon Trent because they stay easy for local driving and parking while remaining comfortable enough for wider Midlands mileage." },
            { question: "Is compact car hire in Burton upon Trent useful for town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary retail or appointment travel that make up many Burton upon Trent journeys." },
            { question: "Do you offer automatic compact cars in Burton upon Trent?", answer: "Yes, subject to availability. If you prefer automatic driving for Burton upon Trent traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Burton upon Trent?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Burton upon Trent." },
            { question: "Can Burton upon Trent compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Burton upon Trent booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location4Tokens = createNearbyLocationTokens({
          location: "Chesterfield",
          heroImage: "/images/compactcarhirederby-co-uk-nearby-location-fleet-b.png",
          heroAlt: "Compact hire car ready for practical travel around Chesterfield",
          metadataDescription: "Compact car hire in Chesterfield for local driving, appointments and practical Derbyshire travel.",
          heroDescription: "Compact car hire in Chesterfield for everyday travel, business visits and wider mileage where a smaller hatchback stays practical.",
          serviceDescription: `Compact car hire in Chesterfield works well because local bookings often mix ordinary town movement with wider Derbyshire and South Yorkshire mileage. A smaller hatchback is easier for everyday parking and repeated local stops, while still remaining comfortable enough for broader routes later in the day.

That practicality suits replacement transport, appointments, family travel and mixed-use journeys around Chesterfield. You get a self-drive car that stays manageable locally without feeling too limited once the route opens out.`,
          whyChooseDescription: "We keep Chesterfield compact car hire practical for local use while making sure the vehicle also works well on wider Derbyshire routes.",
          serviceAreasDescription: "We support compact car hire in Chesterfield and nearby Derbyshire routes, including town driving, business mileage and onward regional journeys.",
          localRelevanceDescription: `Chesterfield is a strong fit for compact car hire because many journeys here combine local driving with wider regional road use. A smaller vehicle is useful for ordinary parking, shorter local trips and repeated stops, while still remaining comfortable enough once the booking heads beyond town.

That balance matters on bookings that mix shopping, appointments, family visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Chesterfield driving", body: `Compact cars are useful in Chesterfield because they keep local manoeuvring, regular parking and short town trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Chesterfield trips can quickly widen beyond local roads into larger Derbyshire mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Chesterfield bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Chesterfield?", answer: "Compact cars are a practical option in Chesterfield because they stay easy for local driving and parking while remaining comfortable enough for wider Derbyshire mileage." },
            { question: "Is compact car hire in Chesterfield useful for town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary retail or appointment travel that make up many Chesterfield journeys." },
            { question: "Do you offer automatic compact cars in Chesterfield?", answer: "Yes, subject to availability. If you prefer automatic driving for Chesterfield traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Chesterfield?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Chesterfield." },
            { question: "Can Chesterfield compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Chesterfield booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location5Tokens = createNearbyLocationTokens({
          location: "Mansfield",
          heroImage: "/images/compactcarhirederby-co-uk-nearby-location-fleet-a.png",
          heroAlt: "Compact hire car ready for practical travel around Mansfield",
          metadataDescription: "Compact car hire in Mansfield for local driving, work trips and practical regional mileage.",
          heroDescription: "Compact car hire in Mansfield for everyday local travel, appointments and wider mileage where a smaller hatchback stays easy to handle.",
          serviceDescription: `Compact car hire in Mansfield works well because local bookings often mix everyday town movement with wider Nottinghamshire and Derbyshire mileage. A smaller hatchback is easier for ordinary parking and repeated local stops, while still remaining comfortable enough for broader routes later in the day.

That practicality suits replacement transport, work visits, family travel and mixed-use journeys around Mansfield. You get a self-drive car that stays manageable locally without feeling too limited once the route expands.`,
          whyChooseDescription: "We keep Mansfield compact car hire practical for ordinary local use while making sure the vehicle also works well on wider regional roads.",
          serviceAreasDescription: "We support compact car hire in Mansfield and nearby regional routes, including town travel, business mileage and onward East Midlands journeys.",
          localRelevanceDescription: `Mansfield is a strong fit for compact car hire because many journeys here combine local driving with wider regional road use. A smaller vehicle is useful for ordinary parking, shorter local trips and repeated stops, while still remaining comfortable enough once the booking heads beyond town.

That balance matters on bookings that mix shopping, appointments, family visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Mansfield driving", body: `Compact cars are useful in Mansfield because they keep local manoeuvring, regular parking and short town trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Mansfield trips can quickly widen beyond local roads into larger regional mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Mansfield bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Mansfield?", answer: "Compact cars are a practical option in Mansfield because they stay easy for local driving and parking while remaining comfortable enough for wider regional mileage." },
            { question: "Is compact car hire in Mansfield useful for town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary retail or appointment travel that make up many Mansfield journeys." },
            { question: "Do you offer automatic compact cars in Mansfield?", answer: "Yes, subject to availability. If you prefer automatic driving for Mansfield traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Mansfield?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Mansfield." },
            { question: "Can Mansfield compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Mansfield booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location6Tokens = createNearbyLocationTokens({
          location: "Leicester",
          heroImage: "/images/compactcarhirederby-co-uk-nearby-location-fleet-b.png",
          heroAlt: "Compact hire car ready for practical travel around Leicester",
          metadataDescription: "Compact car hire in Leicester for city driving, appointments and practical regional mileage.",
          heroDescription: "Compact car hire in Leicester for everyday city travel, business visits and wider mileage where a smaller hatchback stays practical.",
          serviceDescription: `Compact car hire in Leicester works well because local bookings often mix city travel, repeated parking and wider East Midlands mileage in the same booking. A smaller hatchback is easier for ordinary urban driving and repeated stops, while still remaining comfortable enough for broader routes later in the day.

That practicality suits replacement transport, work appointments, family visits and mixed-use journeys around Leicester. You get a self-drive car that stays manageable in the city without feeling limited once the route widens.`,
          whyChooseDescription: "We keep Leicester compact car hire practical for city use while making sure the vehicle also works well once the route opens onto wider roads.",
          serviceAreasDescription: "We support compact car hire in Leicester and nearby East Midlands routes, including city driving, business mileage and onward regional journeys.",
          localRelevanceDescription: `Leicester is a strong fit for compact car hire because many journeys here combine local city movement with wider regional road use. A smaller vehicle is useful for ordinary parking, shorter local trips and repeated stops, while still remaining comfortable enough once the booking heads beyond the city.

That balance matters on bookings that mix shopping, appointments, family visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Leicester driving", body: `Compact cars are useful in Leicester because they keep local manoeuvring, regular parking and short city trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Leicester trips can quickly widen beyond local roads into larger East Midlands mileage, so the car still needs to remain practical after the city section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Leicester bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Leicester?", answer: "Compact cars are a practical option in Leicester because they stay easy for city driving and parking while remaining comfortable enough for wider East Midlands mileage." },
            { question: "Is compact car hire in Leicester useful for city travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary retail or appointment travel that make up many Leicester journeys." },
            { question: "Do you offer automatic compact cars in Leicester?", answer: "Yes, subject to availability. If you prefer automatic driving for Leicester traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Leicester?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Leicester." },
            { question: "Can Leicester compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Leicester booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location7Tokens = createNearbyLocationTokens({
          location: "Long Eaton",
          heroImage: "/images/compactcarhirederby-co-uk-nearby-location-fleet-a.png",
          heroAlt: "Compact hire car ready for practical travel around Long Eaton",
          metadataDescription: "Compact car hire in Long Eaton for local driving, station access and practical East Midlands regional travel.",
          heroDescription: "Compact car hire in Long Eaton for everyday local travel, station journeys and wider mileage where a smaller hatchback keeps things straightforward.",
          serviceDescription: `Compact car hire in Long Eaton works well because local bookings often mix ordinary town movement with quick access to wider East Midlands roads. A smaller hatchback is easier for day-to-day parking and shorter local stops, while still staying comfortable enough for broader regional mileage.

That practicality suits replacement transport, family visits, business appointments and mixed-use journeys around Long Eaton. You get a self-drive car that stays manageable for local driving without feeling limited once the route widens.`,
          whyChooseDescription: "We keep Long Eaton compact car hire practical for ordinary local use while making sure the vehicle also works well once the journey opens onto wider routes.",
          serviceAreasDescription: "We support compact car hire in Long Eaton and nearby East Midlands routes, including town travel, station access and onward regional mileage.",
          localRelevanceDescription: `Long Eaton is a strong fit for compact car hire because many journeys here combine local driving with quick access to wider routes. A smaller vehicle is useful for ordinary parking, shorter town trips and repeated local stops, while still remaining comfortable enough once the booking heads beyond town.

That balance matters on bookings that mix shopping, appointments, family visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Long Eaton driving", body: `Compact cars are useful in Long Eaton because they keep local manoeuvring, regular parking and short town-centre trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Long Eaton trips can quickly widen beyond local roads into larger East Midlands mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Long Eaton bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Long Eaton?", answer: "Compact cars are a practical option in Long Eaton because they stay easy for local driving and parking while remaining comfortable enough for wider East Midlands mileage." },
            { question: "Is compact car hire in Long Eaton useful for station and town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary station-linked travel that make up many Long Eaton journeys." },
            { question: "Do you offer automatic compact cars in Long Eaton?", answer: "Yes, subject to availability. If you prefer automatic driving for Long Eaton traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Long Eaton?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Long Eaton." },
            { question: "Can Long Eaton compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Long Eaton booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location8Tokens = createNearbyLocationTokens({
          location: "Ilkeston",
          heroImage: "/images/compactcarhirederby-co-uk-nearby-location-fleet-b.png",
          heroAlt: "Compact hire car ready for practical travel around Ilkeston",
          metadataDescription: "Compact car hire in Ilkeston for local driving, appointments and practical East Midlands mileage.",
          heroDescription: "Compact car hire in Ilkeston for everyday local travel, work visits and wider mileage where a smaller hatchback stays easy to manage.",
          serviceDescription: `Compact car hire in Ilkeston works well because local bookings often mix ordinary town movement with quick access to wider East Midlands roads. A smaller hatchback is easier for day-to-day parking and shorter local stops, while still staying comfortable enough for broader regional mileage.

That practicality suits replacement transport, family visits, business appointments and mixed-use journeys around Ilkeston. You get a self-drive car that stays manageable for local driving without feeling limited once the route widens.`,
          whyChooseDescription: "We keep Ilkeston compact car hire practical for ordinary local use while making sure the vehicle also works well once the journey opens onto wider routes.",
          serviceAreasDescription: "We support compact car hire in Ilkeston and nearby East Midlands routes, including town travel, business mileage and onward regional journeys.",
          localRelevanceDescription: `Ilkeston is a strong fit for compact car hire because many journeys here combine local driving with quick access to wider routes. A smaller vehicle is useful for ordinary parking, shorter town trips and repeated local stops, while still remaining comfortable enough once the booking heads beyond town.

That balance matters on bookings that mix shopping, appointments, family visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Ilkeston driving", body: `Compact cars are useful in Ilkeston because they keep local manoeuvring, regular parking and short town-centre trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Ilkeston trips can quickly widen beyond local roads into larger East Midlands mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Ilkeston bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Ilkeston?", answer: "Compact cars are a practical option in Ilkeston because they stay easy for local driving and parking while remaining comfortable enough for wider East Midlands mileage." },
            { question: "Is compact car hire in Ilkeston useful for town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary retail or appointment travel that make up many Ilkeston journeys." },
            { question: "Do you offer automatic compact cars in Ilkeston?", answer: "Yes, subject to availability. If you prefer automatic driving for Ilkeston traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Ilkeston?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Ilkeston." },
            { question: "Can Ilkeston compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Ilkeston booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

export const servicePages: Record<ServiceSlug, ServicePageContent> = {
  "compact-car": createContentSet({
    tokens: homepageTokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "main-flow-vehicles",
    currentLocationName: siteConfig.locationName,
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  "van-hire": createContentSet({
    tokens: vanHireTokens,
    mainVehicleNames: vanMainNames,
    mainVehicleImages: vanMainImages,
    inventorySectionId: "van-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
  "truck-hire": createContentSet({
    tokens: truckHireTokens,
    mainVehicleNames: truckMainNames,
    mainVehicleImages: truckMainImages,
    inventorySectionId: "truck-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
  "minibus-hire": createContentSet({
    tokens: minibusHireTokens,
    mainVehicleNames: minibusMainNames,
    mainVehicleImages: minibusMainImages,
    inventorySectionId: "minibus-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
}

export const locationPageContents: Record<number, ServicePageContent> = {
  1: createContentSet({
    tokens: location1Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location1-vehicles",
    currentLocationName: "Nottingham",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  2: createContentSet({
    tokens: location2Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location2-vehicles",
    currentLocationName: "Loughborough",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  3: createContentSet({
    tokens: location3Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location3-vehicles",
    currentLocationName: "Burton upon Trent",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  4: createContentSet({
    tokens: location4Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location4-vehicles",
    currentLocationName: "Chesterfield",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  5: createContentSet({
    tokens: location5Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location5-vehicles",
    currentLocationName: "Mansfield",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  6: createContentSet({
    tokens: location6Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location6-vehicles",
    currentLocationName: "Leicester",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  7: createContentSet({
    tokens: location7Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location7-vehicles",
    currentLocationName: "Long Eaton",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  8: createContentSet({
    tokens: location8Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location8-vehicles",
    currentLocationName: "Ilkeston",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
}
