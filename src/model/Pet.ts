/**
 * types for pets
 */

import { Entity } from "./BaseModel";

export interface Pet extends Entity {
    name?: string;
    age?: number;
}

export interface Dog extends Pet {
    funname?: string;
}


export interface Cat extends Pet {
    nickname?: string;
}
