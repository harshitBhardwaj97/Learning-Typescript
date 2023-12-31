interface Dog {
  bark: boolean;
  purr?: boolean;
}

interface Cat {
  purr: boolean;
  bark?: boolean;
}

let cat = { purr: true };

let dog = cat as Dog;
