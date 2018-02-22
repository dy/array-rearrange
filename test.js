'use strict'

var reorder = require('./')
var range = require('array-range')
var assert = require('assert')

// var N = 1e6
// var els = Array(N).fill(0)
// var idx = range(N)
// console.time(1)
// reorder(els, idx)
// console.timeEnd(1)


assert.deepEqual(reorder([4,3,2,1], [3,2,1,0]), [1,2,3,4])
assert.deepEqual(reorder([4,4, 3,3, 2,2, 1,1], [3,2,1,0], 2), [1,1, 2,2, 3,3, 4,4])


// perf
let N = 1e6
let a = Array.from({length: N}, Math.random)
let idx = Array.from({length: N}, (v, i) => (N - i - 1))

console.time(1)
reorder(a, idx)
console.timeEnd(1)
