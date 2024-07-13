import { type SchemaTypeDefinition } from "sanity";

import pageInfo from "./schemaTypes/pageInfo";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo],
};
