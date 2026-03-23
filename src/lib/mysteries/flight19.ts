import type { Mystery } from "@/types/mystery";

export const FLIGHT19_MYSTERY: Mystery = {
  id: "flight19-001",
  slug: "flight-19",
  title: "Flight 19: Lost in the Bermuda Triangle",
  subtitle: "Five Navy bombers vanish without a trace",
  description: `On December 5, 1945, five TBM Avenger torpedo bombers designated Flight 19 departed Fort Lauderdale Naval Air Station in Florida on a routine overwater navigation training mission. Lead instructor Lt. Charles Taylor reported compass malfunctions shortly after the flight reached the Bahamas area, and the situation rapidly deteriorated as the formation grew disoriented over the Atlantic.

Taylor's last transmissions suggested the flight believed it was over the Florida Keys and headed east into the open Atlantic when it may actually have been over the Bahamas. Radio contact became increasingly fragmented as fuel ran low. All 14 airmen aboard the five Avengers were lost.

A PBM Mariner flying boat launched to search for Flight 19 also disappeared that same evening, taking another 13 crew members with it. No confirmed wreckage from any of the six aircraft has ever been found.

The disappearance became one of the foundational events of the so-called **Bermuda Triangle** phenomenon — the loosely defined area between Miami, Bermuda, and Puerto Rico where an anomalous number of ships and aircraft have reportedly vanished. Theories range from magnetic anomalies and methane gas eruptions to navigational error and sudden weather deterioration.`,
  known_facts: [
    {
      date: "1945-12-05",
      fact: "Five TBM Avenger torpedo bombers (Flight 19) depart Fort Lauderdale Naval Air Station at 14:10 local time on a routine training exercise",
      source_url: "https://en.wikipedia.org/wiki/Flight_19",
    },
    {
      date: "1945-12-05",
      fact: "Lt. Charles Taylor, lead instructor, reports both compasses malfunctioning; flight becomes disoriented over the Atlantic",
    },
    {
      date: "1945-12-05",
      fact: "Taylor transmits: 'We are entering white water, nothing seems right. We don't know where we are, the water is green, no white.' Last coherent position fix unavailable",
    },
    {
      date: "1945-12-05",
      fact: "Radio contact with Flight 19 fades after approximately 19:04 local time; estimated fuel exhaustion puts aircraft down somewhere over the Atlantic or Bahamas",
    },
    {
      date: "1945-12-05",
      fact: "A PBM Mariner search aircraft with 13 crew members is dispatched and also disappears the same evening — no distress call received",
    },
    {
      date: "1945-12-05",
      fact: "14 airmen from Flight 19 and 13 crew from the PBM Mariner are lost — 27 men total, none recovered",
    },
    {
      date: "1945-12-06",
      fact: "Massive air and sea search involving hundreds of aircraft and vessels covers over 380,000 square miles; no wreckage, oil slick, or survivors found",
    },
    {
      date: "1991-05",
      fact: "Five Avenger aircraft discovered off Fort Lauderdale by salvage firm Deep Sea Research — subsequent investigation determines they are not Flight 19",
      source_url: "https://en.wikipedia.org/wiki/Flight_19",
    },
  ],
  search_zone: {
    type: "Polygon",
    coordinates: [
      [
        [-80.0, 24.0],
        [-72.0, 24.0],
        [-72.0, 32.0],
        [-80.0, 32.0],
        [-80.0, 24.0],
      ],
    ],
  },
  center_lat: 27.0,
  center_lng: -76.0,
  default_zoom: 6,
  default_layers: ["gibs-modis-truecolor"],
  timeline: [
    {
      date: "1945-12-05T19:10:00Z",
      event: "Flight 19 departs Fort Lauderdale Naval Air Station",
      lat: 26.0717,
      lng: -80.1494,
    },
    {
      date: "1945-12-05T21:00:00Z",
      event: "Lt. Taylor reports compass malfunction; flight believed to be over the Bahamas",
      lat: 26.5,
      lng: -77.5,
    },
    {
      date: "1945-12-05T22:04:00Z",
      event: "Last partial transmission from Flight 19 received by NAS Fort Lauderdale",
      lat: 27.5,
      lng: -75.0,
    },
    {
      date: "1945-12-06T00:00:00Z",
      event: "PBM Mariner search plane dispatched from NAS Banana River; disappears without distress call",
      lat: 28.3614,
      lng: -80.6848,
    },
    {
      date: "1945-12-06T01:00:00Z",
      event: "Massive search operation launched — 380,000 square miles covered; no wreckage found",
      lat: 27.0,
      lng: -76.0,
    },
    {
      date: "1991-05-01T00:00:00Z",
      event: "Deep Sea Research discovers five Avengers off Fort Lauderdale — determined not to be Flight 19",
      lat: 26.1,
      lng: -80.0,
    },
  ],
  reddit_subreddits: [
    "UnresolvedMysteries",
    "aviation",
    "history",
    "bermudatriangle",
  ],
  reddit_keywords: [
    "flight 19",
    "bermuda triangle",
    "fort lauderdale",
    "avenger torpedo bomber",
    "charles taylor",
  ],
  status: "active",
  image_url: "/mysteries/flight19-hero.jpg",
  created_at: "2026-03-22T00:00:00Z",
  updated_at: "2026-03-22T00:00:00Z",
};
