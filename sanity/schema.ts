import { type SchemaTypeDefinition } from "sanity";

import pageInfo from "./schemaTypes/pageInfo";
import latestWork from "./schemaTypes/latestWork";
import work from "./schemaTypes/work";
import genre from "./schemaTypes/genre";
import movementGenre from "./schemaTypes/movementGenre";
import workImage from "./schemaTypes/workImage";
import award from "./schemaTypes/award";
import teamMember from "./schemaTypes/teamMember";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    latestWork,
    pageInfo,
    work,
    genre,
    movementGenre,
    workImage,
    teamMember,
    award,
  ],
};
