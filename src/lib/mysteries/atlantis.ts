import type { Mystery } from "@/types/mystery";

export const ATLANTIS_MYSTERY: Mystery = {
  id: "atlantis-001",
  slug: "atlantis",
  title: "The Lost Civilization of Atlantis",
  subtitle: "Plato's sunken island — myth or memory?",
  description: `First described by the Greek philosopher Plato in his dialogues *Timaeus* and *Critias* (~360 BCE), Atlantis was portrayed as a powerful naval empire situated "beyond the Pillars of Hercules" — the ancient name for the Strait of Gibraltar. According to Plato, the civilization was advanced beyond its time, commanding dominion over much of Europe and Africa before being swallowed by the sea "in a single day and night of misfortune" around 9600 BCE.

For over two millennia, scholars have debated whether Atlantis was a philosophical allegory, a distorted folk memory of a real catastrophe, or something in between. No direct archaeological evidence has confirmed the legend, but several compelling candidate locations have emerged.

The **Minoan civilization** of Crete and Thera (modern Santorini) remains the strongest archaeological parallel. The catastrophic eruption of Thera (~1600 BCE) devastated the Aegean world and may have inspired the Atlantis myth via Egyptian oral tradition passed to Plato's source, the statesman Solon.

The **Richat Structure** in Mauritania — nicknamed the "Eye of the Sahara" — gained renewed attention between 2018 and 2024 as a potential land-based candidate. Its concentric ring formation matches Plato's description of Atlantis's layout, though it sits in the Sahara rather than under the sea.

The **Bimini Road**, discovered in 1968 off the coast of the Bahamas, is an underwater formation of flat limestone blocks that some researchers interpret as a constructed roadway or wall, while geologists generally classify it as a natural beachrock formation.

Other serious candidates include **Dogger Bank** in the North Sea (a landmass submerged after the last ice age) and **Spartel Island** near Gibraltar, which was above sea level until roughly 9000 BCE.`,
  known_facts: [
    {
      date: "~360 BCE",
      fact: "Plato introduces Atlantis in Timaeus and Critias, attributing the account to the Athenian statesman Solon who allegedly heard it from Egyptian priests",
      source_url: "https://en.wikipedia.org/wiki/Atlantis",
    },
    {
      date: "~9600 BCE",
      fact: "Plato places the destruction of Atlantis approximately 9,000 years before Solon's time — sinking 'in a single day and night' due to divine punishment",
    },
    {
      date: "~1620 BCE",
      fact: "Massive eruption of Thera (Santorini) devastates the Minoan civilization on Crete and surrounding Aegean islands — strongest archaeological parallel to the Atlantis account",
      source_url: "https://en.wikipedia.org/wiki/Minoan_eruption",
    },
    {
      date: "1968",
      fact: "The Bimini Road is discovered by divers near North Bimini Island, Bahamas — a 0.8-mile formation of flat limestone blocks interpreted by some as artificial construction",
      source_url: "https://en.wikipedia.org/wiki/Bimini_Road",
    },
    {
      date: "2001",
      fact: "Researcher Ulf Erlingsson publishes analysis arguing Plato's geographic description matches the size and location of Ireland rather than any mid-Atlantic landmass",
    },
    {
      date: "2011",
      fact: "Archaeologist Richard Freund leads a team using deep-ground radar in the marshes of southern Spain, near Doñana National Park, reporting buried circular structures consistent with Plato's description",
      source_url: "https://en.wikipedia.org/wiki/Atlantis#Andalusia",
    },
    {
      date: "2018-2024",
      fact: "The Richat Structure (Eye of the Sahara) in Mauritania gains significant online attention as a candidate site — its concentric ring topology, approximate size, and proximity to the Atlas Mountains align with several elements of Plato's account",
      source_url: "https://en.wikipedia.org/wiki/Richat_Structure",
    },
    {
      date: "2024",
      fact: "No peer-reviewed excavation has confirmed Atlantis at any candidate site; mainstream scholarship continues to regard the story as either Platonic allegory or a mythologized memory of Aegean Bronze Age collapse",
    },
  ],
  search_zone: {
    type: "Polygon",
    coordinates: [
      [
        [-80.0, 10.0],
        [-5.0, 10.0],
        [-5.0, 45.0],
        [-20.0, 45.0],
        [-40.0, 30.0],
        [-80.0, 20.0],
        [-80.0, 10.0],
      ],
    ],
  },
  center_lat: 35.4,
  center_lng: -24.5,
  default_zoom: 4,
  default_layers: ["gibs-modis-truecolor"],
  timeline: [
    {
      date: "~9600 BCE",
      event: "Plato's reported date for the destruction and submersion of Atlantis",
      lat: 35.4,
      lng: -24.5,
    },
    {
      date: "~1620 BCE",
      event: "Eruption of Thera (Santorini) — collapse of Minoan civilization, likely source material for the Atlantis account",
      lat: 36.4,
      lng: 25.4,
    },
    {
      date: "~560 BCE",
      event: "Solon visits Egypt and reportedly hears the Atlantis account from priests at Saïs",
      lat: 30.97,
      lng: 30.77,
    },
    {
      date: "~360 BCE",
      event: "Plato writes Timaeus and Critias, introducing Atlantis to the Western world",
      lat: 37.97,
      lng: 23.73,
    },
    {
      date: "1968-09-02",
      event: "Bimini Road discovered by divers J. Manson Valentine, Jacques Mayol, and Robert Angove off North Bimini Island, Bahamas",
      lat: 25.78,
      lng: -79.3,
    },
    {
      date: "2001-01-01",
      event: "Underwater structures reported near Pinar del Río, Cuba — sonar anomalies at ~600–750 meters depth spark speculation before geological explanation is proposed",
      lat: 22.5,
      lng: -83.5,
    },
    {
      date: "2011-03-12",
      event: "Richard Freund's team identifies buried circular structures in Doñana marshlands, southern Spain, using deep-ground radar",
      lat: 36.9,
      lng: -6.5,
    },
    {
      date: "2018-01-01",
      event: "Richat Structure (Eye of the Sahara) goes viral as Atlantis candidate — concentric rings, ~23 km diameter, located near ancient Atlantic coastline in Mauritania",
      lat: 21.12,
      lng: -11.4,
    },
  ],
  reddit_subreddits: [
    "AlternativeHistory",
    "UnresolvedMysteries",
    "archaeology",
    "Atlantis",
  ],
  reddit_keywords: [
    "atlantis",
    "richat structure",
    "eye of the sahara",
    "bimini road",
    "minoan eruption",
    "plato atlantis",
  ],
  status: "active",
  image_url: "/mysteries/atlantis-hero.jpg",
  created_at: "2026-03-22T00:00:00Z",
  updated_at: "2026-03-22T00:00:00Z",
};
