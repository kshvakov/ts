'use strict';

function InsertionSort<T>(input: T[]): void {
    for (let i = 1; i < input.length; i++) {
        for (let j = i; j > 0 && input[j] < input[j - 1]; j--) {
            [input[j], input[j - 1]] = [input[j - 1], input[j]]
        }
    }
}

export { InsertionSort }