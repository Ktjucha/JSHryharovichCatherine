/*
    Написать функцию, которая будет принимать параметры x, y, z.
    При вызове функции передать в неё первым параметром объект вида {a: 2, b: 3}, вторым параметром целое число.
    X и y получаеать результат возведения в степень y числа x, умноженный на z.м из свойств переданного в функцию объекта a и b. У z значение по-умолчанию должно быть 1.
    Функция должна возвращ
    Валидацию опустить.
 */

{
    function calculations({a: x, b: y}, z = 1) {
        return (x**y)*z;
    }

    calculations({a: 2, b: 3}, 6);
}

/*
 Создать массив с именем и возрастом. Передать его в функцию. Функция должна принять его как два отдельных параметра
    name и age и вернуть строку вида:
      "Hello, I'm (имя) and I'm (возраст) years old."
    Не использовать деструктуризацию.
*/

{
    const arr = ['Вася', 30] ;

    function hello(name, age) {
        return `Hello, I'm ${name} and I'm ${age} years old.`
    }
    hello(...arr);
}

/* Написать функцию, принимающую массив чисел. При вызове числа передаются в функцию отдельными параметрами, не массивом.
    Вывести в консоль числа последовательно. */

{
    function numbers(...par) {

        for (let value of par) {
            console.log(value);
        }
    }

    numbers(2, 4, 5, 2, 4, 6);
}

/*
 Переписать решение задачи с поиском гласных на новый синтаксис. Использовать перебирающий метод массива и поиск
    элемента в массиве.
      function countVowelLetters(text) {
          text = text.toLowerCase().split('');

          var vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'],
              counter = 0;

          for (var i = 0; i < vowelLetters.length; i++) {
              for (var j = 0; j < text.length; j++) {
                  vowelLetters[i] === text[j] && counter++;
              }
          }

          return counter;
      }

      countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12
      */

{
    function countVowelLetters(text) {
        let counter = 0;

        const textNew = text.toLowerCase().split(''),
            vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];

        textNew.forEach(item => {
            vowelLetters.includes(item) && counter++;
        });

        return counter;
    }

    countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12
}



/*Написать функцию, принимающую массив объектов вида:
      [
          {name: 'Vasya Pupkin', age: 25},
          {name: 'Ivan Petrov', age: 30},
          {name: 'Fedor Ivanov', age: 42}
      ]
    и возвращающую объект вида:
      {
          Пользователи младше 40: [
              {name: 'Vasya Pupkin', age: 25},
              {name: 'Ivan Petrov', age: 30}
          ],
          Пользователь с именем Федор: {name: 'Fedor Ivanov', age: 42}
      }
    Для свойства "Пользователь с именем Федор" осуществлять поиск объекта по имени, которое начинается с подстроки Fedor.
*/

{
    const inf = [{name: 'Vasya Pupkin', age: 25},
        {name: 'Ivan Petrov', age: 30},
        {name: 'Fedor Ivanov', age: 42}
    ];

    function Search(arr) {
        const obj = {};
        let result = arr.filter(item => {

            if (item.age < 40) {
                return item;
            }
        });

        let fedor = arr.filter(item => {

            if (item.name.includes('Fedor')) {
                return item;
            }
        });

        obj['Пользователи младше 40:'] = result;
        obj['Пользователь с именем Федор:'] = fedor;

        return obj;

    }

    Search(inf);
}

/*  Написать функцию, принимающую массив имен пользователей и возвращающую массив объектов вида:
      [
          {Пользователь 1: 'Вася'},
          {Пользователь 2: 'Петя'}
      ]
*/

{
    const arr = ['Вася', 'Петя', 'Ира','Илья'];
    names(arr);

    function names(arr) {
        const obj = {};

        arr.map((name, i) => {
            return obj['Пользователь ' + (1 + i)] = name;
        });

        return obj;
    }
}

/*
Написать функцию, принимающую массив объектов и объединяющую их в один новый объект. Например:
      [
          {name: 'Vasya'},
          {name: 'Piotr', age: 25},
          {salary: '2000$'}
      ]
    необходимо преобразовать в
      {
          name: 'Piotr',
          age: 25,
          salary: '2000$'
      }
    Spread-оператор не использовать. Использовать перебирающий метод массивов. Старые объекты не должны преобразовываться.
    */

{
    const arr1 = [
        {name: 'Vasya'},
        {name: 'Piotr', age: 25},
        {salary: '2000$'}
    ];

    function union(arr) {
        let newArray = JSON.parse(JSON.stringify(arr));

        return  newArray.reduce((sum, current) => {
            return sum = Object.assign(sum, current);
        });
    }

    union(arr1);
}

/*
function Animal(name) {
    this.name = name;
    this._foodAmount = 50;
}

Animal.prototype._formatFoodAmount = function() {
    return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
};

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this, arguments);

    console.log('Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');
    return this;
};

var barsik = new Cat('Барсик');

console.log(barsik.feed().stroke().stroke().feed());

barsik = null;
*/

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
        constructor(name){
            super(name);
        }

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

    let barsik = new Cat('Барсик');
    console.log(barsik.feed().stroke().stroke().feed());
}

/*
 Написать функцию-промис, которая принимает в себя 2 целых числа и выводит в консоль числа, входящие в диапазон,
    каждую секунду. После окончания работы интервала в консоль должно вывестись последнее запомненное число.
    Если в функцию первым параметром было передано бОльшее число - значения параметров следует поменять местами.
    В случае, если в функцию были переданы не целые числа - промис должен быть завершен неуспешно.
 */
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