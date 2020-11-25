//Задание 1
var arr = [-1, 0, 2, 34, -2];

var filterNumbersArr = arr.filter(function(number) {
    return number > 0;
});

console.log(filterNumbersArr);


//Задание 2
var arr = [-1, 0, 2, 34, -2];

var findArr = arr.find(function(i) {
    return arr[i] > 0;
});

console.log(findArr);

//Задание 3
function isPalindrome(str){
    var arr = str.toLowerCase().split(''),
        arr1 = str.toLowerCase().split('').reverse();

    var anagram = function(item, i) {
        return (item === arr1[i]);
    }

    alert(arr.every(anagram));
}
isPalindrome('шалаШ');
isPalindrome('привет');

//Задание 4
function areAnagrams(str, str1){
    var a = str.toLowerCase().split('').sort(),
        b = str1.toLowerCase().split('').sort();

    var  comparison = a.every(function(item, i){
        return item === b[i];
    });
    alert(comparison);
}

areAnagrams('кот', 'отк');

//Задание 5
function divideArr(arr, n){
    var b = 0;

    for(var i=0; i < arr.length;) {
        b = i + n;
        console.log( arr.slice(i,b) );
        i = i + n;
    }
}
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);