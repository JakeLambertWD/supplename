import { type SchemaTypeDefinition } from "sanity";

import pageInfo from "./schemaTypes/pageInfo";
import work from "./schemaTypes/work";
import genre from "./schemaTypes/genre";
import movementGenre from "./schemaTypes/movementGenre";
import workImage from "./schemaTypes/workImage";
import award from "./schemaTypes/award";
import teamMember from "./schemaTypes/teamMember";
import awardsPage from "./schemaTypes/awardsPage";
import homePage from "./schemaTypes/homePage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageInfo,
    work,
    genre,
    movementGenre,
    workImage,
    teamMember,
    award,
    homePage,
    awardsPage,
  ],
};
