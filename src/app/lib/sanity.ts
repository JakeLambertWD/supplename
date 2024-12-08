import { createClient } from "@sanity/client";
import { GenreProps } from "../utils/typings";

export const client = createClient({
  projectId: "0s60p7qc",
  dataset: "suppledb",
  apiVersion: "2024-07-07",
  useCdn: false,
});

export async function getHomePage() {
  const homePage = await client.fetch(
    '*[_type == "homePage"] | order(order asc) { order, featuredWork->{ client, description,  "videoPreview": videoPreview.asset->url, "tileImage": tileImage.asset->url, brandColour } }'
  );
  return homePage;
}

export async function getAwards() {
  const awards = await client.fetch(
    '*[_type == "awardsPage"] | order(order asc) { name, order, work->{ client, description, "videoPreview": videoPreview.asset->url,  movementGenres[]->{ name }, "tileImage": tileImage.asset->url, projectGenre->{ name }}}'
  );
  return awards;
}

export async function getWorks() {
  const works = await client.fetch(
    '*[_type == "work" && hide != true] | order(coalesce(order, 999999999) desc) { _id, client, order, hide, description, overview, "videoURL": video.asset->url, "videoPreview": videoPreview.asset->url, workImages[] { asset->{ url }, alt }, team[]->{ name, role }, movementGenres[]->{ name }, youtubeID, "tileImage": tileImage.asset->url, projectGenre->{ name } }'
  );
  return works;
}

export async function getWorkByDescription(description: string) {
  // convert the description to match the format in the database
  const convertDescription = description
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const work = await client.fetch(
    `*[_type == "work" && hide != true && lower(description) == lower($convertDescription)] { _id, client, description, overview, "videoURL": video.asset->url, workImages[] { asset->{ url }, alt },
     team[]->{ name, role }, movementGenres[]->{ name }, youtubeID, "tileImage": tileImage.asset->url, projectGenre->{ name }, brandColour }`,
    { convertDescription }
  );
  return work;
}

export async function getWorksByGenre(genre: string) {
  const works = await client.fetch(
    `*[_type == "work" && hide != true && lower(projectGenre->name) == lower($genre)] | order(coalesce(order, 999999999) desc) { _id, client, description, "videoPreview": videoPreview.asset->url, movementGenres[]->{ name }, "tileImage": tileImage.asset->url, projectGenre->{ name } }`,
    { genre }
  );
  return works;
}

export async function getWorksWithAwards() {
  const works = await client.fetch(
    `*[_type == "awardsPage" && hide != true] | order(order asc) { work->{ _id, client, description, "videoPreview": videoPreview.asset->url, movementGenres[]->{ name }, "tileImage": tileImage.asset->url, projectGenre->{ name } }}`
  );
  return works;
}

export async function getGenres(): Promise<GenreProps[]> {
  const genres = await client.fetch<GenreProps[]>(
    '*[_type == "genre"]{ name }'
  );

  // ensure that the genre "Commercials" always appears at the start of the array
  genres.sort((a, b) => {
    if (a.name === "Commercials") return -1;
    if (b.name === "Commercials") return 1;
    return 0;
  });

  return genres;
}

export async function getPageInfo() {
  const pageInfo = await client.fetch(
    '*[_type == "pageInfo"]{ jobTitle, "imageURL": logo.asset->url, "bioImage": image.asset->url }'
  );
  return pageInfo;
}

export async function getBio() {
  const bio = await client.fetch('*[_type == "bio"]{ description, }');
  return bio;
}
