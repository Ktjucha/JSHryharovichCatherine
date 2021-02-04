var btnStart = document.getElementById('btn'),
    stateBtn = btnStart.dataset.state,
    milliseconds = document.getElementsByClassName('msms')[0],
    seconds = document.getElementsByClassName('ss')[0],
    minutes = document.getElementsByClassName('mm')[0],
    toolsBtm = document.getElementsByClassName('tools')[0],
    result = document.getElementsByClassName('result')[0],
    intervalID = 0,
    msec = 0,
    min = 0,
    sec = 0;

btnStart.addEventListener('click', startStopRun);

function startStopRun() {
    if (stateBtn == 'notWork'){
        btnStart.innerText = 'Stop';
        stateBtn = 'work';
        toolsBtm.classList.remove('tools');
        toolsBtm.classList.add('active');
    }else if(stateBtn == 'work'){
        btnStart.innerText = 'Run';
        stateBtn = 'run';
        clearInterval(intervalID);
    }else{
        btnStart.innerText = 'Stop';
        stateBtn = 'work';
    }

     intervalID = setInterval(function tick() {
         if(stateBtn == 'run'){
             clearInterval(intervalID);
         }
        msec += 1;
        milliseconds.innerText = (msec >= 10) ? msec : ('0' + msec);
        if (msec == 99) {
            sec++;
            seconds.innerText = (sec >= 10) ?  sec : ('0' + sec);
            milliseconds.innerText = '00';
            msec = 0;
        }
        if (sec == 60) {
            min++;
            minutes.innerText = (min >= 10) ? min : ('0' + min);
            seconds.innerText = '00';
            sec = 0;
        }

        if (min === 60){
                document.getElementById('save').hidden = true;
                btnStart.hidden = true;
            clearInterval(intervalID);
        }

    }, 10);
}


var resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', resetForm);

function resetForm() {
    clearInterval(intervalID);
    milliseconds.innerText = '00';
    seconds.innerText = '00';
    minutes.innerText = '00';
    toolsBtm.classList.remove('active');
    toolsBtm.classList.add('tools');
    stateBtn = 'notWork';
    msec = 0;
    min = 0;
    sec = 0;
    result.innerHTML = '';
    btnStart.innerText = 'Start';
    document.getElementById('save').hidden = false;
    btnStart.hidden = false;
    localStorage.clear();
}

var saveBtn = document.getElementById('save');

saveBtn.addEventListener('click', saveTime);

function saveTime() {
    toolsBtm.getElementsByClassName('result')[0].innerHTML +=
         minutes.textContent +' : '+ seconds.textContent +' : '+ milliseconds.textContent + '' +
        '</br>';
}

window.addEventListener('unload', saveLocal);

function saveLocal() {
    var m = minutes.textContent,
        s = seconds.textContent,
        ms = milliseconds.textContent,
        arrTime = [m, s, ms],
        arrSave = result.innerHTML.split('<br>');

    localStorage.setItem('stateBtn', stateBtn);
    localStorage.setItem('time', JSON.stringify(arrTime));
    localStorage.setItem('key', JSON.stringify(arrSave));
}

 window.addEventListener('load', rendering);

function rendering(){
    var arrTime = [];

    toolsBtm.classList.remove('tools');
    toolsBtm.classList.add('active');

    if(!localStorage.getItem(stateBtn)) {
        stateBtn = localStorage.getItem('stateBtn');
        arrTime = JSON.parse(localStorage.getItem('time'));

            milliseconds.innerText = +arrTime[2];
            msec = +arrTime[2] - 1;

            seconds.innerText = arrTime[1];
            sec = +arrTime[1];

            minutes.innerText = arrTime[0];
            min = +arrTime[0];


        (stateBtn == 'notWork') ? resetForm() : (stateBtn == 'work') ? stateBtn = 'notWork' : stateBtn = 'work';

        var time = JSON.parse(localStorage.getItem('key'));

        for(var i = 0; i < time.length; i++){

            if(time[i] !== '') {
                result.innerHTML += time[i] + '</br>';
            }
        }

        startStopRun();
    }
}
