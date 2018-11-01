const {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt} = graphql;
import dayType from './day'

// User Type
const monthType = new GraphQLObjectType({
  name: 'month',
  fields: () => ({
      id: {type: new GraphQLNonNull(GraphQLID)
      },
      name: {
        types: new GraphQLString
      },
      dates: {
        type:  new GraphQLList(dayType),
        resolve(parent, args) {
          return Day.find({ monthId: parent.id });
        }
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
      year:  {
        type: YearType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Year.findById(args.id);
        },
      },
      notes: {
        type: GraphQLString
      }
    }
  )
});

module.exports = monthType;