import type { Mystery } from "@/types/mystery";

export const LOSTZ_MYSTERY: Mystery = {
  id: "lostz-001",
  slug: "lost-city-of-z",
  title: "The Lost City of Z",
  subtitle: "Percy Fawcett's final expedition into the Amazon",
  description: `In 1925, British explorer Colonel Percy Harrison Fawcett, his son Jack, and their friend Raleigh Rimmell vanished without a trace in the Mato Grosso region of Brazil. They were searching for an ancient, advanced civilization Fawcett believed lay hidden in the Amazon — a place he simply called "Z."

Fawcett's belief in Z was anchored in Manuscript 512, an 18th-century Portuguese document held in Rio de Janeiro describing a ruined stone city discovered deep in the Brazilian interior. He had mounted multiple expeditions since 1906 and was convinced the Amazon had once supported a sophisticated pre-Columbian culture.

The party's last confirmed communication was a letter dispatched from Dead Horse Camp (approximately 11.76°S, 54.35°W) on May 29, 1925. After that, silence. Over 100 people are estimated to have died or disappeared in subsequent attempts to determine what happened to Fawcett.

In 2022–2024, LiDAR aerial surveys of the upper Xingu river basin revealed extensive networks of pre-Columbian earthworks, causeways, and settlements — including the Kuhikugu archaeological complex — that lend credibility to Fawcett's core belief that large, organized societies once thrived in the Amazon. Whether any site matches his "Z" remains unresolved.`,
  known_facts: [
    {
      date: "1753",
      fact: "Manuscript 512, a Portuguese document describing a ruined stone city in the Brazilian interior, is recorded. It later becomes a key source for Fawcett's theory.",
      source_url: "https://en.wikipedia.org/wiki/Manuscript_512",
    },
    {
      date: "1906",
      fact: "Fawcett conducts his first surveying expedition to Bolivia and Brazil on behalf of the Royal Geographical Society, beginning his decades-long obsession with the Amazon.",
    },
    {
      date: "1925-04-20",
      fact: "Fawcett, his son Jack (22), and friend Raleigh Rimmell (22) depart Cuiabá, Brazil, heading northeast into the Mato Grosso on their final expedition.",
      source_url: "https://en.wikipedia.org/wiki/Percy_Fawcett",
    },
    {
      date: "1925-05-29",
      fact: "Last known letter dispatched from Dead Horse Camp (~11.76°S, 54.35°W). Fawcett writes he is entering unexplored territory and instructs that no rescue party should come looking for them.",
    },
    {
      date: "1927",
      fact: "A commission of inquiry concludes Fawcett and his companions are dead, though no physical evidence is ever found.",
    },
    {
      date: "1951",
      fact: "Kalapalo chief Vajuvi claims Fawcett's party was killed by the Kalapalo people after several days in their village, but no confirmed remains are produced.",
    },
    {
      date: "2005",
      fact: "Brazilian anthropologist Michael Heckenberger publishes evidence of the Kuhikugu complex — a network of pre-Columbian garden cities near the upper Xingu — supporting the existence of large Amazonian civilizations.",
      source_url: "https://en.wikipedia.org/wiki/Kuhikugu",
    },
    {
      date: "2022",
      fact: "LiDAR surveys of the Mato Grosso and upper Xingu basin reveal vast networks of pre-Columbian earthworks, roads, and settlements, confirming that organized urban-scale societies once existed in the Amazon.",
    },
  ],
  search_zone: {
    type: "Polygon",
    coordinates: [
      [
        [-57.0, -14.5],
        [-50.0, -14.5],
        [-50.0, -9.0],
        [-57.0, -9.0],
        [-57.0, -14.5],
      ],
    ],
  },
  center_lat: -11.76,
  center_lng: -54.35,
  default_zoom: 8,
  default_layers: ["gibs-modis-truecolor"],
  timeline: [
    {
      date: "1925-04-20T00:00:00Z",
      event: "Expedition departs Cuiabá, Mato Grosso, Brazil",
      lat: -15.601,
      lng: -56.0974,
    },
    {
      date: "1925-05-15T00:00:00Z",
      event: "Party passes through Bakairí Post, last point of contact with Brazilian outposts",
      lat: -13.1667,
      lng: -55.0,
    },
    {
      date: "1925-05-29T00:00:00Z",
      event: "Final letter dispatched from Dead Horse Camp — last confirmed communication",
      lat: -11.76,
      lng: -54.35,
    },
    {
      date: "1925-06-01T00:00:00Z",
      event: "Estimated entry into territory of the Kalapalo people near the upper Xingu",
      lat: -11.3,
      lng: -53.5,
    },
    {
      date: "1951-01-01T00:00:00Z",
      event: "Kalapalo chief Vajuvi claims party was killed after leaving the village heading northeast",
      lat: -11.0,
      lng: -53.0,
    },
    {
      date: "2005-01-01T00:00:00Z",
      event: "Kuhikugu complex identified — pre-Columbian garden cities near upper Xingu corroborate Fawcett's theory",
      lat: -11.98,
      lng: -53.22,
    },
    {
      date: "2022-06-01T00:00:00Z",
      event: "LiDAR surveys reveal extensive pre-Columbian earthworks across Mato Grosso and Xingu basin",
      lat: -12.5,
      lng: -53.75,
    },
  ],
  reddit_subreddits: [
    "UnresolvedMysteries",
    "archaeology",
    "history",
    "AskHistorians",
  ],
  reddit_keywords: [
    "percy fawcett",
    "lost city of z",
    "dead horse camp",
    "mato grosso",
    "manuscript 512",
    "kuhikugu",
  ],
  status: "active",
  image_url: "/mysteries/lostz-hero.jpg",
  created_at: "2026-03-22T00:00:00Z",
  updated_at: "2026-03-22T00:00:00Z",
};
