type Theme = "light" | "dark";

interface UserProfile {
  id: string;

  preferences: {
    theme: Theme;
  };
}

let user: UserProfile = {
  id: "123",
  preferences: {
    theme: "dark",
  },
};
