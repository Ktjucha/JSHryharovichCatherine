
{
    function calculations({a: x, b: y}, z = 1) {
        return (x**y)*z;
    }

    calculations({a: 2, b: 3}, 6);
}

/*------------------------------------------- */

{
    const arr = ['Вася', 30] ;

    function hello(name, age) {
        return `Hello, I'm ${name} and I'm ${age} years old.`
    }
    hello(...arr);
}

/*------------------------------------------- */

{
    function numbers(...par) {

        for (let value of par) {
            console.log(value);
        }
    }

    numbers(2, 4, 5, 2, 4, 6);
}

/*------------------------------------------- */

{
    function countVowelLetters(text) {
        let counter = 0;

        const textNew = text.toLowerCase().split(''),
            vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];

        textNew.forEach(item =>  vowelLetters.includes(item) && counter++ )

        return counter;
    }

    countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12
}

/*------------------------------------------- */

{
    const inf = [{name: 'Vasya Pupkin', age: 25},
        {name: 'Ivan Petrov', age: 30},
        {name: 'Fedor Ivanov', age: 42}
    ];

    function search(arr) {

        return {
            ['Пользователи младше 40'] : arr.filter(item => item.age < 40),
            ['Пользователь с именем Федор'] : arr.find(item => item.name.startsWith('Fedor'))
        }
    }

    search(inf);
}

/*------------------------------------------- */
{
    const arr = ['Вася', 'Петя', 'Ира','Илья'];
    names(arr);

    function names(arr) {

        return arr.map((name, i) => `{Пользователь  ${++i}:  ${name} }`)

    }
}

/*------------------------------------------- */

{
    const arr1 = [
        {name: 'Vasya'},
        {name: 'Piotr', age: 25},
        {salary: '2000$'}
    ];

    function union(arr) {

        return  arr.reduce((sum, current) =>  Object.assign(sum, current)
        ,{});
    }

    union(arr1);
}

/*------------------------------------------- */

{
    class Animal{
        constructor(name){
            this.name = name;
            this._foodAmount = 50;
        }

        _formatFoodAmount(){
            return `${this._foodAmount} гр.`;
        }

        dailyNorm(amount){
            if (!arguments.length) return this._formatFoodAmount();

            if (amount < 50 || amount > 500){
                return `Недопустимое количество корма.`;
            }

            this._foodAmount = amount;
        }

        feed(){
            console.log(`Насыпаем в миску ${this.dailyNorm()}  корма.`);
        }

    }

    class Cat extends Animal {

        feed(){
            super.feed();
            console.log('Кот доволен ^_^');
            return this;
        }

        stroke(){
            console.log('Гладим кота.');
            return this;
        }
    }

    const barsik = new Cat('Барсик');
    console.log(barsik.feed().stroke().stroke().feed());
}

/*------------------------------------------- */
{
    let x = +prompt('значение от:'),
        y = +prompt('значение до:');

    function createFirstPromise(x, y) {

        if (x > y) {
            [x, y] = [y, x];
        }

        return new Promise((resolve, reject) => {

            console.log('Промис 1 запущен');

            if (Number.isInteger(x) && Number.isInteger(y)) {

                let timerId = setInterval(() => {
                    console.log(x);
                    x++;

                    if (x > y) {
                        clearInterval(timerId);
                        x--;
                        resolve(x);
                    }
                }, 1000);
            } else {
                reject('не целое число');
            }
        });
    }

    createFirstPromise(x, y)

        .then(result => console.log(`Результат промиса: ${result}`))

        .catch(error => console.log(`Возникла ошибка в промисе: ${error}`))

        .finally(() => console.log('Работа промиса завершена'));

}