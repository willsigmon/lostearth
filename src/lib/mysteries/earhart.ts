import type { Mystery } from "@/types/mystery";

export const EARHART_MYSTERY: Mystery = {
  id: "earhart-001",
  slug: "earhart",
  title: "Amelia Earhart's Lost Electra",
  subtitle: "The disappearance that launched a thousand searches",
  description: `On July 2, 1937, Amelia Earhart and navigator Fred Noonan vanished over the central Pacific Ocean during an attempt to circumnavigate the globe. They were flying a Lockheed Model 10-E Electra (registration NR16020) and were en route from Lae, New Guinea, to Howland Island — a tiny coral island roughly 2,556 miles away.

Despite an extensive search by the U.S. Navy and Coast Guard covering 250,000 square miles of ocean, no trace of Earhart, Noonan, or the aircraft was found. The official conclusion was that the plane ran out of fuel and crashed into the Pacific.

In March 2026, veteran pilot Justin Myers claimed to have spotted what may be the wreckage of the Electra on a reef near **Nikumaroro Island** (formerly Gardner Island) using Google Earth satellite imagery. The anomaly measures approximately 39 feet (12 meters) — consistent with the Electra's dimensions.

A 15-person expedition to Nikumaroro is planned for 2026 to investigate.`,
  known_facts: [
    {
      date: "1937-07-02",
      fact: "Earhart and Noonan depart Lae, New Guinea at 00:00 UTC heading for Howland Island",
      source_url: "https://en.wikipedia.org/wiki/Amelia_Earhart",
    },
    {
      date: "1937-07-02",
      fact: "Last confirmed radio transmission received by USCG Itasca near Howland Island at 20:14 UTC",
    },
    {
      date: "1937-07-02",
      fact: "Earhart reports 'We are on the line 157 337' — a sun line of position",
    },
    {
      date: "1937-07-02",
      fact: "Aircraft had approximately 24 hours of fuel. Last known position suggests fuel exhaustion over open ocean or near Gardner Island",
    },
    {
      date: "1937-10-13",
      fact: "British colonial officer Eric Bevington photographs Nikumaroro — anomaly visible on reef edge in photo",
    },
    {
      date: "2026-03",
      fact: "Pilot Justin Myers identifies 39-foot anomaly on Nikumaroro reef via Google Earth satellite imagery",
    },
  ],
  search_zone: {
    type: "Polygon",
    coordinates: [
      [
        [-175.0, -5.2],
        [-174.0, -5.2],
        [-174.0, -4.2],
        [-175.0, -4.2],
        [-175.0, -5.2],
      ],
    ],
  },
  center_lat: -4.6743,
  center_lng: -174.5209,
  default_zoom: 14,
  default_layers: ["gibs-modis-truecolor"],
  timeline: [
    {
      date: "1937-07-02T00:00:00Z",
      event: "Departure from Lae, New Guinea",
      lat: -6.7333,
      lng: 147.0,
    },
    {
      date: "1937-07-02T20:14:00Z",
      event: "Last radio contact near Howland Island",
      lat: 0.8113,
      lng: -176.6183,
    },
    {
      date: "1937-07-02T21:00:00Z",
      event: "Estimated fuel exhaustion",
    },
    {
      date: "2026-03-20",
      event: "Justin Myers identifies anomaly on Nikumaroro reef via Google Earth",
      lat: -4.6743,
      lng: -174.5209,
    },
  ],
  reddit_subreddits: [
    "UnresolvedMysteries",
    "aviation",
    "archaeology",
    "history",
  ],
  reddit_keywords: [
    "amelia earhart",
    "earhart plane",
    "nikumaroro",
    "gardner island",
    "lockheed electra",
  ],
  status: "active",
  image_url: "/mysteries/earhart-hero.jpg",
  created_at: "2026-03-22T00:00:00Z",
  updated_at: "2026-03-22T00:00:00Z",
};
