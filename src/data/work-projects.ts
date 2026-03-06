export type WorkCategory =
  | "Photography"
  | "Film"
  | "Fashion"
  | "Promotional"
  | "Portrait";

export type WorkProject = {
  id: string;
  title: string;
  slug: string;
  category: WorkCategory;
  year: string;
  image: string;
  size: "large" | "medium" | "small";
};

export const workProjects: WorkProject[] = [
  {
    id: "01",
    title: "Noir Faces",
    slug: "noir-faces",
    category: "Portrait",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
    size: "large",
  },
  {
    id: "02",
    title: "Velvet Motion",
    slug: "velvet-motion",
    category: "Film",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1600&auto=format&fit=crop",
    size: "medium",
  },
  {
    id: "03",
    title: "Afterlight",
    slug: "afterlight",
    category: "Promotional",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop",
    size: "small",
  },
  {
    id: "04",
    title: "Monochrome Skin",
    slug: "noir-faces",
    category: "Fashion",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop",
    size: "small",
  },
  {
    id: "05",
    title: "Quiet Frames",
    slug: "noir-faces",
    category: "Photography",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1600&auto=format&fit=crop",
    size: "medium",
  },
  {
    id: "06",
    title: "Night Editorial",
    slug: "velvet-motion",
    category: "Fashion",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1600&auto=format&fit=crop",
    size: "large",
  },
];
