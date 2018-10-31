const {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} = graphql;

// User Type
exports.dayType = new GraphQLObjectType({
  name: 'day',
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      date: {
        type: GraphQLString
      }
    }
  }
});