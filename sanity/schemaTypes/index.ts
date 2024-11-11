import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { anime } from "./anime";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, anime],
};
