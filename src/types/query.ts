import {
    GraphQLArgumentConfig, GraphQLFieldConfigMap, GraphQLList, GraphQLObjectType, GraphQLObjectTypeConfig,
    GraphQLString
} from "graphql"
import { queryTypeCatNameResolv, queryTypeCatsResolv, queryTypePersonNameResolv, queryTypePetNameResolv } from "../resolvers.js"
import { personType } from "./person.js"
import { catType, petType } from "./pets.js"

let queryTypePersonNameArg: GraphQLArgumentConfig = {
    description: "Person name argument for person query",
    type: GraphQLString,
}

let queryTypePetNameArg: GraphQLArgumentConfig = {
    description: "pet name argument for pet query",
    type: GraphQLString,
}

let queryTypeCatNameArg: GraphQLArgumentConfig = {
    description: "cat name argument for cat query",
    type: GraphQLString,
}

let queryTypeFields: GraphQLFieldConfigMap<any, any> = {
    person: {
        description: "Query for person.",
        type: personType,
        args: {
            name: queryTypePersonNameArg,
        },
        resolve: queryTypePersonNameResolv,
    },
    cats: {
        description: "Query for all cats.",
        type: new GraphQLList(catType),
        resolve: queryTypeCatsResolv,
    },
    pet: {
        description: "Query for pets.",
        type: petType,
        args: {
            name: queryTypePetNameArg,
        },
        resolve: queryTypePetNameResolv,
    },
    cat: {
        description: "Query for cats.",
        type: catType,
        args: {
            name: queryTypeCatNameArg,
        },
        resolve: queryTypeCatNameResolv,
    },
}

let queryTypeConfig: GraphQLObjectTypeConfig<any, any> = {
    name: "Query",
    description: "type for my graphql queries.",
    fields: queryTypeFields,
}

// Define the Query type
export let queryType = new GraphQLObjectType(queryTypeConfig)
