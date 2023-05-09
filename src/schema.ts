import {
    GraphQLSchema, GraphQLSchemaConfig
} from 'graphql'
import { oddType, rgbType } from './types/base.js'
import { personInputType } from './types/input.js'
import { addressType, personType } from './types/person.js'
import { catType, dogType, petType } from './types/pets.js'
import { queryType } from './types/query.js'

//import { } from '@graphql-tools/utils'
//import {  } from '@graphql-tools/schema'


let schemaconfig: GraphQLSchemaConfig = {
    description: "A schema for testing",
    query: queryType,
    types: [personType, addressType, catType, dogType, petType, rgbType, oddType, personInputType],
}

export let schema: GraphQLSchema = new GraphQLSchema(schemaconfig)


