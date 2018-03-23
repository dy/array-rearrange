'use strict'

module.exports = reorder

// based off https://www.geeksforgeeks.org/reorder-a-array-according-to-given-indexes/
function reorder(arr, index, stride) {
    var n = index.length

    if (!stride) {
        stride = Math.floor(arr.length / index.length);
    }

    if (stride === 1) {
        reorderSimple()
    }
    else {
        reorderStride(stride)
    }

    function reorderSimple () {
        for (var i=0; i < n; i++) {
            while (index[i] != i) {
                var id = index[i]

                var oldId  = index[id];
                index[id] = id;
                index[i] = oldId;

                var value  = arr[id];
                arr[id] = arr[i];
                arr[i]   = value;
            }
        }
    }

    function reorderStride (stride) {
        for (var i=0; i < n; i+=stride) {
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
