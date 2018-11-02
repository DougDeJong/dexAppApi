const UserQuery = require('./user');
const graphql = require('graphql')
const {GraphQLObjectType, GraphQLQueryType, GraphQLSchemaType, GraphQLQuery, GraphQLSchema} = graphql

module.exports =  new GraphQLObjectType({
  name: 'UserQuery',
  query: UserQuery
})