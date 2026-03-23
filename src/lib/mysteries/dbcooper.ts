import type { Mystery } from "@/types/mystery";

export const DBCOOPER_MYSTERY: Mystery = {
  id: "dbcooper-001",
  slug: "dbcooper",
  title: "D.B. Cooper's Parachute Escape",
  subtitle: "The only unsolved hijacking in U.S. aviation history",
  description: `On November 24, 1971, a man using the alias "Dan Cooper" (misreported by the press as "D.B. Cooper") hijacked Northwest Orient Airlines Flight 305, a Boeing 727 traveling from Portland, Oregon to Seattle, Washington. After landing in Seattle and releasing the 36 passengers in exchange for $200,000 in ransom and four parachutes, he ordered the crew to fly toward Mexico City at low altitude.

Somewhere over the dense forests of southwest Washington — likely between Portland and Seattle along the I-5 corridor — Cooper lowered the aft airstair of the 727 and parachuted into the night. He was never seen again. No body, no parachute, and no substantial portion of the ransom money was ever recovered.

In 1980, eight-year-old Brian Ingram discovered $5,800 in deteriorated bills from the ransom on Tena Bar, a sandbar along the Columbia River near Vancouver, Washington. The bills matched serial numbers from the original ransom — the only confirmed physical evidence ever recovered.

The FBI investigated the case for 45 years before officially suspending active investigation in July 2016, though the case remains technically open. Citizen investigators continue through the Cooper Research Team and online communities, generating hundreds of suspect theories. The hijacker's true identity has never been established.`,
  known_facts: [
    {
      date: "1971-11-24",
      fact: "A man calling himself Dan Cooper purchased a one-way ticket for Northwest Orient Flight 305 in Portland, Oregon, paying cash",
      source_url: "https://en.wikipedia.org/wiki/D._B._Cooper",
    },
    {
      date: "1971-11-24",
      fact: "Cooper handed a flight attendant a note claiming he had a bomb, demanded $200,000 in negotiable currency and four parachutes after landing in Seattle",
    },
    {
      date: "1971-11-24",
      fact: "All 36 passengers were released at Seattle-Tacoma Airport; Cooper received the ransom and parachutes and ordered the crew to fly toward Mexico City at low altitude with gear down",
    },
    {
      date: "1971-11-24",
      fact: "Cooper parachuted from the aft airstair of the Boeing 727 somewhere over southwest Washington state, estimated between 7:36 and 8:24 PM PST",
    },
    {
      date: "1971-11-25",
      fact: "An extensive FBI manhunt involving ground teams and aircraft found no trace of Cooper, the parachutes, or the ransom money in the suspected drop zone",
    },
    {
      date: "1980-02-10",
      fact: "Eight-year-old Brian Ingram found $5,800 in deteriorated $20 bills matching ransom serial numbers on Tena Bar along the Columbia River near Vancouver, Washington",
      source_url: "https://en.wikipedia.org/wiki/D._B._Cooper#Tena_Bar_money_find",
    },
    {
      date: "2016-07-12",
      fact: "The FBI officially suspended active investigation of the D.B. Cooper case after 45 years, citing lack of new physical evidence, though the case remains technically open",
      source_url: "https://www.fbi.gov/news/stories/db-cooper-case-suspended",
    },
    {
      date: "2016",
      fact: "Citizen investigators formed the Cooper Research Team and continue active investigation; over 1,000 suspects have been named over the course of the investigation",
    },
  ],
  search_zone: {
    type: "Polygon",
    coordinates: [
      [
        [-122.9, 45.5],
        [-121.9, 45.5],
        [-121.9, 46.2],
        [-122.9, 46.2],
        [-122.9, 45.5],
      ],
    ],
  },
  center_lat: 45.7,
  center_lng: -122.5,
  default_zoom: 10,
  default_layers: ["gibs-modis-truecolor"],
  timeline: [
    {
      date: "1971-11-24T14:35:00Z",
      event: "Cooper boards Northwest Orient Flight 305 at Portland International Airport",
      lat: 45.5898,
      lng: -122.5951,
    },
    {
      date: "1971-11-24T15:05:00Z",
      event: "Flight 305 lands at Seattle-Tacoma Airport; Cooper demands ransom and parachutes",
      lat: 47.4502,
      lng: -122.3088,
    },
    {
      date: "1971-11-24T15:40:00Z",
      event: "Passengers released at Seattle-Tacoma; Cooper receives $200,000 ransom and four parachutes",
      lat: 47.4502,
      lng: -122.3088,
    },
    {
      date: "1971-11-24T19:36:00Z",
      event: "Cooper lowers aft airstair and parachutes from the Boeing 727 over southwest Washington (estimated)",
      lat: 45.7,
      lng: -122.5,
    },
    {
      date: "1971-11-25T00:00:00Z",
      event: "FBI launches massive ground search in the Lewis River area and Ariel, Washington — no trace found",
      lat: 45.9,
      lng: -122.6,
    },
    {
      date: "1980-02-10T00:00:00Z",
      event: "Brian Ingram finds $5,800 in ransom bills on Tena Bar along the Columbia River",
      lat: 45.6316,
      lng: -122.6918,
    },
    {
      date: "2016-07-12T00:00:00Z",
      event: "FBI suspends active investigation after 45 years",
      lat: 45.7,
      lng: -122.5,
    },
  ],
  reddit_subreddits: ["dbcooper", "UnresolvedMysteries", "aviation", "mystery"],
  reddit_keywords: [
    "db cooper",
    "dan cooper",
    "northwest orient 305",
    "tena bar",
    "cooper parachute",
    "ransom money",
  ],
  status: "active",
  image_url: "/mysteries/dbcooper-hero.jpg",
  created_at: "2026-03-22T00:00:00Z",
  updated_at: "2026-03-22T00:00:00Z",
};
