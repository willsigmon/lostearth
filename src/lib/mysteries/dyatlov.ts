import type { Mystery } from "@/types/mystery";

export const DYATLOV_MYSTERY: Mystery = {
  id: "dyatlov-001",
  slug: "dyatlov-pass",
  title: "The Dyatlov Pass Incident",
  subtitle: "Nine hikers, one tent, and no explanation",
  description: `In February 1959, a group of nine experienced hikers led by Igor Dyatlov — all students or graduates of the Ural Polytechnic Institute — died under deeply mysterious circumstances in the northern Ural Mountains of Russia, on the slopes of Kholat Syakhl (meaning "Dead Mountain" in the local Mansi language).

The group's tent was found cut open from the inside. The hikers had fled into temperatures of -30°C wearing little or no cold-weather gear. Their bodies were recovered over the following months, scattered up to 1.5 kilometers from the tent. Some had sustained severe internal injuries — crushed ribs, a fractured skull — with no corresponding external wounds. Two bodies showed traces of radioactive contamination. One victim was missing her tongue.

Soviet investigators concluded at the time that the group died due to "a compelling natural force," but the case was classified and sealed for decades. Russia reopened the investigation in 2019 and officially concluded an avalanche was responsible — a finding contested by many researchers and survivors of the era who knew the terrain.

In 2021, a team of Swiss scientists using computer simulation supported a slab avalanche theory, suggesting a small but dense slab of snow could have struck the sleeping hikers, causing the internal injuries while leaving no visible external marks. The debate continues.`,
  known_facts: [
    {
      date: "1959-01-23",
      fact: "The Dyatlov group departs Vizhai — the last inhabited settlement — and begins their trek toward Mount Otorten",
      source_url: "https://en.wikipedia.org/wiki/Dyatlov_Pass_incident",
    },
    {
      date: "1959-01-31",
      fact: "Group reaches the foothills of Kholat Syakhl and caches supplies in a storage den (labaz) for the return journey",
    },
    {
      date: "1959-02-01",
      fact: "Group sets up camp on the slope of Kholat Syakhl at approximately 1,079 meters elevation; this is the last known point of activity",
    },
    {
      date: "1959-02-26",
      fact: "Rescue team discovers the abandoned tent — cut open from the inside — with belongings and shoes still inside",
    },
    {
      date: "1959-03-04",
      fact: "First five bodies found near a cedar tree at the wood line, some showing signs of severe frostbite; two appeared to have climbed the tree",
    },
    {
      date: "1959-05-04",
      fact: "Four remaining bodies discovered in a ravine under 4 meters of snow; three had severe internal injuries (crushed ribs, fractured skull) with no external wounds; one was missing her tongue",
    },
    {
      date: "1959-05",
      fact: "Radiation tests reveal two of the recovered bodies and several clothing items show traces of radioactive contamination (beta radiation)",
      source_url: "https://en.wikipedia.org/wiki/Dyatlov_Pass_incident",
    },
    {
      date: "2021-01-28",
      fact: "Swiss researchers publish a peer-reviewed simulation study in Communications Earth & Environment supporting a small slab avalanche as the cause of the internal injuries",
      source_url:
        "https://www.nature.com/articles/s43247-020-00081-8",
    },
  ],
  search_zone: {
    type: "Polygon",
    coordinates: [
      [
        [59.4, 61.72],
        [59.52, 61.72],
        [59.52, 61.79],
        [59.4, 61.79],
        [59.4, 61.72],
      ],
    ],
  },
  center_lat: 61.754,
  center_lng: 59.456,
  default_zoom: 12,
  default_layers: ["gibs-modis-truecolor"],
  timeline: [
    {
      date: "1959-01-23T00:00:00Z",
      event: "Group departs Vizhai, the last inhabited settlement",
      lat: 61.075,
      lng: 59.556,
    },
    {
      date: "1959-01-31T00:00:00Z",
      event: "Group caches supplies in labaz at the base of Kholat Syakhl",
      lat: 61.745,
      lng: 59.469,
    },
    {
      date: "1959-02-01T00:00:00Z",
      event: "Tent established on the slope of Kholat Syakhl — last known position",
      lat: 61.7638,
      lng: 59.4556,
    },
    {
      date: "1959-02-26T00:00:00Z",
      event: "Rescue team discovers the tent, cut open from inside, all hikers gone",
      lat: 61.7638,
      lng: 59.4556,
    },
    {
      date: "1959-03-04T00:00:00Z",
      event: "First five bodies found near cedar tree at the wood line",
      lat: 61.7485,
      lng: 59.4568,
    },
    {
      date: "1959-05-04T00:00:00Z",
      event: "Four remaining bodies found in ravine; severe internal injuries noted",
      lat: 61.7455,
      lng: 59.462,
    },
    {
      date: "2019-01-01T00:00:00Z",
      event: "Russia officially reopens the Dyatlov Pass investigation",
    },
    {
      date: "2021-01-28T00:00:00Z",
      event: "Swiss researchers publish slab avalanche simulation study supporting avalanche theory",
    },
  ],
  reddit_subreddits: [
    "DyatlovPass",
    "UnresolvedMysteries",
    "mystery",
    "TrueCrime",
  ],
  reddit_keywords: [
    "dyatlov pass",
    "dead mountain",
    "kholat syakhl",
    "igor dyatlov",
    "ural mountains 1959",
  ],
  status: "active",
  image_url: "/mysteries/dyatlov-hero.jpg",
  created_at: "2026-03-22T00:00:00Z",
  updated_at: "2026-03-22T00:00:00Z",
};
