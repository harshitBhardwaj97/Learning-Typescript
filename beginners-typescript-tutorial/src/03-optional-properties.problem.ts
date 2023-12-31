import { expect, it } from "vitest";

type NameParams = {
  first: string;
  last?: string;
};

/*Once again the same thing can be attached inline like { first: string; last?: string } or using 
interface INameParams {
  first : string;
  last? : string;
}
REMEMBER = Use ? for optional properties
*/

export const getName = (params: NameParams) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

it("Should work with just the first name", () => {
  const name = getName({
    first: "Matt",
  });

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName({
    first: "Matt",
    last: "Pocock",
  });

  expect(name).toEqual("Matt Pocock");
});
