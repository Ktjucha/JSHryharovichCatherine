var  button = document.getElementsByTagName('button');

button[0].addEventListener('click', informationOutput);

function displayTab(info){

    for(var i = 0; i < info.length; i++){

        var divInfo = document.createElement('div'),
            classContainer = document.getElementsByClassName('container');

        divInfo.innerHTML = '<img src="' + info[i].avatar +'"></img>'+
            '<div class="name"><p>first name:  ' + info[i].first_name + '</p>' +
            '<p>last name:  ' + info[i].last_name + '</p></div>';
        classContainer[0].appendChild(divInfo);

        var tabInfo = document.createElement('li'),
            classTabsMenu = document.getElementsByClassName('tabsmenu');

        tabInfo.innerText = 'User ' + (1 + i);
        classTabsMenu[0].appendChild(tabInfo);

        if(i === 0) {
            divInfo.classList.toggle('activeBlock');
            tabInfo.classList.add('active');
        }
    }
}

function informationOutput(){
    var info = [];

    if(document.getElementsByTagName('li').length !== 0){

        var tabRemove= document.getElementsByClassName('tabsmenu')[0],
            containerRemove = document.getElementsByClassName('container')[0];
            tabRemove.remove();
            containerRemove.remove();

        var tabsMenu = document.createElement('ul'),
            infoClass = document.getElementsByClassName('info');
            tabsMenu.classList.add('tabsmenu');
            infoClass[0].appendChild(tabsMenu);

        var divContainer = document.createElement('div');
            divContainer.classList.add('container');
            infoClass[0].appendChild(divContainer);
        }

    if(localStorage.getItem('usersData')){
         info = JSON.parse(localStorage.getItem('usersData'));
         displayTab(info);
    }else{
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
        //xhr.open('GET', 'https://reqres.in/xfdfh/users?page=2', true); //не рабочий вариант
        xhr.send();

        xhr.onload = function() {

            if (this.status === 200){
                try {
                    info = JSON.parse(this.response).data;
                    displayTab(info);
                    localStorage.setItem('usersData', JSON.stringify(info));
                }
                catch ( ex ) {
                    alert ( ex.name + '!' + ex.message );
                }
            }else{
                document.body.innerHTML = '<h3 style="text-align: center">Данные не получены  ' + this.status + '<h3>';
            }
        }
    }

    ;(function() {

        var tabsmenu = document.querySelectorAll('.tabsmenu');

        if (!tabsmenu) return;

        [].forEach.call(tabsmenu, function(menu) {
            menu.addEventListener('click', function(e) {
                if (e.target.tagName != 'LI') return;
                var currIndex = switchTab(menu, e.target);
                switchBlock(menu, currIndex);
            })
        });

        function switchTab(menu, tab) {
            var items = menu.querySelectorAll('li'),
                currIndex;

            [].forEach.call(items, function(item, index) {
                item.classList.remove('active');
                if (item === tab) {
                    item.classList.add('active');
                    currIndex = index;
                }
            });
            return currIndex;
        }

        function switchBlock(menu, currIndex) {
            var content	= menu.nextElementSibling,
                blocks = content.querySelectorAll('.container > div'),
                dell = document.querySelectorAll('.activeBlock')[0];
                dell.classList.remove('activeBlock');

            [].forEach.call(blocks, function(block, index) {
                block.removeAttribute('style');
                if (index == currIndex)
                    block.classList.toggle('activeBlock');
            });
        }
    })();

}