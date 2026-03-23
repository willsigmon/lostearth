import type { Mystery } from "@/types/mystery";

export const GOBEKLI_MYSTERY: Mystery = {
  id: "gobekli-001",
  slug: "gobekli-tepe",
  title: "Göbekli Tepe",
  subtitle: "The temple that rewrote human history",
  description: `Göbekli Tepe is an archaeological site in southeastern Turkey near Şanlıurfa, dating to approximately 9500–8000 BCE — roughly 6,000 years before Stonehenge and 7,000 years before the Egyptian pyramids. It is the oldest known megalithic sanctuary ever discovered.

The site consists of massive T-shaped limestone pillars, some standing up to 20 feet tall and weighing as much as 10 tons, arranged in circular enclosures. The pillars are richly decorated with carved reliefs of animals including foxes, lions, scorpions, vultures, snakes, and other creatures, many rendered with striking naturalism.

What makes Göbekli Tepe uniquely challenging to our understanding of human prehistory is who built it: hunter-gatherers. These were pre-agricultural people with no permanent settlements, no writing, and no metal tools — yet they coordinated the quarrying, transport, and erection of enormous stone structures on a scale previously thought impossible without organized civilization.

Around 8000 BCE, the site was deliberately buried under tons of rubble and debris. The reason for this intentional concealment remains unknown. Only approximately 5% of the site has been excavated, leaving the vast majority of the complex still hidden underground.

A nearby site, **Karahan Tepe**, was discovered with similar T-shaped pillars and carvings, suggesting Göbekli Tepe was part of a broader regional tradition. Göbekli Tepe was designated a UNESCO World Heritage Site in 2018.`,
  known_facts: [
    {
      date: "1963",
      fact: "A joint survey by Istanbul University and the University of Chicago notes the site but dismisses the flint flakes and limestone slabs as remnants of a medieval cemetery",
      source_url: "https://en.wikipedia.org/wiki/Göbekli_Tepe",
    },
    {
      date: "1994",
      fact: "German archaeologist Klaus Schmidt visits Göbekli Tepe, recognizes the T-shaped stones as prehistoric, and begins systematic excavations",
      source_url: "https://en.wikipedia.org/wiki/Göbekli_Tepe",
    },
    {
      date: "1995",
      fact: "Radiocarbon dating confirms the site dates to at least 9500 BCE, making it the oldest known megalithic sanctuary in the world",
    },
    {
      date: "2003",
      fact: "Excavations reveal multiple circular enclosures (Enclosures A–D) each containing pairs of tall central pillars surrounded by smaller pillars set into stone walls",
    },
    {
      date: "2007",
      fact: "Ground-penetrating radar surveys estimate at least 16–20 additional enclosures remain buried, covering an area of roughly 22 acres",
    },
    {
      date: "2018-07-01",
      fact: "UNESCO designates Göbekli Tepe a World Heritage Site, recognizing its outstanding universal value to human prehistory",
      source_url: "https://whc.unesco.org/en/list/1572",
    },
    {
      date: "2019",
      fact: "Karahan Tepe, approximately 35 km from Göbekli Tepe, is confirmed to contain similar T-shaped pillars and animal carvings dating to the same era",
    },
    {
      date: "2021",
      fact: "Excavations at Karahan Tepe reveal a chamber with 11 human-headed pillars and a sculptural figure, suggesting a distinct but related ceremonial tradition",
    },
  ],
  search_zone: {
    type: "Polygon",
    coordinates: [
      [
        [38.91, 37.215],
        [38.935, 37.215],
        [38.935, 37.232],
        [38.91, 37.232],
        [38.91, 37.215],
      ],
    ],
  },
  center_lat: 37.223,
  center_lng: 38.922,
  default_zoom: 15,
  default_layers: ["gibs-modis-truecolor"],
  timeline: [
    {
      date: "9500-01-01T00:00:00Z",
      event: "Construction begins at Göbekli Tepe by pre-agricultural hunter-gatherers",
      lat: 37.223,
      lng: 38.922,
    },
    {
      date: "8000-01-01T00:00:00Z",
      event: "Site is deliberately buried under tons of debris — reason unknown",
      lat: 37.223,
      lng: 38.922,
    },
    {
      date: "1963-01-01T00:00:00Z",
      event: "Istanbul University / University of Chicago survey misidentifies the site as a medieval cemetery",
      lat: 37.223,
      lng: 38.922,
    },
    {
      date: "1994-01-01T00:00:00Z",
      event: "Klaus Schmidt begins excavations after recognizing the T-shaped stones as prehistoric",
      lat: 37.223,
      lng: 38.922,
    },
    {
      date: "2007-01-01T00:00:00Z",
      event: "Ground-penetrating radar reveals at least 16–20 buried enclosures across 22 acres",
      lat: 37.223,
      lng: 38.922,
    },
    {
      date: "2018-07-01T00:00:00Z",
      event: "UNESCO World Heritage Site designation",
      lat: 37.223,
      lng: 38.922,
    },
    {
      date: "2019-01-01T00:00:00Z",
      event: "Karahan Tepe confirmed with similar T-shaped pillars ~35 km away",
      lat: 37.271,
      lng: 39.105,
    },
    {
      date: "2021-01-01T00:00:00Z",
      event: "Karahan Tepe chamber with 11 human-headed pillars excavated, revealing a distinct ceremonial tradition",
      lat: 37.271,
      lng: 39.105,
    },
  ],
  reddit_subreddits: [
    "archaeology",
    "AlternativeHistory",
    "history",
    "AncientCivilizations",
  ],
  reddit_keywords: [
    "gobekli tepe",
    "gobeklitepe",
    "karahan tepe",
    "pre-pottery neolithic",
    "oldest temple",
    "pillar carvings",
  ],
  status: "active",
  image_url: "/mysteries/gobekli-hero.jpg",
  created_at: "2026-03-22T00:00:00Z",
  updated_at: "2026-03-22T00:00:00Z",
};
