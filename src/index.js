const { ApolloServer, gql } = require('apollo-server')

// Toda request eh POST
// Toda request bate no MESMO endpoint 

// Query -> GET
// Mutation -> Manipular dados POST/PUT/DELETE

// Scalater Types -> String, Int, Boolean, Float, ID

const typeDefs = gql`
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
