import type { Mystery } from "@/types/mystery";

export const OAKISLAND_MYSTERY: Mystery = {
  id: "oakisland-001",
  slug: "oak-island",
  title: "The Oak Island Money Pit",
  subtitle: "230 years of treasure hunting on a tiny Nova Scotia island",
  description: `In 1795, a teenager named Daniel McGinnis discovered a circular depression on Oak Island, a small island off the coast of Nova Scotia, Canada. Digging revealed an elaborate shaft with oak platforms placed every 10 feet, along with layers of coconut fiber, putty, and a mysterious inscribed stone.

As diggers reached greater depths, the pit would flood through an ingenious system of engineered tunnel drains connected to the ocean — a booby trap that has confounded every excavation attempt for over two centuries. Six people have died in the search.

Theories about what lies buried at the bottom of the Money Pit range from pirate treasure (Captain Kidd or Blackbeard), to Masonic and Knights Templar vaults, to Marie Antoinette's lost jewels, Shakespeare's original manuscripts, and even the Ark of the Covenant.

In 2014, brothers Rick and Marty Lagina began their high-profile excavation documented in the History Channel series *The Curse of Oak Island*. Modern drilling, sonar, and excavation equipment have produced tantalizing finds including gold traces, a medieval lead cross, and parchment fragments — but the central treasure, if it exists, remains elusive.`,
  known_facts: [
    {
      date: "1795",
      fact: "Daniel McGinnis, 18, discovers a circular depression beneath an old oak tree on Oak Island and begins digging with friends John Smith and Anthony Vaughan",
      source_url: "https://en.wikipedia.org/wiki/Oak_Island_money_pit",
    },
    {
      date: "1795",
      fact: "Diggers find oak log platforms every 10 feet to a depth of 30 feet, along with layers of coconut fiber and putty — none of which are native to Nova Scotia",
    },
    {
      date: "1803",
      fact: "The Onslow Company excavates to 90 feet and recovers a flat stone bearing an encrypted inscription; the pit floods overnight through engineered tidal flood tunnels",
    },
    {
      date: "1861",
      fact: "The Oak Island Association excavation collapses a suspected original vault at depth; subsequent operations find evidence of multiple original shafts",
    },
    {
      date: "1971",
      fact: "Triton Alliance uses a camera lowered into a borehole at 212 feet and claims to see chests, tools, and a severed human hand — footage remains disputed",
      source_url: "https://en.wikipedia.org/wiki/Oak_Island_money_pit#Triton_Alliance",
    },
    {
      date: "2014",
      fact: "Rick and Marty Lagina begin systematic modern excavation of Oak Island, documented in the History Channel series The Curse of Oak Island",
    },
    {
      date: "2023",
      fact: "The Lagina team recovers gold traces, a 14th-century lead cross consistent with Knights Templar iconography, and fragments of parchment from deep boreholes",
    },
    {
      date: "2024",
      fact: "Excavations in the swamp area reveal evidence of a pre-colonial artificial harbor and platform structure, suggesting large-scale organized activity on the island centuries ago",
    },
  ],
  search_zone: {
    type: "Polygon",
    coordinates: [
      [
        [-64.31, 44.505],
        [-64.275, 44.505],
        [-64.275, 44.522],
        [-64.31, 44.522],
        [-64.31, 44.505],
      ],
    ],
  },
  center_lat: 44.513,
  center_lng: -64.292,
  default_zoom: 15,
  default_layers: ["gibs-modis-truecolor"],
  timeline: [
    {
      date: "1795-01-01T00:00:00Z",
      event: "Daniel McGinnis discovers the depression and begins digging with friends",
      lat: 44.513,
      lng: -64.292,
    },
    {
      date: "1803-01-01T00:00:00Z",
      event: "Onslow Company reaches 90 feet; pit floods via engineered tidal tunnels; inscribed stone recovered",
      lat: 44.513,
      lng: -64.292,
    },
    {
      date: "1861-01-01T00:00:00Z",
      event: "Oak Island Association excavation collapses suspected original vault; first treasure-hunting fatalities recorded",
      lat: 44.513,
      lng: -64.292,
    },
    {
      date: "1897-01-01T00:00:00Z",
      event: "Oak Island Treasure Company borehole returns parchment fragments with letters 'vi' or 'ui' written in Indian ink",
      lat: 44.513,
      lng: -64.292,
    },
    {
      date: "1971-01-01T00:00:00Z",
      event: "Triton Alliance camera at 212 feet reportedly captures image of chests and human remains in flooded cavity",
      lat: 44.513,
      lng: -64.292,
    },
    {
      date: "2014-01-01T00:00:00Z",
      event: "Lagina brothers launch modern excavation; History Channel series begins",
      lat: 44.513,
      lng: -64.292,
    },
    {
      date: "2023-06-01T00:00:00Z",
      event: "Medieval lead cross and gold traces recovered; parchment fragments retrieved from deep boreholes",
      lat: 44.5128,
      lng: -64.2915,
    },
    {
      date: "2024-09-01T00:00:00Z",
      event: "Swamp excavation reveals evidence of artificial pre-colonial harbor and large organized earthworks",
      lat: 44.511,
      lng: -64.294,
    },
  ],
  reddit_subreddits: ["OakIsland", "UnresolvedMysteries", "archaeology", "treasure"],
  reddit_keywords: [
    "oak island",
    "money pit",
    "lagina brothers",
    "flood tunnels",
    "knights templar oak island",
  ],
  status: "active",
  image_url: "/mysteries/oakisland-hero.jpg",
  created_at: "2026-03-22T00:00:00Z",
  updated_at: "2026-03-22T00:00:00Z",
};
