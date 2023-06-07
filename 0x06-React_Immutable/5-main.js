import { concatElements, mergeElements } from "./5-merge";

const p1 = [1, 2]
const p2 = [3, 2]
const p3 = concatElements(p1, p2)
const m = mergeElements(p1, p2)
console.log(p3)
console.log(m)