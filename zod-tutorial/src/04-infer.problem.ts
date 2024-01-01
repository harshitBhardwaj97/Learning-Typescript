// CODE

import { z } from "zod";

const StarWarsPerson = z.object({
  name: z.string(),
  height: z.string(),
  mass: z.string(),
  hair_color: z.string(),
  skin_color: z.string(),
  eye_color: z.string(),
  birth_year: z.string(),
  gender: z.string(),
  homeworld: z.string(),
  films: z.array(z.string()),
  species: z.array(z.string()),
  vehicles: z.array(z.string()),
  starships: z.array(z.string()),
  created: z.string(),
  edited: z.string(),
  url: z.string(),
});

type Result = z.infer<typeof StarWarsPerson>;

const StarWarsPeopleResults = z.object({
  count: z.number(),
  next: z.union([z.string(), z.null()]),
  previous: z.union([z.string(), z.null()]),
  results: z.array(StarWarsPerson),
});

type SWPeopleResult = z.infer<typeof StarWarsPeopleResults>;

const logStarWarsPeopleResults = (data: SWPeopleResult) => {
  //                                    ^ 🕵️‍♂️
  data.results.map((person) => {
    console.log(person.name);
  });
};
