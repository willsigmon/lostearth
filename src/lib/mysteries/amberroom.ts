import type { Mystery } from "@/types/mystery";

export const AMBERROOM_MYSTERY: Mystery = {
  id: "amberroom-001",
  slug: "amber-room",
  title: "The Lost Amber Room",
  subtitle: "The Eighth Wonder of the World, dismantled by Nazis",
  description: `The Amber Room was a magnificent chamber constructed in the early 18th century, composed of over six tons of intricately carved amber panels backed with gold leaf and mirrors. Created in 1701 for King Frederick I of Prussia, it was gifted to Peter the Great of Russia in 1716 as a gesture of Prussian-Russian alliance. Installed at the Catherine Palace in Tsarskoye Selo near St. Petersburg, it became known as the "Eighth Wonder of the World."

When Nazi Germany invaded the Soviet Union in 1941 during the Siege of Leningrad, German forces dismantled the Amber Room in just 36 hours and shipped it to Königsberg Castle (in present-day Kaliningrad, Russia), where it was reassembled and displayed. The last confirmed sighting of the Amber Room was in January 1945 in Königsberg.

In April 1945, Soviet forces captured Königsberg after a devastating British RAF bombing campaign. When the Red Army arrived, the Amber Room had vanished. Whether it was destroyed in the bombing, hidden in an underground bunker beneath the city, smuggled to South America, or concealed in a German salt mine remains one of history's greatest unsolved mysteries.

A painstaking 24-year reconstruction of the Amber Room was completed in 2003 at Catherine Palace, using historical photographs and surviving fragments. The original, however, has never been found.`,
  known_facts: [
    {
      date: "1701",
      fact: "The Amber Room is constructed for King Frederick I of Prussia, designed by German sculptor Andreas Schlüter and Danish amber craftsman Gottfried Wolfram",
      source_url: "https://en.wikipedia.org/wiki/Amber_Room",
    },
    {
      date: "1716",
      fact: "King Frederick William I of Prussia gifts the Amber Room to Peter the Great of Russia, cementing a Prussian-Russian alliance against Sweden",
    },
    {
      date: "1755",
      fact: "Empress Elizabeth of Russia orders the Amber Room moved to the Catherine Palace at Tsarskoye Selo; Italian designer Bartolomeo Rastrelli expands it to fill a larger hall",
    },
    {
      date: "1941-09",
      fact: "Nazi German forces dismantle the Amber Room in approximately 36 hours and crate it for transport to Königsberg Castle in East Prussia",
    },
    {
      date: "1942",
      fact: "The Amber Room is reassembled and publicly displayed in Königsberg Castle's Knights' Hall; Alfred Rohde, a German art historian, oversees it",
    },
    {
      date: "1945-01",
      fact: "Last confirmed eyewitness accounts place the Amber Room in Königsberg Castle before it is reportedly crated and removed ahead of the Soviet advance",
    },
    {
      date: "1945-04",
      fact: "British RAF bombing reduces much of Königsberg to rubble; Soviet forces capture the city. No trace of the Amber Room is found in the ruins of Königsberg Castle",
    },
    {
      date: "2003",
      fact: "A full reconstruction of the Amber Room, costing approximately $11 million and taking 24 years to complete, is unveiled at Catherine Palace",
    },
  ],
  search_zone: {
    type: "Polygon",
    coordinates: [
      [
        [19.5, 54.3],
        [22.5, 54.3],
        [22.5, 55.1],
        [19.5, 55.1],
        [19.5, 54.3],
      ],
    ],
  },
  center_lat: 54.71,
  center_lng: 20.51,
  default_zoom: 10,
  default_layers: ["gibs-modis-truecolor"],
  timeline: [
    {
      date: "1701-01-01T00:00:00Z",
      event: "Amber Room created for King Frederick I of Prussia in Berlin",
      lat: 52.5163,
      lng: 13.3777,
    },
    {
      date: "1716-01-01T00:00:00Z",
      event: "Gifted to Peter the Great; transported to St. Petersburg, Russia",
      lat: 59.9311,
      lng: 30.3609,
    },
    {
      date: "1755-01-01T00:00:00Z",
      event: "Reinstalled and expanded at Catherine Palace, Tsarskoye Selo",
      lat: 59.7163,
      lng: 30.3958,
    },
    {
      date: "1941-09-01T00:00:00Z",
      event: "Nazi forces dismantle and remove the Amber Room from Catherine Palace",
      lat: 59.7163,
      lng: 30.3958,
    },
    {
      date: "1942-01-01T00:00:00Z",
      event: "Amber Room reassembled and displayed at Königsberg Castle",
      lat: 54.7104,
      lng: 20.5128,
    },
    {
      date: "1945-01-12T00:00:00Z",
      event: "Last confirmed sighting — Amber Room reportedly crated in Königsberg Castle ahead of Soviet advance",
      lat: 54.7104,
      lng: 20.5128,
    },
    {
      date: "1945-04-09T00:00:00Z",
      event: "Soviet forces capture Königsberg; Amber Room not found in ruins",
      lat: 54.71,
      lng: 20.51,
    },
    {
      date: "2003-05-31T00:00:00Z",
      event: "Reconstructed Amber Room unveiled at Catherine Palace after 24-year restoration",
      lat: 59.7163,
      lng: 30.3958,
    },
  ],
  reddit_subreddits: [
    "UnresolvedMysteries",
    "history",
    "ArtHistory",
    "WWII",
  ],
  reddit_keywords: [
    "amber room",
    "konigsberg castle",
    "catherine palace",
    "nazi looting",
    "lost treasure wwii",
  ],
  status: "active",
  image_url: "/mysteries/amberroom-hero.jpg",
  created_at: "2026-03-22T00:00:00Z",
  updated_at: "2026-03-22T00:00:00Z",
};
