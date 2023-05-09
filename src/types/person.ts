import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLObjectTypeConfig,
  GraphQLString
} from 'graphql'
import { addressTypeCityResolv, addressTypeFormattedResolv, personTypeFullnameResolv } from '../resolvers.js'
import { entityIType, oddType, rgbType } from './base.js'

let personTypeConfig: GraphQLObjectTypeConfig<any, any> = {
  name: "PersonType",
  description: "A type for a person.",
  interfaces: [entityIType],
  fields: () => ({
    type: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString
    },
    surname: {
      type: GraphQLString
    },
    fullname: {
      type: GraphQLString,
      resolve: personTypeFullnameResolv,
    },
    odd: {
      type: oddType
    },
    age: {
      type: GraphQLInt
    },
    address: {
      type: addressType
    },
    bestFriend: {
      type: personType
    },
  }),
}

export let personType = new GraphQLObjectType(personTypeConfig)


let addressTypeConfig: GraphQLObjectTypeConfig<any, any> = {
  name: "AddressType",
  description: "A type for a adress.",
  interfaces: [entityIType],
  fields: () => ({
    type: {
      type: GraphQLString
    },
    street: {
      type: GraphQLString
    },
    number: {
      type: GraphQLInt
    },
    rgb: {
      type: rgbType
    },
    city: {
      type: GraphQLString,
      resolve: addressTypeCityResolv
    },
    formatted: {
      type: GraphQLString,
      resolve: addressTypeFormattedResolv
    }
  }),
}

export let addressType = new GraphQLObjectType(addressTypeConfig)
