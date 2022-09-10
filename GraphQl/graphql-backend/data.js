const users = [
  {
    id: "1",
    fullName: "Jack Black",
  },
  {
    id: "2",
    fullName: "Bruce Lee",
  },
];

const posts = [
  {
    id: "1",
    title: "Jack Black's call!",
    user_id: "1",
  },
  {
    id: "2",
    title: "Jack Black's another call!",
    user_id: "1",
  },
  {
    id: "3",
    title: "Bruce Lee's call!",
    user_id: "2",
  },
];

const comments = [
  {
    id: "1",
    text: "Jajaja",
    post_id: "1",
    user_id: "1",
  },
  {
    id: "2",
    text: "cyka blyat!",
    post_id: "1",
    user_id: "1",
  },
  {
    id: "3",
    text: "Tenecious D!!",
    post_id: "2",
    user_id: "1",
  },
  {
    id: "4",
    text: "be water my friend!",
    post_id: "3",
    user_id: "2",
  },
];

module.exports = {
  users,
  posts,
  comments,
};
