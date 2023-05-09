import { GraphQLFieldResolver } from "graphql"
import { IncomingMessage } from "http"
import { cats, persons, pets } from "./data.js"
import { Address, Person } from "./model/Person.js"

export let queryTypePersonNameResolv: GraphQLFieldResolver<any, IncomingMessage> = (_, { name }, context, info) => {
    return persons.get(name)
}

export let queryTypePetNameResolv: GraphQLFieldResolver<any, IncomingMessage> = (_, { name }, context, info) => {
    return pets.get(name)
}

export let queryTypeCatsResolv: GraphQLFieldResolver<any, IncomingMessage> = (_, { }, context, info) => {
    return cats.values()
}

export let queryTypeCatNameResolv: GraphQLFieldResolver<any, IncomingMessage> = (_, { name }, context, info) => {
    return cats.get(name)
}

export let addressTypeCityResolv: GraphQLFieldResolver<Address, IncomingMessage> = (_, { }, context, info) => {
    return "Nuremberg"
}

export let addressTypeFormattedResolv: GraphQLFieldResolver<Address, IncomingMessage> = (obj, { }, context, info) => {
    return obj.street + " " + obj.number
}

export let personTypeFullnameResolv: GraphQLFieldResolver<Person, IncomingMessage> = (obj, { }, context, info) => {
    console.log(context.httpVersion)
    return obj.name + " " + obj.surname
}
