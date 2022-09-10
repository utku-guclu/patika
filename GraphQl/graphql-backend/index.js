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
`;

const resolvers = {
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
  .listen(4001)
  .then(({ url }) => console.log(`Graphql server is up at ${url}!`));
