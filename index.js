'use strict'

module.exports = reorder

// based off https://www.geeksforgeeks.org/reorder-a-array-according-to-given-indexes/
function reorder(arr, index) {
    var n = arr.length;

    for (var i=0; i<n; i++) {
        while (index[i] != i) {
            var oldTargetI  = index[index[i]];
            var oldTargetE  = arr[index[i]];

            arr[index[i]] = arr[i];
            index[index[i]] = index[i];

            index[i] = oldTargetI;
            arr[i]   = oldTargetE;
        }
    }

    return arr
}
