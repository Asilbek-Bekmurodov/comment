const videos = [
  {
    id: "post1",
    author: { username: "user1", name: "User 1" },
    body: "......",
    comments: [
      {
        id: "comment1",
        author: { username: "user2", name: "User 2" },
        comment: ".....",
      },
      {
        id: "comment2",
        author: { username: "user3", name: "User 3" },
        comment: ".....",
      },
    ],
  },
  {
    id: "post2",
    author: { username: "user2", name: "User 2" },
    body: "......",
    comments: [
      {
        id: "comment3",
        author: { username: "user3", name: "User 3" },
        comment: ".....",
      },
      {
        id: "comment4",
        author: { username: "user1", name: "User 1" },
        comment: ".....",
      },
      {
        id: "comment5",
        author: { username: "user3", name: "User 3" },
        comment: ".....",
      },
    ],
  },
  // and repeat many times
];

const newVideos = {
  video1: {
    id: "video1",
    author: { username: "user1", name: "User 1" },
    body: "......",
    comments: {
      comment1: {
        id: "comment1",
        author: { username: "user2", name: "User 2" },
        comment: ".....",
      },
      comment2: {
        id: "comment2",
        author: { username: "user3", name: "User 3" },
        comment: ".....",
      },
    },
  },
  video2: {
    id: "video2",
    author: { username: "user2", name: "User 2" },
    body: "......",
    comments: {
      comment3: {
        id: "comment3",
        author: { username: "user3", name: "User 3" },
        comment: ".....",
      },
      comment4: {
        id: "comment4",
        author: { username: "user1", name: "User 1" },
        comment: ".....",
      },
      comment5: {
        id: "comment5",
        author: { username: "user3", name: "User 3" },
        comment: ".....",
      },
    },
  },
};
const findComment = (videoID, commentID) => {
  const video = videos.find((v) => v.id === videoID);
  const comment = video.comments.find((c) => c.id === commentID);
  return comment;
};

// console.log(findComment("post2", "comment4"));

const input = [1, 2, 3, 2, 3, 1, 2, 4, 3, 3, 6, 3, 2, 2, 3, 2, 1]; // 1 => 3, 2 => 6, 3 => 6, 4 => 1, 6 => 1
const output = [2, 3, 1, 4, 6];
function sortList(list = []) {
  const counters = {};

  for (let idx = 0; idx < list.length; idx++) {
    const key = list[idx];
    counters[key] = counters[key] ? counters[key] + 1 : 1;
  }

  return counters;
}

const result = sortList(input);
console.log("result = ", result);
