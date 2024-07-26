import { type SchemaTypeDefinition } from "sanity";

import pageInfo from "./schemaTypes/pageInfo";
import latestWork from "./schemaTypes/latestWork";
import work from "./schemaTypes/work";
import genre from "./schemaTypes/genre";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, latestWork, work, genre],
};
