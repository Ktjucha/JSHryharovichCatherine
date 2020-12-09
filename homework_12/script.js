//Задание 1:
function transformationName(arr){

    var newArr = arr.map(function(item) {
        var obj = {};
        obj.name = item;
        return obj;
    });

    console.log(newArr);
}

var initialArr = ['Виктория', 'Егор', 'Илья', 'Сергей'];
transformationName(initialArr);


//Задание 2:
var initialObj2 = ['00', '13', '24'];

function currentTime(arr){

    var newArr = arr.reduce(function(arr, i) {
        return  arr = arr + ' : ' + i;
    },'Текущее время');

    console.log(newArr);
}
currentTime(initialObj2);


//Задание 3:
var initialStr3 = 'Каждый охотник желает знать, где сидит фазан';

function vowelsSearch(str){
    var vowels = ['а', 'о', 'и', 'у', 'е', 'я', 'ю', 'э', 'ы', 'ё'],
        count = 0, result = 0,
        arr = str.toLowerCase().split('');

    var k = arr.forEach(function(image) {

        for(var i=0; i < 10; i++){

            if(vowels[i] == image) {
                count++;
            }
        }
    });
    return count;
}
console.log(vowelsSearch(initialStr3));


//Задание 4:
var initialStr4 = 'Привет, студент! Студент... Как дела, студент?';

function countSentencesLetters(str){
    var a = str.split(/[!?.]/);

    for(var i = 0; i <= a.length; i++){

        if(a[i]) {
            console.log(a[i] + ':  Letters quantity is: ' + a[i].split(/[\s,]/).join('').length);
        }
    }
}

countSentencesLetters(initialStr4);


//Задание 5:
var initialStr5 = 'Ну привет, ну привет, на-на-на. Ну привет, ну привет,' +
    ' и я с ней! Ну привет, привет, на-на-на! Ну привет, ну привет, тебе'; // 8 - привет

function maxRepetition(str){
    var arr = str.toLowerCase().split(/[\s.!?,]/), obj = {};

    for(var i = 0; i <= arr.length; i++){
        var counter = 0;

        if(arr[i]){

            for(var j = 0; j < arr.length; j++){

                if(arr[i] == arr[j]){
                    counter++;
                }
            }

            if(!obj.hasOwnProperty(arr[i])){
                obj[counter] = arr[i];
            }

        }

    }

   console.log('Максимальное число повторений у слова ' +
       '"'+ obj[Object.keys(obj)[Object.keys(obj).length-1]] +
       '"  -  ' + Object.keys(obj)[Object.keys(obj).length-1]);
}

maxRepetition(initialStr5);


