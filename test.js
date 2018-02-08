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
