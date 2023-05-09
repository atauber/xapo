import {
    GraphQLInputObjectType, GraphQLInputObjectTypeConfig, GraphQLNonNull, GraphQLString
} from "graphql"

let personInputTypeConfig: GraphQLInputObjectTypeConfig = {
    name: "PersonInputType",
    description: "Input type for person search.",
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
            defaultValue: "andreas",
        },
    },
}

export let personInputType: GraphQLInputObjectType = new GraphQLInputObjectType(personInputTypeConfig)
