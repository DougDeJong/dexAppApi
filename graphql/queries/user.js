const graphql = require('graphql')
const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema
} = graphql

var User = require('../../models/user');
var userType = require('../types/user');


const UserQuery = new GraphQLObjectType({
  name: 'UserQueryType',
  fields: {

      user: {
        type: new GraphQLList(userType),
        resolve(parent, args) {
          const user = User.findById(args.id)
          if (!user) {
            throw new Error('Error')
          }
          return user
        }
        }
      }
  })

module.exports = new GraphQLSchema ({
  query: UserQuery })