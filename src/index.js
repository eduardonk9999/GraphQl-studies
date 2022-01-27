const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }
  type Query {
    hello: String
    users: [User!]!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world',
    users: () => [
      { _id: String(Math.random()), name: 'Eduardo', email: 'eduardo@gmail.com', active: true},
      { _id: String(Math.random()), name: 'Eduardo2', email: 'eduardo2@gmail.com', active: true},
      { _id: String(Math.random()), name: 'Eduardo3', email: 'eduardo3@gmail.com', active: false}
    ]
  }
}


const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then((url) => console.log(`Server Stardet at ${url}`));
