export interface User {
  id: string;
  phone: string;
  fullName: string;
  job: "teacher" | "developer";
}

const users = {
  123: {
    id: "123",
    phone: "xxxxxxx",
    fullName: "arslonbek 123",
    job: "teacher",
  },
  124: {
    id: "124",
    phone: "xxxxxxx",
    fullName: "arslonbek 124",
    job: "developer",
  },
};

export function getUser(userID: string): User {
  return { ...users[userID] };
}
