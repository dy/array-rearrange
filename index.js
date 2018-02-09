'use strict'

module.exports = reorder

// based off https://www.geeksforgeeks.org/reorder-a-array-according-to-given-indexes/
function reorder(arr, index, stride) {
    var n = index.length;

    if (!stride) stride = 1;

    if (stride === 1) {
        for (var i=0; i<n; i++) {
            while (index[i] != i) {
                var id = index[i]
                var oldId  = index[id];
                var value  = arr[id];

                arr[id] = arr[i];
                index[id] = id;

                index[i] = oldId;
                arr[i]   = value;
            }
        }
    }
    else {
        for (var i=0; i<n; i+=stride) {
            while (index[i] != i) {
                var id = index[i]
                var oldId  = index[id];

                for (var j = 0; j < stride; j++) {
                    var value  = arr[id * stride + j];
                    arr[id * stride + j] = arr[i * stride + j];
                    arr[i * stride + j]   = value;
                }

                index[id] = id;
                index[i] = oldId;
            }
        }
    }

    return arr
}
