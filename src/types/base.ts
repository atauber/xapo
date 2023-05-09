import {
    GraphQLEnumType, GraphQLEnumTypeConfig, GraphQLEnumValueConfig, GraphQLEnumValueConfigMap,
    GraphQLInterfaceType, GraphQLInterfaceTypeConfig,
    GraphQLScalarLiteralParser,
    GraphQLScalarSerializer,
    GraphQLScalarType,
    GraphQLScalarTypeConfig,
    GraphQLScalarValueParser,
    GraphQLString,
    Kind,
    ValueNode
} from "graphql";
import { IncomingMessage } from "http";
import { Entity } from "../model/BaseModel";

let entityITypeConfig: GraphQLInterfaceTypeConfig<Entity, IncomingMessage> = {
    name: "EntityType",
    description: "a interface for entities.",
    fields: {
        type: {
            type: GraphQLString,
            description: "graphql type as string value."
        },
    },
}

//Base entity type ingerface.
export let entityIType = new GraphQLInterfaceType(entityITypeConfig)


function oddValue(value: number) {
    return value % 2 === 1 ? value : 0
}

export let serialize: GraphQLScalarSerializer<number> = (value: unknown) => {
    if (typeof value === 'number') {
        return oddValue(value)
    }
    return 0
}

export let parseValue: GraphQLScalarValueParser<number> = (value: unknown) => {
    if (typeof value === 'number') {
        return oddValue(value)
    }
    return 0
}

export let parseLiteral: GraphQLScalarLiteralParser<number> = (ast: ValueNode) => {
    if (ast.kind === Kind.INT) {
        return oddValue(parseInt(ast.value, 10))
    }
    return 0
}

//Odd type
let oddTypeConfig: GraphQLScalarTypeConfig<number, number> = {
    name: "Odd",
    description: "a typ which returns only odd numbers.",
    serialize: serialize,
    parseValue: parseValue,
    parseLiteral: parseLiteral
}

export let oddType: GraphQLScalarType<number> = new GraphQLScalarType(oddTypeConfig)

//EnumType rgb
let rgbTypeRedValue: GraphQLEnumValueConfig = {
    value: 0,
    description: "Red Color",
}

let rgbTypeGreenValue: GraphQLEnumValueConfig = {
    value: 1,
    description: "Green Color"
}

let rgbTypeBlueValue: GraphQLEnumValueConfig = {
    value: 2,
    description: "Blue Value",
}

let rgbTypeEnumValuesConfig: GraphQLEnumValueConfigMap = {
    RED: rgbTypeRedValue,
    GREEN: rgbTypeGreenValue,
    BLUE: rgbTypeBlueValue,
}

let rgbTypeConfig: GraphQLEnumTypeConfig = {
    name: "RgbType",
    description: "A type for rgb colors.",
    values: rgbTypeEnumValuesConfig,
}

export let rgbType = new GraphQLEnumType(rgbTypeConfig)
