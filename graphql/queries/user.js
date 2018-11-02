const graphql = require('graphql')
const {GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID
} = graphql

var User = require('../../models/user');
var UserType = require('../types/user');


const UserQuery = new GraphQLObjectType({
  name: 'UserQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return User.findById(args.id);
      }
    },
  }
})

module.exports = new GraphQLSchema({ UserQuery }) 
