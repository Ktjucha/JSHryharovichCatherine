//Задание 1

var arr = [-1, 0, 2, 34, -2];

function arrFilter(str){

    var filterNumbersArr = arr.filter(function(number) {
        return number > 0;
    });

console.log(filterNumbersArr);
}

arrFilter(arr);

//Задание 2

var arr = [-1, 0, 2, 34, -2];

function positiveNumber(arr) {

    var findArr = arr.find(function (item) {
        return  item > 0;
    });

    console.log(findArr);
}

positiveNumber(arr);

//Задание 3

function isPalindrome(str){
    var arr = str.toLowerCase(),
        arr1 = str.toLowerCase().split('').reverse().join('');

    if(arr == arr1){
        return true;
    }

    return false;
}
isPalindrome('шалаШ');
isPalindrome('привет');

//Задание 4

function areAnagrams(str, str1){
    var a = str.toLowerCase().split('').sort().join(''),
        b = str1.toLowerCase().split('').sort().join('');

    if(a == b){
        return true;
    }

    return false;
}

areAnagrams('кот', 'отк');

//Задание 5

function divideArr(arr, n){
    var b = 0, arr2 = [];

    for(var i = 0; i < arr.length;) {
        b = i + n;
        arr2.push(arr.slice(i, b));
        i = i + n;
    }

    return arr2;
}

divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);


//Задание 5 (2 вариант)

function divideArr(arr, n){

var result = arr.reduce(function(arr, x) {
    arr[arr.length - 1].push(x);

    if (x%n == 0) arr.push([]);

     return arr;
}, [[]]);

console.log(result);
}

divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);








