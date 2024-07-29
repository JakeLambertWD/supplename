import { type SchemaTypeDefinition } from "sanity";

import pageInfo from "./schemaTypes/pageInfo";
import latestWork from "./schemaTypes/latestWork";
import work from "./schemaTypes/work";
import genre from "./schemaTypes/genre";
import movementGenre from "./schemaTypes/movementGenre";
import teamMember from "./schemaTypes/teamMember";
import workImage from "./schemaTypes/workImage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageInfo,
    latestWork,
    work,
    genre,
    movementGenre,
    teamMember,
    workImage,
  ],
};
