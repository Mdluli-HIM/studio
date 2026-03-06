import { notFound } from "next/navigation";
import { ProjectHero } from "@/components/project/project-hero";
import { ProjectStory } from "@/components/project/project-story";
import { ProjectGallery } from "@/components/project/project-gallery";
import { ProjectMetaSticky } from "@/components/project/project-meta-sticky";
import { ProjectPagination } from "@/components/project/project-pagination";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);

  if (index === -1) notFound();

  const project = projects[index];
  const previousProject =
    projects[(index - 1 + projects.length) % projects.length];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <>
      <ProjectHero project={project} />
      <ProjectStory project={project} />
      <ProjectMetaSticky project={project} />
      <ProjectGallery project={project} />
      <ProjectPagination
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </>
  );
}
