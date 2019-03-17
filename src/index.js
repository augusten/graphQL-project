const { GraphQLServer } = require('graphql-yoga');

const { Prisma } = require('prisma-binding');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');


const resolvers = {
  Query,
  Mutation,
  Subscription
};

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/auguste-nausedaite/dmp-graphql/dmp-graphql',
      secret: 'mysecret123',
      debug: true,
    }),
  }),
});

server.start(() => console.log(`GraphQL Application layer server is running on http://localhost:4000`));
