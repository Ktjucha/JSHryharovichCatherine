var tableContainer = document.getElementsByTagName('tbody'),
    idContainer = document.getElementById('add');

idContainer.addEventListener('click', function(event) {
    var tdOld = document.getElementsByTagName('tr'),
        row = document.createElement('tr'),
        td1 = document.createElement('td'),
        td2 = document.createElement('td'),
        td3 = document.createElement('td');

    tableContainer[0].insertBefore(row, tdOld[0]);
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
});

tableContainer[0].addEventListener('click', function(event) {
    var target = event.target;

    if (target.parentElement == idContainer){
      return;
    }

    if (target.textContent == '') {
        target.innerHTML = '<input type="text" size="10" id="inputId">';
        target.firstElementChild.focus();
    } else{
        var str = target.textContent;

        target.innerHTML = '<input type="text" size="10" id="inputId">';

        var inputElement = document.getElementById('inputId');

        inputElement.value += str;
        inputElement.focus();

    }

    var input = document.getElementById('inputId');

    input.addEventListener('focusout', function() {
        target.textContent = input.value;
        input.remove();
    });

    input.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            target.textContent = input.value;
            input.remove();
        }
    });

});


