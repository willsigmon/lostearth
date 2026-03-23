import type { Mystery } from "@/types/mystery";

export const NAZCA_MYSTERY: Mystery = {
  id: "nazca-001",
  slug: "nazca-lines",
  title: "The Nazca Lines",
  subtitle: "Ancient geoglyphs visible only from the sky",
  description: `Etched into the arid Nazca Desert of southern Peru, the Nazca Lines are one of archaeology's most enduring enigmas. Created by the Nazca culture between 500 BCE and 500 CE, the geoglyphs consist of over 800 straight lines, 300 geometric figures, and 70 depictions of animals and plants — including a hummingbird, spider, monkey, condor, and whale.

The largest figures stretch over 1,200 feet (370 meters) in length. They were made by removing reddish-brown iron oxide-coated pebbles to reveal the pale yellow-grey ground beneath. The Nazca Desert's near-windless conditions and low rainfall have preserved them for millennia.

What makes the Lines so mysterious is that they are only fully visible from the air — yet they were created more than 1,500 years before powered flight. No ancient Nazcan would have ever seen their completed work from above.

In 2024, a team from Yamagata University combined AI image recognition with high-resolution drone and satellite imagery to identify **303 previously unknown geoglyphs** — more than doubling the known count. The new figures include humanoid forms, pairs of legs, and animals, many of them too small or faint to detect by traditional survey methods.

Their purpose remains debated: an astronomical calendar aligned to solstices and equinoxes, ceremonial pathways walked in ritual, a map of underground water sources, or messages intended for gods watching from above. No single theory has achieved consensus.`,
  known_facts: [
    {
      date: "500 BCE",
      fact: "Earliest Nazca geoglyphs are created by removing surface stones to expose lighter ground beneath",
      source_url: "https://en.wikipedia.org/wiki/Nazca_lines",
    },
    {
      date: "500 CE",
      fact: "Nazca culture's geoglyph construction period ends; over 800 straight lines, 300 geometric figures, and 70 biomorphs have been created",
    },
    {
      date: "1927-01-01",
      fact: "Peruvian archaeologist Toribio Mejía Xesspe first formally observes the lines on foot and reports them to the scientific community",
    },
    {
      date: "1939-01-01",
      fact: "American historian Paul Kosok flies over the Nazca plateau and is the first to recognize the full scale and patterns of the geoglyphs from the air",
      source_url:
        "https://www.livescience.com/nazca-lines",
    },
    {
      date: "1994-01-01",
      fact: "UNESCO designates the Nazca Lines and surrounding pampas a World Heritage Site, citing their extraordinary preservation and cultural significance",
      source_url: "https://whc.unesco.org/en/list/700",
    },
    {
      date: "2019-09-05",
      fact: "Yamagata University researchers announce discovery of 143 new geoglyphs using AI-assisted image processing of drone photography",
    },
    {
      date: "2024-01-01",
      fact: "A Yamagata University study publishes 303 newly identified geoglyphs found via AI and satellite imagery, more than doubling the known catalogue of figures",
      source_url: "https://www.yamagata-u.ac.jp/en/information/research/20240903/",
    },
    {
      date: "2024-01-01",
      fact: "The largest Nazca figures exceed 1,200 feet (370m) in length; precision of the lines' straightness — maintained over kilometers — remains unexplained by simple surveying tools",
    },
  ],
  search_zone: {
    type: "Polygon",
    coordinates: [
      [
        [-75.3, -14.9],
        [-74.9, -14.9],
        [-74.9, -14.5],
        [-75.3, -14.5],
        [-75.3, -14.9],
      ],
    ],
  },
  center_lat: -14.735,
  center_lng: -75.13,
  default_zoom: 13,
  default_layers: ["gibs-modis-truecolor"],
  timeline: [
    {
      date: "0500-01-01T00:00:00Z",
      event: "Nazca culture begins creating large-scale geoglyphs on the desert pampa",
      lat: -14.735,
      lng: -75.13,
    },
    {
      date: "0500-12-31T00:00:00Z",
      event: "Construction of major geoglyphs concludes; Nazca civilization declines",
      lat: -14.735,
      lng: -75.13,
    },
    {
      date: "1927-01-01T00:00:00Z",
      event: "Toribio Mejía Xesspe documents the lines on foot — first scientific record",
      lat: -14.735,
      lng: -75.13,
    },
    {
      date: "1939-06-22T00:00:00Z",
      event: "Paul Kosok flies over the pampa and grasps the geoglyphs' true scale from the air",
      lat: -14.735,
      lng: -75.13,
    },
    {
      date: "1994-12-09T00:00:00Z",
      event: "UNESCO inscribes Nazca Lines as a World Heritage Site",
      lat: -14.735,
      lng: -75.13,
    },
    {
      date: "2019-09-05T00:00:00Z",
      event: "Yamagata University announces 143 new geoglyphs found via AI-assisted drone imagery",
      lat: -14.72,
      lng: -75.1,
    },
    {
      date: "2024-09-03T00:00:00Z",
      event: "Yamagata University publishes study identifying 303 previously unknown geoglyphs using AI and satellite data",
      lat: -14.75,
      lng: -75.16,
    },
  ],
  reddit_subreddits: [
    "UnresolvedMysteries",
    "archaeology",
    "AlternativeHistory",
    "history",
  ],
  reddit_keywords: [
    "nazca lines",
    "nazca geoglyphs",
    "nazca desert peru",
    "nazca figures",
    "nazca ai discovery",
  ],
  status: "active",
  image_url: "/mysteries/nazca-hero.jpg",
  created_at: "2026-03-22T00:00:00Z",
  updated_at: "2026-03-22T00:00:00Z",
};
