import { InsertionSort } from "./sort"


let numbers: number[] = [6, 2, 8, 4, 9, 1]
let letters: string[] = ["V", "B", "Z", "C", "R", "A"]

InsertionSort(numbers)
InsertionSort(letters)

console.log("InsertionSort:")
console.log(numbers, letters)
console.log("=====================================================")

