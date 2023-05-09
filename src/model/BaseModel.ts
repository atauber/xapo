/**
 * Base model for types.
 */


export interface Entity {
    type: string;
}

export enum RgbColor {
    Red = 0,
    Green,
    Blue,
}

export type Odd = number