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
    '*[_type == "latestWork"] { client, title, youtubeID, "tileImage": tileImage.asset->url, "logo": logo.asset->url, "videoURL": video.asset->url }'
  );
  return latestWork;
}

export async function getGenres() {
  const genres = await client.fetch('*[_type == "genre"]{ name }');
  return genres;
}

export async function getWorks() {
  const works = await client.fetch(
    '*[_type == "work"] { client, team, description, overview, "videoURL": video.asset->url, award, workImages[] { asset->{ url }, alt }, movementGenres[]->{ name }, youtubeID, "tileImage": tileImage.asset->url, projectGenre->{ name } }'
  );
  return works;
}

export async function getAwards() {
  const awards = await client.fetch(
    '*[_type == "awardsPage"] { name, order, work->{ client, description, overview, "videoURL": video.asset->url, youtubeID, "tileImage": tileImage.asset->url, projectGenre->{ name }, award } }'
  );
  return awards;
}

export async function getHomePage() {
  const homePage = await client.fetch(
    '*[_type == "homePage"] { name, order, featuredWork->{ client, description, overview, "videoURL": video.asset->url, youtubeID, "tileImage": tileImage.asset->url, projectGenre->{ name }, award } }'
  );
  return homePage;
}

export async function getWorkByDescription(description: string) {
  // convert the description to match the format in the database
  const convertDescription = description
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const work = await client.fetch(
    `*[_type == "work" && description == $convertDescription] { client, team, description, overview, "videoURL": video.asset->url, award, workImages[] { asset->{ url }, alt }, movementGenres[]->{ name }, youtubeID, "tileImage": tileImage.asset->url, projectGenre->{ name } }`,
    { convertDescription }
  );
  return work;
}
