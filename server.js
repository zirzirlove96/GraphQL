import { ApolloServer, gql } from "apollo-server";

//data의 형태
//Rest Api에서는 GET메서드에 /text하는 것과 같다
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }
  type Tweet {
    id: ID!
    text: String!
    creator: User!
  }
  type Query {
    allTweets: [Tweet!]!
    tweet(id: ID): Tweet!
  }
  type Mutation {
    postTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
`;
const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
