import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "0s60p7qc",
  dataset: "suppledb",
  apiVersion: "2024-07-07",
  useCdn: false,
});

export async function getPageInfo() {
  const pageInfo = await client.fetch(
    '*[_type == "pageInfo"]{ jobTitle, "imageURL": logo.asset->url }'
  );
  return pageInfo;
}

export async function getLatestWork() {
  const latestWork = await client.fetch(
    '*[_type == "latestWork"] { client, title, youtubeID, "tileImage": tileImage.asset->url, "logo": logo.asset->url }'
  );
  return latestWork;
}

export async function getGenres() {
  const genres = await client.fetch('*[_type == "genre"]{ name }');
  return genres;
}

export async function getWorks() {
  const works = await client.fetch(
    '*[_type == "work"] { client, team, description, overview, workImages[] { asset->{ url }, alt }, movementGenres[]->{ name }, youtubeID, "tileImage": tileImage.asset->url, projectGenre->{ name } }'
  );
  return works;
}
