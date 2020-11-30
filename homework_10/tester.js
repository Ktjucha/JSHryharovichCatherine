var initialObj = {
        string: 'Vasya',
        number: 30,
        boolean: true,
        undefined: undefined,
        null: null,
        array: [1, 2, 3],
        object: {
            string2: 'Petrov',
            object2: {
                array2: [{}, {}]
            },
            object3: {}
        },
        method: function() {
            alert('Hello');
        }
    },

    clonedObj = {
        string: 'Vasya',
        number: 30,
        boolean: true,
        undefined: undefined,
        null: null,
        array: [1, 2, 3],
        object: {
            string2: 'Petrov',
            object2: {
                array2: [{}, {}]
            },
            object3: {}
        },
        method: function() {
            alert('Hello');
        }
    };

function objectTester(a, b) {


    if (a === b) return true;


    if (typeof a != typeof b) return false;


    if (typeof a == 'number' && isNaN(a) && isNaN(b)) return true;



    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    var every = function(arr, callback, thisArg) {
        var i, length = arr.length;
        for (i = 0; i < length; i = i + 1) {
            if (!callback.call(thisArg, arr[i], i, arr)) {
                return false;
            }
        }
        return true;
    };

    if (aKeys.length != bKeys.length) return false;


    if (!aKeys.every(function(key){return b.hasOwnProperty(key)})) return false;

    return aKeys.every(function(key){
        return objectTester(a[key], b[key])
    });

    return false;
}
alert(objectTester(initialObj, clonedObj));