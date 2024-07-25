import { type SchemaTypeDefinition } from "sanity";

import pageInfo from "./schemaTypes/pageInfo";
import latestWork from "./schemaTypes/latestWork";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, latestWork],
};
