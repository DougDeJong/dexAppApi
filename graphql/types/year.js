const {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt} = graphql;
import monthType from './month'

// User Type
const yearType = new GraphQLObjectType({
  name: 'year',
  fields: () => ({
      id: {type: new GraphQLNonNull(GraphQLID)
      },
      months: {
        type:  new GraphQLList(monthType),
        resolve(parent, args) {
          return Month.find({ yearId: parent.id });
        }
      },
      monthlyAvgBgValues: {
        type: GraphQLList
      },
      userId: {
        type: GraphQLString
      },
      yearlyAvg: {
        type: GraphQLInt
      },
      notes: {
        type: GraphQLString
      }
    }
  )
});

module.exports = yearType;