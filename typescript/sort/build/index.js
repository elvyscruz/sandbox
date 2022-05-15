"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { NumbersCollection } from "./NumbersCollection";
const CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([9,7,6,4,2,8])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)
const charactersCollection = new CharactersCollection_1.CharactersCollection('zCxlrhadVlT');
charactersCollection.sort();
console.log(charactersCollection.data);
