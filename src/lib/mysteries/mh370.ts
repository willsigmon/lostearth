import type { Mystery } from "@/types/mystery";

export const MH370_MYSTERY: Mystery = {
  id: "mh370-001",
  slug: "mh370",
  title: "Malaysia Airlines Flight 370",
  subtitle: "The modern world's greatest aviation mystery",
  description: `On March 8, 2014, Malaysia Airlines Flight MH370 departed Kuala Lumpur International Airport at 00:41 local time bound for Beijing Capital International Airport with 239 people on board — 227 passengers and 12 crew. Less than an hour into the flight, at 01:19 MYT, the aircraft made its last voice contact with air traffic control over the South China Sea. Minutes later, its transponder and ACARS system went dark.

Malaysian military radar continued tracking the aircraft as it made a sharp turn back across the Malay Peninsula and flew northwest over the Strait of Malacca — a radical deviation from its filed flight plan. The last military radar return was recorded near Penang at approximately 02:22 MYT, after which the plane vanished from all radar.

What makes MH370 unique in aviation history is the satellite data. The aircraft continued communicating with an Inmarsat satellite for nearly seven more hours via automated "handshake" signals, allowing investigators to determine that MH370 flew along one of two arcs — north toward Central Asia or south into the remote southern Indian Ocean. Analysis of Doppler frequency shifts strongly favored the southern arc, ending near the "7th arc" approximately 2,500 km west of Perth, Australia.

On July 29, 2015, a flaperon — confirmed to be from MH370 — washed ashore on Réunion Island in the western Indian Ocean, the first physical proof the aircraft had crashed at sea. Additional debris pieces were subsequently found on the coasts of Mozambique, South Africa, Madagascar, Mauritius, and Tanzania between 2016 and 2020.

Despite the largest and most expensive aviation search in history — covering over 120,000 square kilometers of ocean floor — the main wreckage has never been found. Ocean Infinity conducted a high-tech autonomous underwater vehicle search in 2018 covering 112,000 sq km without success. A new search was proposed in 2024–2025, informed by refined drift analysis and updated oceanographic modeling pinpointing a revised search area along the 7th arc.

The cause of the disappearance and the fate of all 239 people aboard remain officially undetermined.`,
  known_facts: [
    {
      date: "2014-03-08",
      fact: "MH370 departs Kuala Lumpur at 00:41 MYT with 239 people on board, bound for Beijing",
      source_url: "https://en.wikipedia.org/wiki/Malaysia_Airlines_Flight_370",
    },
    {
      date: "2014-03-08",
      fact: "Last voice radio contact at 01:19 MYT — 'Good night, Malaysian three seven zero' — as the aircraft crossed into Vietnamese airspace",
      source_url: "https://en.wikipedia.org/wiki/Malaysia_Airlines_Flight_370",
    },
    {
      date: "2014-03-08",
      fact: "Transponder and ACARS cease transmitting at approximately 01:21 MYT; Malaysian military radar tracks the aircraft turning back across the peninsula",
    },
    {
      date: "2014-03-08",
      fact: "Last military radar contact near Penang Island at approximately 02:22 MYT; aircraft had flown northwest over the Strait of Malacca",
    },
    {
      date: "2014-03-08",
      fact: "Inmarsat satellite handshake data records seven automated 'pings' through 08:19 MYT, placing the aircraft on a southern arc ending in the remote Indian Ocean",
      source_url: "https://www.inmarsat.com/en/news/latest-news/general/2014/inmarsat-statement-malaysia-airlines.html",
    },
    {
      date: "2015-07-29",
      fact: "A flaperon washes ashore on Réunion Island; Boeing and French investigators confirm it is from MH370 — the first physical debris recovered",
      source_url: "https://en.wikipedia.org/wiki/Malaysia_Airlines_Flight_370",
    },
    {
      date: "2018-01-10",
      fact: "Ocean Infinity begins a renewed autonomous underwater vehicle search covering 112,000 sq km along the 7th arc; search concludes in May 2018 without locating the main wreckage",
    },
    {
      date: "2024-12-01",
      fact: "Malaysia confirms it is reviewing a new search proposal from Ocean Infinity based on refined drift analysis and updated acoustic detection data, targeting a revised area along the 7th arc",
      source_url: "https://www.bbc.com/news/world-asia-68070450",
    },
  ],
  search_zone: {
    type: "Polygon",
    coordinates: [
      [
        [85.0, -32.0],
        [95.0, -32.0],
        [95.0, -38.0],
        [85.0, -38.0],
        [85.0, -32.0],
      ],
    ],
  },
  center_lat: -35.0,
  center_lng: 90.0,
  default_zoom: 6,
  default_layers: ["gibs-modis-truecolor"],
  timeline: [
    {
      date: "2014-03-08T00:41:00+08:00",
      event: "MH370 departs Kuala Lumpur International Airport",
      lat: 2.7456,
      lng: 101.7072,
    },
    {
      date: "2014-03-08T01:19:00+08:00",
      event: "Last voice radio contact — 'Good night, Malaysian three seven zero'",
      lat: 6.9,
      lng: 103.6,
    },
    {
      date: "2014-03-08T01:21:00+08:00",
      event: "Transponder and ACARS go silent; aircraft begins turn back across Malay Peninsula",
      lat: 6.55,
      lng: 103.34,
    },
    {
      date: "2014-03-08T02:22:00+08:00",
      event: "Last Malaysian military radar contact near Penang Island",
      lat: 5.4,
      lng: 99.7,
    },
    {
      date: "2014-03-08T08:19:00+08:00",
      event: "Final Inmarsat satellite handshake — aircraft last known to be somewhere on the 7th arc in the southern Indian Ocean",
      lat: -35.0,
      lng: 90.0,
    },
    {
      date: "2015-07-29T00:00:00Z",
      event: "Flaperon confirmed from MH370 found on Réunion Island — first physical debris recovered",
      lat: -21.1151,
      lng: 55.5364,
    },
    {
      date: "2018-01-10T00:00:00Z",
      event: "Ocean Infinity begins autonomous underwater vehicle search of 112,000 sq km along the 7th arc",
      lat: -35.0,
      lng: 90.0,
    },
    {
      date: "2025-01-01T00:00:00Z",
      event: "New Ocean Infinity search proposed based on refined drift analysis; negotiations ongoing with Malaysian government",
      lat: -35.0,
      lng: 90.0,
    },
  ],
  reddit_subreddits: ["MH370", "UnresolvedMysteries", "aviation", "conspiracy"],
  reddit_keywords: [
    "mh370",
    "malaysia airlines 370",
    "flight 370",
    "indian ocean search",
    "ocean infinity",
    "7th arc",
  ],
  status: "active",
  image_url: "/mysteries/mh370-hero.jpg",
  created_at: "2026-03-22T00:00:00Z",
  updated_at: "2026-03-22T00:00:00Z",
};
