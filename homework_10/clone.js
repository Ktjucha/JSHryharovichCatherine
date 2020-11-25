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
};

function clone(initialObj) {

    if (typeof initialObj === 'object') {

        if( initialObj === null){
            return initialObj;
        }

        var cloneTarget = Array.isArray(initialObj) ? [] : {};

        for (var key in initialObj) {
            cloneTarget[key] = clone(initialObj[key]);
        }
        return cloneTarget;
    } else {
        return initialObj;
    }
}

clone(initialObj);
var clonedObj = clone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);