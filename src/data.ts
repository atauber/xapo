import { RgbColor } from "./model/BaseModel.js"
import { Address, Person } from "./model/Person.js"
import { Cat, Dog } from "./model/Pet.js"

let flo_address, andreas_address: Address
let flo: Person
let andreas: Person = {
  type: 'PersonType',
}

flo_address = {
  type: "addressType",
  street: "Birkenweg",
  number: "3",
  rgb: RgbColor.Green
}

flo = {
  type: "personType",
  name: "Florian",
  surname: "Walde",
  age: 46,
  odd: 5,
  address: flo_address,
  bestFriend: andreas
}

andreas_address = {
  type: "addressType",
  street: "Fuerther Str.",
  number: "19",
  rgb: RgbColor.Red
}

andreas = {
  type: "personType",
  name: "Andreas",
  surname: "Tauber",
  age: 45,
  odd: 4,
  address: andreas_address,
  bestFriend: flo,
}

export let persons: Map<string, Dog> = new Map
persons.set('andreas', andreas)
persons.set('flo', flo)

let catUnicorn: Cat = {
  type: "catType",
  name: "unicorn",
  age: 3,
  nickname: "uni",

}

let catMelodie: Cat = {
  type: "catType",
  name: "melodie",
  age: 4,
  nickname: "melo"
}

export let cats: Map<string, Cat> = new Map()
cats.set('unicorn', catUnicorn)
cats.set('melodie', catMelodie)


let dogSugar: Dog = {
  type: "dogType",
  name: "sugar",
  age: 11,
  funname: "sweet sugar",
}

let dogShaggy: Dog = {
  type: "dogType",
  name: "shaggy",
  age: 11,
  funname: "shag",
}

export let dogs: Map<string, Dog> = new Map
dogs.set('sugar', dogSugar)
dogs.set('shaggy', dogShaggy)

export let pets: Map<String, Cat | Dog> = new Map([...cats.entries(), ...dogs.entries()])