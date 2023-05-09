import {
    GraphQLFieldConfig, GraphQLFieldConfigMap,
    GraphQLInt, GraphQLObjectType,
    GraphQLObjectTypeConfig, GraphQLString, GraphQLTypeResolver, GraphQLUnionType
} from 'graphql'
import { entityIType } from './base.js'

let dogTypeFieldType: GraphQLFieldConfig<any, any> = {
    type: GraphQLString,
    description: "type of DogType as String",
}

let dogTypeFields: GraphQLFieldConfigMap<any, any> = {
    type: dogTypeFieldType,
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    funname: { type: GraphQLString }
}

let dogTypeConfig: GraphQLObjectTypeConfig<any, any> = {
    name: "DogType",
    description: "a type for a dog.",
    interfaces: [entityIType],
    fields: () => (dogTypeFields),
}

export let dogType = new GraphQLObjectType(dogTypeConfig)

let catTypeConfig: GraphQLObjectTypeConfig<any, any> = {
    name: "CatType",
    description: "a type for a cat.",
    interfaces: [entityIType],
    fields: () => ({
        type: {
            type: GraphQLString,
            description: "Graphql type of object."
        },
        name: {
            type: GraphQLString,
            description: "name of guineapig",
        },
        age:
        {
            type: GraphQLInt,
            description: "Age of animal.",
        },
        nickname: {
            type: GraphQLString,
            description: "nickname of guineapig",
        },
    }),
}

export let catType = new GraphQLObjectType(catTypeConfig)

export let resolvePetType2: GraphQLTypeResolver<any, any> = (obj: any, contextValue: any, info: any) => {

    let executor: (
        resolve: (value: string | PromiseLike<string | undefined> | undefined) => void,
        reject: (reason?: any) => void) => void =
        (resolve, reject): void => {
            if ("type" in obj) {
                if (obj.type === 'catType') {
                    resolve('CatType');
                }
                else if (obj.type === 'dogType') {
                    resolve('DogType')
                } else {
                    reject(undefined)
                }
            }
            reject(undefined)
        }


    const promise: Promise<string | undefined> = new Promise(executor)

    return promise; // GraphQLError is thrown
}

export let petType = new GraphQLUnionType({
    name: "Pet",
    types: [dogType, catType],
    description: "Type for all pets.",
    resolveType: resolvePetType2
})

