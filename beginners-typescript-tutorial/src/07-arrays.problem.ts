interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Post[];
}

interface Post {
  id: number;
  title: string;
}

export const defaultUser: User = {
  id: 1,
  firstName: "Harshit",
  lastName: "Bhardwaj",
  role: "super-admin",
  posts: [
    {
      id: 1,
      title: "Typescript is fun",
    },
    {
      id: 2,
      title: "Hard work beats talent when talent doesn't work hard",
    },
  ],
};
