import { GraphQLFieldResolver, GraphQLResolveInfo } from "graphql"
import { IncomingMessage } from "http"
import { cats, persons, pets } from "./data.js"
import { Address, Person } from "./model/Person.js"

export let queryTypePersonNameResolv: GraphQLFieldResolver<any, IncomingMessage> =
    (_, { name }, context: IncomingMessage, info: GraphQLResolveInfo) => {
        return persons.get(name)
    }

export let queryTypePetNameResolv: GraphQLFieldResolver<any, IncomingMessage> =
    (_, { name }, context: IncomingMessage, info: GraphQLResolveInfo) => {
        return pets.get(name)
    }

export let queryTypeCatsResolv: GraphQLFieldResolver<any, IncomingMessage> =
    (_, { }, context: IncomingMessage, info: GraphQLResolveInfo) => {
        return cats.values()
    }

export let queryTypeCatNameResolv: GraphQLFieldResolver<any, IncomingMessage> =
    (_, { name }, context: IncomingMessage, info: GraphQLResolveInfo) => {
        return cats.get(name)
    }

export let addressTypeCityResolv: GraphQLFieldResolver<Address, IncomingMessage> =
    (_: Address, { }, context: IncomingMessage, info: GraphQLResolveInfo) => {
        return "Nuremberg"
    }

export let addressTypeFormattedResolv: GraphQLFieldResolver<Address, IncomingMessage> =
    (obj: Address, { }, context: IncomingMessage, info: GraphQLResolveInfo) => {
        return obj.street + " " + obj.number
    }

export let personTypeFullnameResolv: GraphQLFieldResolver<Person, IncomingMessage> =
    (obj: Person, { }, context: IncomingMessage, info: GraphQLResolveInfo) => {
        console.log(context.httpVersion)
        return obj.name + " " + obj.surname
    }
