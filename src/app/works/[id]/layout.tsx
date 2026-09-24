import { projects } from "@/app/dataSets/dataSets";
import type { Metadata } from "next";

const SITE_NAME = "Supple Nam";
const DEFAULT_DESCRIPTION =
  "Explore choreography, movement direction, and commercial work by Supple Nam.";

function titleFromSlug(slug: string) {
  return slug
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function descriptionFromOverview(overview: string) {
  const plainText = overview.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

  if (plainText.length <= 155) {
    return plainText;
  }

  return `${plainText.slice(0, 152).trimEnd()}...`;
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const projectName = titleFromSlug(params.id);
  const project = projects.find(
    (item) => item.description.trim().toLowerCase() === projectName.toLowerCase(),
  );

  if (!project) {
    return {
      title: `Project Not Found | ${SITE_NAME}`,
      description: DEFAULT_DESCRIPTION,
    };
  }

  const keywords = [
    project.client,
    project.description,
    project.projectGenre?.name,
    ...project.movementGenres.map((genre) => genre.name),
    ...project.team.map((member) => member.name),
    "Supple Nam",
    "choreographer",
    "choreography",
    "movement direction",
  ].filter(Boolean);

  const title = `${project.client}: ${project.description} | ${SITE_NAME}`;
  const description = descriptionFromOverview(project.overview);

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

export default function WorkLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
