import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt} from graphql;
import monthType from './month'

// User Type
const dayType = new GraphQLObjectType({
  name: 'day',
  fields: () => ({
      id: {type: new GraphQLNonNull(GraphQLID)
      },
      date: {
        type: GraphQLString
      },
      bgValues: {
        type: GraphQLList
      },
      userId: {
        type: GraphQLString
      },
      dailyAvg: {
        type: GraphQLInt
      },
      hourlyAvgs: {
        type: GraphQLList
      },
      month: {
        type: monthType,
        resolve(parent, args) {
          return Month.findById(parent.monthId);
        }
      },
      notes: {
        type: GraphQLString
      }
    }
  )
});

module.exports = dayType;