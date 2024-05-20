import { ApolloServer, gql } from "apollo-server";

//data의 형태
//Rest Api에서는 GET메서드에 /text하는 것과 같다
const typeDefs = gql`
  type Query {
    text: String
  }
`;
const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
