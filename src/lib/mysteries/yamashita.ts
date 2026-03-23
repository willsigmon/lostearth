import type { Mystery } from "@/types/mystery";

export const YAMASHITA_MYSTERY: Mystery = {
  id: "yamashita-001",
  slug: "yamashitas-gold",
  title: "Yamashita's Gold",
  subtitle: "Billions in WWII loot hidden in Philippine tunnels",
  description: `During World War II, Japanese forces under General Tomoyuki Yamashita allegedly looted vast quantities of gold, jewels, and cultural treasures from across Southeast Asia — Thailand, Malaya, Singapore, Indonesia, and the Philippines — accumulating wealth plundered from banks, temples, museums, and private citizens across the region.

As Japan's defeat became inevitable in 1945, the treasure was reportedly concealed in a network of tunnels, caves, and underground vaults across the Philippine archipelago, particularly in the mountains of northern Luzon, to prevent its capture by Allied forces. Yamashita surrendered to U.S. forces on September 2, 1945, and was executed for war crimes the following year — taking whatever knowledge he had of the treasure's location with him.

In 1971, Filipino locksmith Roger Roxas claimed to have discovered a tunnel beneath Baguio City containing a golden Buddha statue packed with gold bars and hundreds of stacked gold bullion. He alleged the discovery was reported to authorities, after which Ferdinand Marcos's agents seized the treasure and placed Roxas under arrest. Roxas later sued the Marcos estate in a Hawaii court, winning a landmark $22 billion judgment (subsequently reduced on appeal) — one of the largest civil judgments in history at the time.

Philippine President Ferdinand Marcos himself reportedly conducted secret excavations during his dictatorship (1965–1986), and some researchers believe he used recovered treasure to fund his personal fortune. Treasure hunters continue to dig across Luzon to this day, with hundreds of active sites reported in the provinces around Baguio, Bambang, and Teresa in Rizal province.`,
  known_facts: [
    {
      date: "1945-02",
      fact: "General Tomoyuki Yamashita's forces allegedly begin concealing looted treasure in tunnels and caves across the Philippine islands ahead of the Allied advance",
      source_url: "https://en.wikipedia.org/wiki/Yamashita%27s_gold",
    },
    {
      date: "1945-09-02",
      fact: "General Yamashita surrenders to U.S. forces at Kiangan, Ifugao — the last major Japanese commander to surrender in the Philippines",
    },
    {
      date: "1946-02-23",
      fact: "Yamashita is executed by hanging for war crimes convictions; any firsthand knowledge of treasure locations is lost",
    },
    {
      date: "1971",
      fact: "Roger Roxas, a Filipino locksmith, claims to discover a tunnel near Baguio City containing a large golden Buddha statue and hundreds of gold bars",
      source_url: "https://en.wikipedia.org/wiki/Roger_Roxas",
    },
    {
      date: "1971",
      fact: "Roxas alleges that agents of President Ferdinand Marcos seized the golden Buddha and bullion after his discovery was reported, and that he was subsequently imprisoned and tortured",
    },
    {
      date: "1988",
      fact: "Roxas files suit in Hawaii against Ferdinand Marcos and his estate; the case becomes one of the defining legal battles over alleged Marcos ill-gotten wealth",
    },
    {
      date: "1996",
      fact: "A Hawaii jury awards Roger Roxas and the Golden Budha Corporation $22 billion in damages against the Marcos estate — one of the largest civil judgments in history at the time",
    },
    {
      date: "2025",
      fact: "Treasure hunters remain active across northern Luzon; Philippine authorities continue to investigate and occasionally shut down unauthorized excavation sites in Baguio, Bambang, and Rizal province",
    },
  ],
  search_zone: {
    type: "Polygon",
    coordinates: [
      [
        [119.5, 14.5],
        [122.5, 14.5],
        [122.5, 18.5],
        [119.5, 18.5],
        [119.5, 14.5],
      ],
    ],
  },
  center_lat: 16.41,
  center_lng: 120.59,
  default_zoom: 8,
  default_layers: ["gibs-modis-truecolor"],
  timeline: [
    {
      date: "1941-12-08T00:00:00Z",
      event: "Japan invades the Philippines; looting of banks, temples, and institutions begins across Southeast Asia",
      lat: 14.5995,
      lng: 120.9842,
    },
    {
      date: "1945-01-09T00:00:00Z",
      event: "Allied forces land at Lingayen Gulf, northern Luzon; Japanese begin accelerating concealment of looted assets",
      lat: 16.025,
      lng: 120.2356,
    },
    {
      date: "1945-09-02T00:00:00Z",
      event: "General Yamashita surrenders at Kiangan, Ifugao province",
      lat: 16.8333,
      lng: 121.0833,
    },
    {
      date: "1971-01-01T00:00:00Z",
      event: "Roger Roxas claims discovery of golden Buddha and gold bars in tunnel near Baguio City",
      lat: 16.4023,
      lng: 120.596,
    },
    {
      date: "1972-01-01T00:00:00Z",
      event: "Marcos declares martial law; alleged state-sponsored treasure recovery operations reportedly intensify under cover of martial law",
      lat: 14.5995,
      lng: 120.9842,
    },
    {
      date: "1988-01-01T00:00:00Z",
      event: "Roxas files landmark lawsuit against Marcos estate in Hawaii federal court",
      lat: 21.3069,
      lng: -157.8583,
    },
    {
      date: "1996-01-01T00:00:00Z",
      event: "$22 billion judgment awarded to Roxas and Golden Budha Corporation against Marcos estate",
      lat: 21.3069,
      lng: -157.8583,
    },
    {
      date: "2010-01-01T00:00:00Z",
      event: "Ongoing excavations reported in Teresa, Rizal province; Philippine National Police investigate multiple unauthorized dig sites",
      lat: 14.5636,
      lng: 121.4606,
    },
  ],
  reddit_subreddits: [
    "UnresolvedMysteries",
    "history",
    "Philippines",
    "treasure",
  ],
  reddit_keywords: [
    "yamashita gold",
    "yamashita treasure",
    "philippine treasure",
    "golden buddha",
    "marcos gold",
    "baguio tunnels",
  ],
  status: "active",
  image_url: "/mysteries/yamashita-hero.jpg",
  created_at: "2026-03-22T00:00:00Z",
  updated_at: "2026-03-22T00:00:00Z",
};
