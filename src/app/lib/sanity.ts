import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "0s60p7qc",
  dataset: "suppledb",
  apiVersion: "2024-07-07",
  useCdn: false,
});

export async function getPageInfo() {
  const pageInfo = await client.fetch('*[_type == "pageInfo"]');
  return pageInfo;
}
