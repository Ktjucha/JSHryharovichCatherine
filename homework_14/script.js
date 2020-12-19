var coordinats = document.getElementsByTagName('input'),
    button = document.getElementsByTagName('button');

button[0].setAttribute('disabled', 'true');

function logKey(){
    if (coordinats[0].value != 0 && coordinats[1].value != 0) {
        button[0].removeAttribute('disabled');
    } else {
        button[0].setAttribute('disabled', 'true');
    }
}

coordinats[0].addEventListener('keyup', logKey);
coordinats[1].addEventListener('keyup', logKey);
button[0].addEventListener('click', inputValidation);

function inputValidation() {

    var inputX = +coordinats[0].value,
        inputY = +coordinats[1].value;

    if (isNaN(inputX) || (inputX ^ 0) !== inputX || inputX < 1 || inputX > 10) {
        alert('Ошибка в поле X, введите целое число от 1 до 10');
        coordinats[0].value = '';
        logKey();
        return;
    }

    if (isNaN(inputY) || (inputY ^ 0) !== inputY || inputY < 1 || inputY > 10) {
        alert('Ошибка в поле Y, введите целое число от 1 до 10');
        coordinats[1].value = '';
        logKey();
        return;
        }

    if (document.body.children[4]) {
        document.body.children[4].remove();
    }

    var table = document.createElement('table');
    document.body.appendChild(table);

    for (var i = 0; i < inputY; i++) {
        var trContainer = document.createElement('tr');

        table.appendChild(trContainer);

        for (var j = 0; j < inputX; j++) {
            var tdContainer = document.createElement('td');

            (i + j) % 2 == 0 && tdContainer.classList.add('black');
            trContainer.appendChild(tdContainer);
        }
    }

    button[0].setAttribute('disabled', 'true');
    coordinats[0].value = '';
    coordinats[1].value = '';
    coordinats[0].addEventListener('keyup', logKey);
    coordinats[1].addEventListener('keyup', logKey);

    var tableContainer = document.getElementsByTagName('table');

    tableContainer[0].addEventListener('click', clickTable);

    function clickTable() {
        var tdColor = document.getElementsByTagName('td');

        for(var i = 0; i < tdColor.length; i++) {

            if(tdColor[i].classList.contains('black')){
                tdColor[i].classList.remove('black');
            }else {
                tdColor[i].classList.add('black');
            }
        }

    }
}




