const graphql = require('graphql')
const {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} = graphql;

// User Type
const userType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
      id: {type: new GraphQLNonNull(GraphQLID)
      },
      username: {
        type: GraphQLString
      },
      password: {
        type: GraphQLString
      }
    }
  )
});


module.exports = userType