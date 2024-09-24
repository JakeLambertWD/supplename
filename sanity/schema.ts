import { type SchemaTypeDefinition } from "sanity";

import pageInfo from "./schemaTypes/pageInfo";
import work from "./schemaTypes/work";
import genre from "./schemaTypes/genre";
import movementGenre from "./schemaTypes/movementGenre";
import workImage from "./schemaTypes/workImage";
import teamMember from "./schemaTypes/teamMember";
import awardsPage from "./schemaTypes/awardsPage";
import homePage from "./schemaTypes/homePage";
import bio from "./schemaTypes/bio";
import blockContent from "./schemaTypes/blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    awardsPage,
    work,
    genre,
    movementGenre,
    teamMember,
    pageInfo,
    workImage,
    bio,
    blockContent,
  ],
};
