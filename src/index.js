const { ApolloServer, gql } = require('apollo-server')

// Toda request eh POST
// Toda request bate no MESMO endpoint 

// Query -> GET
// Mutation -> Manipular dados POST/PUT/DELETE

// Scalater Types -> String, Int, Boolean, Float, ID
// Entidades -> user, post, produtos

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
  }
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => 'Hello World'
  }
};

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => console.log(`Teste Started ${url}`))

