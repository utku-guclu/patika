import axios from "axios";

const getData = async (id) => {
  try {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const { data: posts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    // const post = posts.filter((post) => post.id === id);
    return { ...data, posts };
  } catch {
    console.log("shii..");
  }
};

export default getData;
