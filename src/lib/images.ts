// Real stock photography from Unsplash (no AI-generated imagery).
// Each URL is a stable Unsplash photo ID with resize params.
const U = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  hero: U("photo-1449426468159-d96dbf08f19f", 1920), // ATV / offroad
  atv: U("photo-1449426468159-d96dbf08f19f", 1200),
  utv: U("photo-1583743089695-4b816a340f82", 1200), // side by side / off road buggy
  motorcycle: U("photo-1568772585407-9361f9bf3a87", 1200), // sport motorcycle
  jetski: U("photo-1530866495561-507c9faab2ed", 1200), // jet ski water
  performance: U("photo-1486262715619-67b85e0b08d3", 1200), // engine
  custom: U("photo-1504222490345-c075b6008014", 1200), // workshop tools
  workshop: U("photo-1580274455191-1c62238fa333", 1600), // mechanic hands
  garage: U("photo-1517524008697-84bbe3c3fd98", 1600), // mechanic in garage
} as const;