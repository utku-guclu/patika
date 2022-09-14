const { ApolloServer, gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const { users, posts, comments } = require("./data");

const typeDefs = gql`
  type User {
    id: ID!
    fullName: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    user_id: ID!
    user: User!
  }

  type Comment {
    id: ID!
    text: String!
    post_id: ID!
    user: User!
  }

  type Query {
    # User
    users: [User!]!
    user(id: ID!): User!

    # Post
    posts: [Post!]!
    post(id: ID!): Post!

    #Comment
    comments: [Comment!]!
    comment(id: ID!): Comment!
  }

  type Mutation {
    createUser(fullName: String!): Boolean!
    createPost(title: String!, user_id: ID!): Post!
  }
`;

const resolvers = {
  Mutation: {
    createUser: (parent, { fullName }) => {
      const user = {
        id: 11,
        fullName,
      };
      users.push(user);
      return true;
    },
    createPost: (parent, { title, user_id }) => {
      const post = {
        id: 11,
        title,
        user_id,
      };
      posts.push(post);
      return post;
    },
  },
  Query: {
    // user
    users: () => users,
    user: (parents, args) => users.find((user) => user.id === args.id),

    // post
    posts: () => posts,
    post: (parent, args) => posts.find((post) => post.id === args.id),
    // comment
    comments: () => comments,
    comment: (parent, args) =>
      comments.find((comment) => comment.id === args.id),
  },
  User: {
    posts: (parent, args) => posts.filter((post) => post.id === parent.id),
  },
  Post: {
    user: (parent, args) => users.find((user) => user.id === parent.user_id),
  },
  Comment: {
    user: (parent) => users.find((user) => user.id === parent.user_id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      // options
    }),
  ],
});

server
  .listen(4003)
  .then(({ url }) => console.log(`Graphql server is up at ${url}!`));
