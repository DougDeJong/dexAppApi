const graphql = require('graphql')
const {
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType,
  GraphQLQueryType,
  isOutputType
} = graphql;

var queries = require ('./queries/user');
var mutations = require ('./mutations')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    query: new GraphQLObjectType({
          name: 'UserQueries',
          fields: queries
        })


  }
});

console.log(RootQuery)
//   query: new GraphQLObjectType({
//     name: 'UserQueries',
//     fields: queries
//   })
// })
 
// const Mutation = new GraphQLObjectType({
//     name: 'Mutation',
//     fields: mutations
//   });


  module.exports = new GraphQLSchema({
    query: RootQuery,
  })

