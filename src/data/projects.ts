export type ProjectCredit = {
  role: string;
  value: string;
};

export type ProjectGalleryItem = {
  type: "image";
  src: string;
  alt: string;
  aspect: "wide" | "portrait" | "landscape";
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  location: string;
  client: string;
  services: string[];
  heroImage: string;
  intro: string;
  description: string;
  credits: ProjectCredit[];
  gallery: ProjectGalleryItem[];
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "noir-faces",
    title: "Noir Faces",
    category: "Editorial Portraits",
    year: "2026",
    location: "Cape Town",
    client: "Studio Commission",
    services: ["Photography", "Creative Direction", "Retouching"],
    heroImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1800&auto=format&fit=crop",
    intro:
      "A monochrome portrait study shaped around atmosphere, presence, and quiet intensity.",
    description:
      "Noir Faces explores contrast, skin, shadow, and expression through a stripped-back editorial lens. The project was designed to feel tactile and cinematic, balancing restraint with emotional presence. Each frame was treated as a still from a larger visual narrative, allowing the subject to carry the atmosphere with minimal distraction.",
    credits: [
      { role: "Client", value: "Studio Commission" },
      { role: "Direction", value: "High End Visuals" },
      { role: "Photography", value: "High End Visuals" },
      { role: "Post", value: "Retouch & Grade" },
    ],
    gallery: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1800&auto=format&fit=crop",
        alt: "Noir Faces image 1",
        aspect: "wide",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1800&auto=format&fit=crop",
        alt: "Noir Faces image 2",
        aspect: "portrait",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1800&auto=format&fit=crop",
        alt: "Noir Faces image 3",
        aspect: "landscape",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1800&auto=format&fit=crop",
        alt: "Noir Faces image 4",
        aspect: "portrait",
      },
    ],
  },
  {
    id: "02",
    slug: "velvet-motion",
    title: "Velvet Motion",
    category: "Campaign Photography",
    year: "2026",
    location: "Johannesburg",
    client: "Private Brand",
    services: ["Photography", "Direction", "Editing"],
    heroImage:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1800&auto=format&fit=crop",
    intro:
      "A campaign-led visual series focused on rhythm, silhouette, and visual control.",
    description:
      "Velvet Motion was developed as a premium campaign language built around slow visual pacing, controlled composition, and a refined monochrome palette. The creative direction emphasized physicality, negative space, and elegant tension between softness and structure.",
    credits: [
      { role: "Client", value: "Private Brand" },
      { role: "Direction", value: "High End Visuals" },
      { role: "Photography", value: "High End Visuals" },
      { role: "Edit", value: "Post Production Team" },
    ],
    gallery: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1800&auto=format&fit=crop",
        alt: "Velvet Motion image 1",
        aspect: "wide",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop",
        alt: "Velvet Motion image 2",
        aspect: "landscape",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1800&auto=format&fit=crop",
        alt: "Velvet Motion image 3",
        aspect: "portrait",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1800&auto=format&fit=crop",
        alt: "Velvet Motion image 4",
        aspect: "portrait",
      },
    ],
  },
  {
    id: "03",
    slug: "afterlight",
    title: "Afterlight",
    category: "Promotional Visuals",
    year: "2025",
    location: "Durban",
    client: "Launch Campaign",
    services: ["Photography", "Promotional", "Creative Direction"],
    heroImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1800&auto=format&fit=crop",
    intro:
      "A premium promotional visual set built to feel luminous, intimate, and modern.",
    description:
      "Afterlight was created for a launch-driven visual campaign that needed stills with elegance, emotional immediacy, and strong digital versatility. The project blends fashion sensitivity with commercial clarity, using light as the primary storytelling device.",
    credits: [
      { role: "Client", value: "Launch Campaign" },
      { role: "Creative", value: "High End Visuals" },
      { role: "Photography", value: "High End Visuals" },
      { role: "Delivery", value: "Digital Campaign Assets" },
    ],
    gallery: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1800&auto=format&fit=crop",
        alt: "Afterlight image 1",
        aspect: "wide",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1800&auto=format&fit=crop",
        alt: "Afterlight image 2",
        aspect: "portrait",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1800&auto=format&fit=crop",
        alt: "Afterlight image 3",
        aspect: "landscape",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1800&auto=format&fit=crop",
        alt: "Afterlight image 4",
        aspect: "portrait",
      },
    ],
  },
];
