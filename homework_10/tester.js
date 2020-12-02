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
                array2: [{string2: 'Petrov'}, {}]
            },
            object3: {}
        },
        method: function() {
            alert('Hello');
        }
    };

function countProps(obj) {
    var count = 0;

    for (var k in obj) {

        if (obj.hasOwnProperty(k)) {
            count++;
        }
    }
    return count;
}

function objectTest(Obj1, Obj2) {

    if (typeof(Obj1) !== typeof(Obj2)) {
        return false;
    }

    if (Obj1 instanceof Object && Obj2 instanceof Object) {

        if (countProps(Obj1) !== countProps(Obj2)) {
            return false;
        }

        for (var k in Obj1) {

            if (!objectTest(Obj1[k], Obj2[k])) {
                return false;
            }
        }
        return true;
    } else {
        return Obj1 === Obj2;
    }

    if(typeof(Obj1) === "function") {
        return Obj1.toString() === Obj2.toString();
    }
}
alert(objectTest(initialObj, clonedObj));