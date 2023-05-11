import { GraphQLFieldResolver, GraphQLResolveInfo } from "graphql"
import { IncomingMessage } from "http"
import { cats, persons, pets } from "./data.js"
import { Address, Person } from "./model/Person.js"
import { Cat, Dog } from "./model/Pet.js"

//Query Resolvers
export let queryTypePersonNameResolv: GraphQLFieldResolver<any, IncomingMessage> =
    (_, { name }, context: IncomingMessage, info: GraphQLResolveInfo): Person | undefined => {
        return persons.get(name)
    }

export let queryTypePetNameResolv: GraphQLFieldResolver<any, IncomingMessage> =
    (_, { name }, context: IncomingMessage, info: GraphQLResolveInfo): Dog | Cat | undefined => {
        return pets.get(name)
    }

export let queryTypeCatsResolv: GraphQLFieldResolver<any, IncomingMessage> =
    (_, { }, context: IncomingMessage, info: GraphQLResolveInfo): IterableIterator<Cat> => {
        return cats.values()
    }

export let queryTypeCatNameResolv: GraphQLFieldResolver<any, IncomingMessage> =
    (_, { name }, context: IncomingMessage, info: GraphQLResolveInfo): Cat | undefined => {
        return cats.get(name)
    }



//Entity Field Resolvers
export let addressTypeCityResolv: GraphQLFieldResolver<Address, IncomingMessage> =
    (_: Address, { }, context: IncomingMessage, info: GraphQLResolveInfo): string => {
        return "Nuremberg"
    }

export let addressTypeFormattedResolv: GraphQLFieldResolver<Address, IncomingMessage> =
    (obj: Address, { }, context: IncomingMessage, info: GraphQLResolveInfo): string => {
        return obj.street + " " + obj.number
    }

export let personTypeFullnameResolv: GraphQLFieldResolver<Person, IncomingMessage> =
    (obj: Person, { }, context: IncomingMessage, info: GraphQLResolveInfo): string => {
        console.log(context.httpVersion)
        return obj.name + " " + obj.surname
    }
