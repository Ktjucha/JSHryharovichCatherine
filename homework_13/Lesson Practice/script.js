var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');
localStorage.clear();

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var buttClick = document.body.getElementsByTagName('button');

buttClick[0].addEventListener('click', function() {
    var childrenFirst = firstPar.children;

    for (var i = 0; i < childrenFirst.length; i++) {
        childrenFirst[i].className = 'redClass';
        }
});

secondPar.onclick = myAlert;

function myAlert(event) {
    var target = event.target;

    if(target == secondPar.children[0] || target == secondPar.children[1]) {
        event.preventDefault();

        if(localStorage.getItem(target.textContent)){
            alert(localStorage.getItem(target.textContent).split('"')[3]);
        }else{
            var obj = {};
            obj.path = target.href;
            localStorage.setItem(target.textContent, JSON.stringify(obj));
            alert('ссылка '+ target.href +' сохранена');
            target.href = "#";
        }
    }
}