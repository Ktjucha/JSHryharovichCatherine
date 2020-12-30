//Задание 1:
/^([A-Za-z]{3,10})_([A-Za-z]{3,10})-(\d{4})@([A-Za-z0-9](\-|\.)?){2,20}(\.com)$/.test('name_surname-1234@gmail.com');

//Задание 2:
function phoneNumbersTest(number) {
    return /^(\+?375|8-0|80)(-?)(25|29|33|44|17)(-?)[1-9]{1}[\d]{2}(-?)[\d]{2}(-?)[\d]{2}$/.test(number);
}

console.log(phoneNumbersTest('+375-25-777-77-77'));
console.log(phoneNumbersTest('375299999999'));
console.log(phoneNumbersTest('8-044-444-44-44'));
console.log(phoneNumbersTest('8033-6666666'));


//Задание 3:
var initialStr3 = 'Каждый охотник желает знать, где сидит фазан',
    initialStr30 = 'Квврппнн';

function vowelsSearch(str){
    var result = str.match( /[аоиуеяюэыё]/ig );

    if(result == null){
        return 'гласных не найдено';
    }

    return result.length;
}

console.log(vowelsSearch(initialStr3));
console.log(vowelsSearch(initialStr30));

//-----------------------------------------

var initialStr = 'Каждый охотник желает знать, где сидит фазан',
    initialStr0 = 'Квврппнн';

function vowelsSearch1(str){
    var arr = str.split(/[аоиуеяюэыё]/ig);

    return arr.length - 1;
}

console.log(vowelsSearch1(initialStr));
console.log(vowelsSearch1(initialStr0));

