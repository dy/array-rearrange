'use strict'

module.exports = reorder


function reorder(arr, index, stride) {
    var n = index.length

    if (!stride) {
        stride = Math.floor(arr.length / index.length);
    }

    if (arr.length !== index.length * stride) {
        throw Error('Bad length of index array')
    }

    if (stride === 1) {
        reorderSimple()
    }
    else {
        reorderStride(stride)
    }


    function reorderSimple () {
        for (var start = 0; start < n; start++) {
            let currId = start
            let pickId = index[currId]

            while (pickId !== start) {
                let v = arr[pickId]
                arr[pickId] = arr[currId]
                arr[currId] = v

                index[currId] = currId
                currId = pickId
                pickId = index[currId]
            }
            index[currId] = currId
        }
    }

    function reorderStride (stride) {
        for (var start = 0; start < n; start++) {
            let currId = start
            let pickId = index[currId]

            while (pickId !== start) {
                for (var j = 0; j < stride; j++) {
                    var value  = arr[pickId * stride + j];
                    arr[pickId * stride + j] = arr[currId * stride + j];
                    arr[currId * stride + j]   = value;
                }

                index[currId] = currId
                currId = pickId
                pickId = index[currId]
            }
            index[currId] = currId

        }
    }

    return arr
}
