export interface User {
  id: string;
  phone: string;
  fullName: string;
  job: "teacher" | "developer";
}

const users: Record<"123" | "124" | "125", User> = {
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
  125: {
    id: "125",
    phone: "xxxxxxx",
    fullName: "arslonbek 125",
    job: "developer",
  },
};

export function getUser(userID: keyof typeof users): User {
  return { ...users[userID] };
}


getUser("")