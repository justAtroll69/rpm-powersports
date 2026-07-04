// Real stock photography from Unsplash (no AI-generated imagery).
// Each URL is a stable Unsplash photo ID with resize params.
const U = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  hero: "/__l5e/assets-v1/505f813c-51ea-467e-89aa-d3821e8c09db/atv-real.jpg",
  atv: "/__l5e/assets-v1/505f813c-51ea-467e-89aa-d3821e8c09db/atv-real.jpg",
  utv: U("photo-1583743089695-4b816a340f82", 1200), // side by side / off road buggy
  motorcycle: U("photo-1568772585407-9361f9bf3a87", 1200), // sport motorcycle
  jetski: "/__l5e/assets-v1/3973b203-fd3e-4945-8ec4-0ed03abc26a9/jetski-real.jpg",
  performance: U("photo-1486262715619-67b85e0b08d3", 1200), // engine
  custom: U("photo-1504222490345-c075b6008014", 1200), // workshop tools
  workshop: U("photo-1580274455191-1c62238fa333", 1600), // mechanic hands
  garage: U("photo-1517524008697-84bbe3c3fd98", 1600), // mechanic in garage
} as const;