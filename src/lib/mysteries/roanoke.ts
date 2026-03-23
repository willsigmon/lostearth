import type { Mystery } from "@/types/mystery";

export const ROANOKE_MYSTERY: Mystery = {
  id: "roanoke-001",
  slug: "roanoke",
  title: "The Lost Colony of Roanoke",
  subtitle: "115 English colonists vanish from the New World",
  description: `In 1587, 115 English colonists led by John White established a settlement on Roanoke Island, off the coast of present-day Dare County, North Carolina. Among them was Virginia Dare, the first English child born in the Americas and White's own granddaughter.

White sailed back to England to secure additional supplies, but the Anglo-Spanish War delayed his return for three years. When he finally landed on Roanoke Island in August 1590, the colony was completely abandoned. Every structure had been dismantled, suggesting a planned rather than panicked departure. The only clues left behind were the word "CROATOAN" carved into a post of the fort's palisade and the letters "CRO" etched into a nearby tree.

Croatoan was both the name of a barrier island roughly 50 miles to the south (now Hatteras Island) and the name of a friendly Native American tribe that had lived in the area. No bodies, no signs of violence, and no definitive explanation were ever found.

Centuries of speculation have yielded several hypotheses: the colonists integrated with the Croatoan people, they relocated inland, they perished from disease or conflict, or some combination of all three. Archaeological excavations at "Site X" — a location approximately 50 miles inland on the western shore of the Albemarle Sound — conducted by the First Colony Foundation between 2012 and 2020 uncovered English artifacts dating to the late 16th century, suggesting at least a portion of the colonists may have moved there. The mystery of what ultimately became of the colony remains one of the oldest unsolved disappearances in American history.`,
  known_facts: [
    {
      date: "1587-07-22",
      fact: "115 English colonists arrive at Roanoke Island under Governor John White, establishing England's second attempt at a permanent New World settlement",
      source_url: "https://en.wikipedia.org/wiki/Roanoke_Colony",
    },
    {
      date: "1587-08-18",
      fact: "Virginia Dare is born, becoming the first English child born in the Americas; she is the granddaughter of Governor John White",
    },
    {
      date: "1587-08-27",
      fact: "John White reluctantly returns to England to obtain desperately needed supplies, leaving the colony behind",
      source_url: "https://en.wikipedia.org/wiki/John_White_(colonist_and_artist)",
    },
    {
      date: "1588",
      fact: "The Anglo-Spanish War and the Spanish Armada crisis delay all supply ships, preventing White from returning to the colony",
    },
    {
      date: "1590-08-18",
      fact: "White finally returns to Roanoke Island to find the colony completely abandoned — 'CROATOAN' carved on a palisade post and 'CRO' on a tree are the only clues",
    },
    {
      date: "1590-08-18",
      fact: "No bodies, signs of violence, or personal belongings are found; structures have been deliberately dismantled, indicating a planned departure rather than a sudden attack",
    },
    {
      date: "2012",
      fact: "The First Colony Foundation begins excavations at 'Site X,' approximately 50 miles inland on the Albemarle Sound, after a patch on John White's own map reveals a hidden symbol at that location",
      source_url: "https://www.firstcolonyfoundation.org/",
    },
    {
      date: "2020",
      fact: "Archaeological digs at Site X conclude, having uncovered English artifacts from the correct late-16th-century era, suggesting colonists may have relocated inland and integrated with local Native American populations",
    },
  ],
  search_zone: {
    type: "Polygon",
    coordinates: [
      [
        [-76.7, 35.7],
        [-75.3, 35.7],
        [-75.3, 36.2],
        [-76.7, 36.2],
        [-76.7, 35.7],
      ],
    ],
  },
  center_lat: 35.935,
  center_lng: -75.675,
  default_zoom: 11,
  default_layers: ["gibs-modis-truecolor"],
  timeline: [
    {
      date: "1587-07-22T00:00:00Z",
      event: "115 colonists land on Roanoke Island and begin establishing the settlement",
      lat: 35.935,
      lng: -75.675,
    },
    {
      date: "1587-08-18T00:00:00Z",
      event: "Virginia Dare born — first English child in the Americas",
      lat: 35.935,
      lng: -75.675,
    },
    {
      date: "1587-08-27T00:00:00Z",
      event: "Governor John White departs for England to obtain supplies",
      lat: 35.935,
      lng: -75.675,
    },
    {
      date: "1590-08-18T00:00:00Z",
      event: "White returns to find the colony abandoned; 'CROATOAN' carved on palisade post",
      lat: 35.935,
      lng: -75.675,
    },
    {
      date: "1590-08-18T00:00:00Z",
      event: "Letters 'CRO' found carved on a nearby tree, pointing toward Croatoan Island (Hatteras)",
      lat: 35.2233,
      lng: -75.6196,
    },
    {
      date: "2012-01-01T00:00:00Z",
      event: "First Colony Foundation begins excavations at Site X on the Albemarle Sound",
      lat: 35.9382,
      lng: -76.5227,
    },
    {
      date: "2015-06-01T00:00:00Z",
      event: "Excavations at Site X yield English artifacts — ceramics, a sword hilt fragment, and early colonial materials — dating to the late 1500s",
      lat: 35.9382,
      lng: -76.5227,
    },
    {
      date: "2020-01-01T00:00:00Z",
      event: "First Colony Foundation concludes Site X digs; evidence supports theory that colonists split into groups, one heading inland to the Albemarle Sound",
      lat: 35.9382,
      lng: -76.5227,
    },
  ],
  reddit_subreddits: [
    "UnresolvedMysteries",
    "history",
    "AskHistorians",
    "archaeology",
  ],
  reddit_keywords: [
    "roanoke colony",
    "lost colony",
    "croatoan",
    "virginia dare",
    "site x roanoke",
    "john white colony",
  ],
  status: "active",
  image_url: "/mysteries/roanoke-hero.jpg",
  created_at: "2026-03-22T00:00:00Z",
  updated_at: "2026-03-22T00:00:00Z",
};
