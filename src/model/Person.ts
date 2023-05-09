/**
 * type for persons
 */


import { Entity, Odd, RgbColor } from "./BaseModel";

export interface Person extends Entity {
    name?: string;
    surname?: string;
    fullname?: string;
    odd?: Odd;
    age?: number;
    address?: Address;
    bestFriend?: Person;
}

export interface Address extends Entity {
    street: string
    number: string
    rgb?: RgbColor
    city?: string
    formatted?: string
}
